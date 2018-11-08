#!/bin/bash

echo "build by babel"
npm run build:b || exit 1

echo "build by webpack"
npm run build:w || exit 1

printf "\e[37;40;1m\nResult\n"
printf "  >>> babel build  : $(node ./dist/babel/index.js)\n"
printf "  >>> webpack build: $(node ./dist/webpack/index.js)\e[m\n"