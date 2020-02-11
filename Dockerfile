FROM node:10

#create app directory
WORKDIR /usr/src/app

#Installing dependencies
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "server.js" ]