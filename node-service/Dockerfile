FROM node:20-alpine

RUN apk update && apk add --no-cache bash

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY index.js .

CMD ["node", "index.js"]
