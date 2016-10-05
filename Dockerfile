FROM node:argon
RUN npm install webpack typings tsc -g
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
RUN typings install
RUN webpack
COPY . /usr/src/app
EXPOSE 3000 
CMD ["bin/www"]
