FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

WORKDIR /app/src/site-novadeploy

EXPOSE 3000

CMD ["npm", "start"]
