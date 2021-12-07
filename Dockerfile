FROM node:12.22-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

COPY ./dist ./dist

CMD ["yarn", "run", "start:dev"]