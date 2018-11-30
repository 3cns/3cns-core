#!/bin/bash
#

STAGE='dugong.telemojo.net'
STAGE_ROOT='/var/www/vhosts/3cns_core'
STAGE_USER='root'

set_project_path()
{
  if [ -d $1 ]; then
    PROJECT_PATH=$(cd "${1}" ; pwd)
  fi
  echo "Using Project Path " "${PROJECT_PATH}"
}

build() {
    ${PROJECT_PATH}/compile-stage.sh
}

deploy()
{
    rsync -av ${PROJECT_PATH}/ ${STAGE_USER}@${STAGE}:${STAGE_ROOT} --exclude='.env' --exclude='.git' --exclude='node_modules'
}

set_project_path

build
deploy