FROM node:9.6.1

LABEL version="1.0"
LABEL description="Productos"
LABEL maintainer="Jorge - Camilo - Esteban"

ARG PORT=4000
ENV PORT $PORT

WORKDIR /clientes
COPY . ./

RUN npm install --test

EXPOSE 4000
CMD ["sh", "-c", "npm run prod "]


