#3cns Core Application

This repo contains 3 Parts of the Project.
One as Core Laravel Project that functions as the API backend and servers the static assets and two submodules which require compiling.

- Angular2 frontend (submodule at path resoureces/assets/frontend)
- Vue.js Chat Feature (submodule at path resoureces/assets/frontend)
   - This includes the Chat Widget and the SocketIO server code


To pull the project and it's submodules run

```
git clone --recursive https://github.com/3cns/3cns-core.git
```

Specific dev instructions are located in each of the submodules


To update the Core assets and move them into the public
resource folder you should run `npm run dev` which will
copy the Frontend and Chat dist assets to their respective final destinations.
You will want to compile them for the specific env prior to performing this action.
There's also `npm run stage` and `npm run production` respectively



The Socket Server Can be started for dev
```
npm run chat-socket-dev
npm run chat-socket-stage
npm run chat-socket-production
```


The URLs in the submodules can be configured per environment and should be coordinated.


And managed w/ forever using

```
 NODE_ENV=stage forever start -o ./socket/logs/chat_socket.out.log -e ./socket/logs/chat_socket.out.log socket/app.js
 NODE_ENV=production forever start -o ./socket/logs/chat_socket.out.log -e ./socket/logs/chat_socket.out.log socket/app.js
```

### !!! Warning W/ CentOS servers you may need to run !!!
```
setsebool -P httpd_can_network_connect 1
```
So the web app can connect to the socket server using curl


_**NOTE** When running the socket locally, you should use a remote proxy like ngrok,
and set the URL in twilio to the Ngrok url, so twilio can reach you local env._


There are also process jobs so make sure the workers are running
```
php artisan queue:work
```


## TODOs

### URGENT
- [ ] Add default Timezone on widgets, make sure it has a relevant pivot entry.
- [ ] Add Foreing Keys on SQL Relations w/ Cascade actions


### WARNING
- [ ] Refactor meaningless numbers into class consts so their meaning is clear.
- [ ] Refactor if statements using count() to use empty() so it won't break w/ PHP 7.2
- [ ] Intercept and Format Phone Numbers consistently across the board.
- [x] Add Recompile Script
- [x] Fix Naming conventions of Models/Relations/DB Tables to aid in future dev clarity as to functionality.

### Improvement
- [ ] Refactor duplicated code for success / error responses on controller
- [ ] Actually Send HTTP Error Responses
