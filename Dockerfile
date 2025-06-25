FROM node:22.14.0-alpine3.21

WORKDIR app/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

ENV HOST=0.0.0.0

CMD ["npm", "run", "dev", "--", "--host"]
