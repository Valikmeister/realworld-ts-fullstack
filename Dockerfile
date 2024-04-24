FROM node:21-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN mkdir -p /home/node/app/dist 
WORKDIR /home/node/app 
COPY . . /home/node/app/
COPY dist/ /home/node/app/dist
RUN npm install
WORKDIR /home/node/app/dist/infrastructure

EXPOSE 3000
CMD [ "node", "server.js" ] 