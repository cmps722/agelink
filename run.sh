#!/bin/bash

docker build -t agelink .
docker run -p 3000:3000 -d agelink
