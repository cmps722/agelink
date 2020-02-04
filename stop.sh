#!/bin/bash

docker stop $(docker ps | grep agelink | awk '{print $1}')
docker rmi $(docker images | grep agelink | awk '{print $3}')
