FROM nginx
MAINTAINER Bjorn Solberg <bjorn+docker@famsolberg.com>
ENV TERM=vt100
COPY *.html /usr/share/nginx/html/
COPY  app /usr/share/nginx/html/app/
COPY  articles /usr/share/nginx/html/articles/
COPY  icons /usr/share/nginx/html/icons/
COPY  img /usr/share/nginx/html/img/
COPY  style /usr/share/nginx/html/style/
EXPOSE 80
