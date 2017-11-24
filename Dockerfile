FROM node:alpine
MAINTAINER Paolo F Bongiovanni <pfbongio@gmail.com>

RUN npm install -q -g pm2

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN npm install --production -q

RUN mkdir -p /usr/src/app/app
COPY app /usr/src/app/app

ENV PORT=80
