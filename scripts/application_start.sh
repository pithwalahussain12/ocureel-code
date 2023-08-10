#!/bin/bash

echo 'run application_start.sh: ' >> /home/ubuntu/ocureel-code/deploy.log

echo 'pm2 restart ocureel-code' >> /home/ubuntu/ocureel-code/deploy.log
pm2 restart 0 >> /home/ubuntu/ocureel-code/deploy.log