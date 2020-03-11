FROM centos:7
RUN yum -y update
RUN curl -sL https://rpm.nodesource.com/setup_13.x | bash
RUN yum -y install nodejs

RUN mkdir /myapp
RUN cd /myapp
RUN npm init -y
RUN npm install express --save

COPY ./index.js /myapp
CMD ["/sbin/init"]
