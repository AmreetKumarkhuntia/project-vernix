#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run check
npm run build
