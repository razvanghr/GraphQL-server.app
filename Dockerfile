FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --force

ENV PORT = 8080

COPY . .

EXPOSE 8080

CMD [ "npm" , "run" , "start" ]
