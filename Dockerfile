FROM node:10
WORKDIR /app
COPY app.js ./app.js
COPY package.json ./package.json
RUN npm i
ENV PORT $PORT
CMD ["npm", "start"]