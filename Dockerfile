
# Build step
FROM node:16 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .


# Production step
FROM base as production
ENV NODE_PATH=./build
RUN npm run build
