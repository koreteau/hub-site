FROM node:18-alpine
WORKDIR /front/
COPY ./public/
COPY ./src/ 
COPY package.json
RUN npm install
CMD ["npm", "run start"]