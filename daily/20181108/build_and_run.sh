#!/bin/bash

echo "build by babel"
babel ./src/index.js -d dist/babel || exit 1

echo "build by webpack"
NODE_ENV=production webpack || exit 1

babel_file="./dist/babel/index.js"
webpack_file="./dist/webpack/index.js"

printf "\e[37;40;1m\nResult\n"
printf "  >>> babel build[$(ls -l $babel_file | awk '{ print $5; }') b]    : $(node $babel_file)\n"
printf "  >>> webpack build[$(ls -l $webpack_file | awk '{ print $5; }') b] : $(node $webpack_file)\e[m\n"