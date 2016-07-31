#!/bin/bash
SUBDOMAIN="fbtestbot"
while :; do 
   date
   /Users/andrewszucs/.nvm/versions/node/v6.2.0/bin/lt --port 8446 --subdomain $SUBDOMAIN
   sleep 30
done 