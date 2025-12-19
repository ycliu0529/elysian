#!/bin/bash
set -e

cd /volume1/docker/astro/elysian
git pull
npm install
npm run build
sudo docker restart blog-nginx

