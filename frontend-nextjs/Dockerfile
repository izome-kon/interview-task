FROM node:21-alpine3.18

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .


RUN npm run build

ENV NODE_ENV production
ENV PORT 80

EXPOSE 80

CMD ["npm", "start"]