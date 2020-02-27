FROM node:slim
WORKDIR /app
COPY ./package.json ./yarn.lock /app/
RUN yarn install
COPY . .
CMD [ "yarn", "start" ]
EXPOSE 3000