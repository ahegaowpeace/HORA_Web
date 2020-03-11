FROM centos:7
RUN yum -y update
RUN curl -sL https://rpm.nodesource.com/setup_13.x | bash
