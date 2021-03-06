#!/bin/bash
#
# Run NPM on Frontend, Backend, and Core to sync all assets
#

APP_ROOT=$(cd "${1}" ; pwd)

echo "App ROOT:" ${APP_ROOT}

cd ${APP_ROOT}/resources/assets/frontend
ng build

cd ${APP_ROOT}/resources/assets/chat-widget
npm run dev

cd ${APP_ROOT}
npm run development
