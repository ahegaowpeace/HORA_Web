FROM centos:7
RUN yum -y update
WORKDIR /myapp
RUN curl -sL https://rpm.nodesource.com/setup_13.x | bash
RUN yum -y install nodejs

RUN npm init -y
RUN npm install express --save

COPY ./index.js /myapp
CMD ["/sbin/init"]
