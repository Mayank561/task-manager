FROM node:20

WORKDIR /Task-Manager

COPY package*.json ./

RUN npm install

COPY . .

# EXPOSE 3000

CMD ["npm", "start"]

