#!/bin/bash
set -e

cd /volume1/docker/astro/elysian

echo "== git pull =="
git pull

echo "== npm install =="
npm install

echo "== astro build =="
npm run build

echo "== fix dist permissions (prevent 403) =="
chmod -R o+rX dist

echo "== restart nginx container =="
sudo docker restart blog-nginx

echo "✅ Update complete"
