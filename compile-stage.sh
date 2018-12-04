#!/bin/bash
#
# Run NPM on Frontend, Backend, and Core to sync all assets
#

APP_ROOT=$(cd "${1}" ; pwd)

cd ${APP_ROOT}/resources/assets/frontend
ng build --env=stage

cd ${APP_ROOT}/resources/assets/chat-widget
npm run stage

cd ${APP_ROOT}
npm run production
