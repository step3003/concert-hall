FROM nginx:1.21.6-alpine as nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/server.conf /etc/nginx/templates/nginx.conf.template

CMD ["nginx", "-g", "daemon off;"]