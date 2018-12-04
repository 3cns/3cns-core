#3cns Core Application

This repo contains 3 Parts of the Project One as Core Laravel Project that functions as the API backend asn servers the static assets and two submodules which require compiling.

- Angular2 frontend (submodule at path resoureces/assets/frontend)
- Vue.js Chat Feature (submodule at path resoureces/assets/frontend)
   - This includes the Chat Widget and the SocketIO server code

Specific dev instructions are located in each of the submodules


To update the Core assets and move them into the public
resource folder you should run `npm run dev` which will
copy the Frontend and Chat dist assets to their respective final destinations.
You will want to compile them for the specific env prior to performing this action.



The Socket Server Can be started for dev

```
npm run chat-socket
```

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


There are also process jobs so make sure the workers are running
```
php artisan queue:work
```


## TODOs

### URGENT
- [ ] Add default Timezone on widgets, make sure it has a relevant pivot entry.
- [ ] Add Foreing Keys on SQL Relations w/ Cascade actions


### WARNING
- [x] A Large number of methods in Chat Controller Do not return any response, they should always return something.
- [ ] Refactor meaningless numbers into class consts so their meaning is clear.
- [ ] Refactor if statements using count() to use empty() so it won't break w/ PHP 7.2
- [x] Add Recompile Script
- [x] Fix Naming conventions of Models/Relations/DB Tables to aid in future dev clairity as to functionality.

### Improvement
- [ ] Refactor duplicated code for success / error responses on controller
- [ ] Actually Send HTTP Error Responses
