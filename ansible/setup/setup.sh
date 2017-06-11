#!/usr/bin/env bash
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
ROOT_DIR=$(cd "$DIR/../" && pwd)
EXTERNAL_ROLE_DIR="$ROOT_DIR/roles/external"
ROLES_REQUIREMNTS_FILE="$ROOT_DIR/roles/roles_requirements.yml"

if [ -d "$EXTERNAL_ROLE_DIR" ]; then
    cd "$EXTERNAL_ROLE_DIR"
	if [ "$(pwd)" == "$EXTERNAL_ROLE_DIR" ];then
	  echo "Removing current roles in '$EXTERNAL_ROLE_DIR/*'"
	  rm -rf *
	else
	  msg_exit "Path error could not change dir to $EXTERNAL_ROLE_DIR"
	fi
fi

ansible-galaxy install -r "$ROLES_REQUIREMNTS_FILE" --force --no-deps -p "$EXTERNAL_ROLE_DIR"

exit 0