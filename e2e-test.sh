#!/bin/bash

set -e

nohup npm run start >/dev/null 2>&1 &
wait-on http://localhost:3000 && npm run e2e-test
kill $!
pkill -f geckodriver
