#!/bin/bash

set -ex

rm -rf dist dist.tar.gz

cd website
yarn install
yarn build
mv build  ../docs
