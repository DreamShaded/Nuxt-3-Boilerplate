FROM node:20-alpine

ENV NODE_ENV development

WORKDIR /backend

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

EXPOSE 3000
CMD [ "yarn", "dev" ]
