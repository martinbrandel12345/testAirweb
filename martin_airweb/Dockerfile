FROM node:18-alpine 

WORKDIR /app

COPY package*.json ./
RUN npm install -g @quasar/cli
RUN npm i

COPY . .

CMD ["quasar", 'dev']

