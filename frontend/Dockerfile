FROM node:20-alpine

ENV NODE_ENV development

WORKDIR /frontend

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

EXPOSE 5000
CMD [ "sh", "-c", "./startup.sh" ]
