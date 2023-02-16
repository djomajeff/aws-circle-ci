# CircleCI AWS EC2 deployment example

Example of deploying a Node.js application to AWS EC2 using CircleCI

# Requirements

Before you clone the project, I assume you have the following:

1. A Github repository
2. A CircleCI account
3. An AWS account
4. A running AWS EC2 instance (Ubuntu 22.04)
5. Ansible install on your machine

# Installation

- Ansible

```
$ pip install --user ansible
```

- Clone repository

```
$ git clone https://github.com/djomajeff/aws-circle-ci.git
$ cd aws-circleci
```

# Usage

You can refer to this excellent [tutorial](https://circleci.com/docs/2.0/single-box/#steps-for-installation-on-aws-ec2)
