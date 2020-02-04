FROM node:12


WORKDIR /usr/src/app


COPY ./agelink-app/package*.json ./

RUN npm install
RUN npm ci --only=production

COPY  ./agelink-app .

EXPOSE 3000

CMD ["npm", "start"]

