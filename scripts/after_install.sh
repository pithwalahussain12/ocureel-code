#!/bin/bash
echo 'run after_install.sh: ' >> /home/ubuntu/ocureel-code/deploy.log

echo 'cd /home/ubuntu/ocureel-code' >> /home/ubuntu/ocureel-code/deploy.log
cd /home/ubuntu/ocureel-code >> /home/ubuntu/ocureel-code/deploy.log

echo 'npm install' >> /home/ubuntu/ocureel-code/deploy.log 
npm install >> /home/ubuntu/ocureel-code/deploy.log

pm2 start --name=ocureel-code npm -- start