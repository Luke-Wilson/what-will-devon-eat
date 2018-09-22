FROM node:8.6.0
RUN mkdir -p /wwwroot

WORKDIR /wwwroot

COPY ./package.json /wwwroot/
RUN cd /wwwroot
RUN npm install

COPY . /wwwroot

EXPOSE 8080
