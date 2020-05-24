#!/bin/bash
cd build

if [ $1 == 'beta' ]
then
  npm publish --access public --tag beta
else
  npm publish --access public
fi
