FROM node:8.6.0
RUN mkdir -p /wwwroot
WORKDIR /wwwroot

RUN npm install --global nodemon

COPY package.json /wwwroot/
RUN npm install

COPY . /wwwroot

EXPOSE 3000

CMD ["npm", "run", "serve"]
