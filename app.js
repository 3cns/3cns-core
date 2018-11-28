var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var axios = require('axios');
var bodyParser = require('body-parser');

var API_URL = 'http://dev.3cns.com/api/v1/';
// var API_URL = 'http://178.128.187.125/api/v1/';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

// parse application/json
app.use(bodyParser.json());

/** Chat App */
io.on('connection', function (socket) {
    console.log('User connected');

    /** Rest api */
    app.post('/send-rooms', function (req, res) {
        console.log('In post');
        sendRooms();
        res.status(200).json({
            status: true
        });
    });

    /** Rest api */
    app.post('/mobile-chat', function (req, res) {
        console.log('In mobile chat post edited');
        console.log(req.body);
        newMsg(req.body);
        res.status(200).json({
            status: true,
            req: req.body
        });
    });

    app.post('/agent-notification', function (req, res) {
        console.log('agent notification');
        io.sockets.in(data.chatRoomId).emit('agentNotification','Transferred chat is not accepted by anyone so it has been reinstated to you.');
        res.status(200).json({
            status: true
        })
    });

    /** Event emitted when a client connects */
    socket.on('client-connected', function (data) {
        console.log('Node: Client Connected: ', data);
        /** Api call to create room for client and agents */
        axios.post(API_URL + 'web-chat', data)
            .then(function (res) {
                console.log("response ");
                if (res.data.status) {
                    var resp = res.data.response;
                    console.log('Emitting Event from to vue: clientAddedToRoom');
                    socket.emit('clientAddedToRoom', resp);
                    socket.join(resp.chatRoomId);
                    io.sockets.in(resp.chatRoomId).emit('connectedToRoom', 'We are connecting you to an agent');
                    console.log(resp.name + 'is joined  to room : ', resp.chatRoomId);
                    io.sockets.in(resp.chatRoomId).emit('updateRoom', resp);
                    sendRooms();
                } else {
                    console.log(res);
                    socket.emit('clientNotAddedToRoom');
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    });

    /** Event emitted when an agent gets connected */
    socket.on('get-added-rooms', function () {
        console.log('Node: Get Added Rooms');
        sendRooms();
    });

    /** Event emitted by agents when they want to get added to some rooms */
    socket.on('add-agent-to-rooms', function (rooms) {
        console.log('Node: Add Agent To Rooms ');
        for (var i = 0, len = rooms.length; i < len; i++) {
            if (!(rooms[i].name in socket.rooms)) {
                socket.join(rooms[i].name);
                socket.emit('agent-added-to-room', rooms[i]);
                console.log('Agent Added To Room ', rooms[i].name);
                if (rooms[i].status == 1) {
                    io.sockets.in(rooms[i].name).emit('msg-of-acceptance', 'You have to \'ACCEPT\' or \'REJECT\' this Message!');
                }
            }
        }
    });

    /** API call to get all the agent list and the list of rooms they are assigned to with status. */
    var sendRooms = function () {
        console.log('In Send Rooms Function');

        /** API calls to get data of all agent_id and rooms they are assigned to with status */
        axios.get(API_URL + 'all-agents-chatrooms')
            .then(function (res) {
                if (res.data.status) {
                    console.log('Node : New Rooms Added ', res.data.response);
                    io.sockets.emit('new-rooms-added', res.data.response);
                } else {
                    console.log(res);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    };

    /** New Msg */
    var newMsg = function (data) {
        /**api call to add message to the database */
        axios.post(API_URL + 'web-chat-message', data)
            .then(function (response) {
                console.log(response.data);
                if(response.data.status) {
                    // Send message to everyone in that particular room
                    console.log(response.data.response);
                    io.sockets.in(data.chatRoomId).emit('newmsg',response.data.response);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    /** Send message to everyone in a particular room */
    socket.on('msg', function (data) {
        console.log('message sent');
        console.log(data);
        newMsg(data);
    });

    /** Agent accepts message */
    socket.on('agent-performed-some-action', function (data) {

        console.log('Actions ', data);
        /** Api call to accept msg for agent */
        axios.post(API_URL + 'agent-chat-action', data)
            .then(function (res) {
                if (res.data.status) {
                    console.log('After Action: ', res.data);
                    if (data.status == 2) {
                        io.sockets.in(res.data.response.chatRoomId).emit('which-agent-accepted', res.data.response);
                    } else if (data.status == 3) {
                        io.sockets.in(res.data.response.chatRoomId).emit('which-agent-rejected', res.data.response);
                    } else if (data.status == 4) {
                        io.sockets.in(res.data.response.chatRoomId).emit('which-agent-transferred', res.data.response);
                        io.sockets.in(res.data.response.chatRoomId).emit('clientChatTransferred', 'Your chat has been transferred!');
                    } else if (data.status == 5) {
                        io.sockets.in(res.data.response.chatRoomId).emit('which-agent-resolved', res.data.response);
                        io.sockets.in(res.data.response.chatRoomId).emit('clientChatResolved', 'Thank You For Connecting With Us!');
                    }
                } else {
                    console.log(res);
                }
            })
            .catch(function (err) {
                console.log(err);
            });
    });

    /** Removing agent from room */
    socket.on('remove-agent-from-room', function (data) {
        socket.leave(data.room_number);
    });

    /** Removing agent from room */
    socket.on('agent-disconnected', function () {
        socket.disconnect();
    });

    /** on socket disconnection */
    socket.on('disconnect', function()  {
        console.log(socket.id,'disconnected');
        // io.sockets.in(data.chatRoomId).emit('client-disconnected', data);
        io.sockets.in(socket.id).emit('disconnect');
        socket.disconnect();
    });

});

http.listen(3000, function () {
    console.log('listening on *:3000');
});