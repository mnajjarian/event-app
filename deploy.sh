#!/bin/sh
npm run build
rm -rf ../event-app-backend/build
cp -r build ../event-app-backend/