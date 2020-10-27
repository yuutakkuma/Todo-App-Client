FROM node:12-slim
WORKDIR /usr/app
COPY package.json yarn.lock tsconfig.json ./
RUN yarn
COPY . .
CMD ["yarn","start"]