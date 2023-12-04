FROM node:18-alpine
WORKDIR /hub-site/
COPY public/
COPY src/
COPY package.json
RUN npm install
CMD ["npm", "run start"]