# Open-backend
Nodejs backend with c/c++ addons

## Project structure

open-backend
 +-- bin/
 |     +- app
 |     `- www
 +-- database/
 |     +- connect.js
 |     +- models.js
 |     `- queries.js
 +-- server/
 |     +--- get/
 |     |      +- routes
 |     |      |    +- products
 |     |      |    `- routes /** to e renamed*/
 |     |      `- get
 |     +--- post/
 |     |      +- routes
 |     |      |    +- auth
 |     |      |    `- info
 |     |      `- post
 |     +--- utils/
 |     |      +- addons/
 |     |      |    `- urlparser.cc
 |     |      +- encryption
 |     |      +- jwt
 |     |      +- parser
 |     |      `- responses
 |     `--- websockets
 |            `- index
 +-- view/ /** Empty*/
 +-- binding.gyp
 +-- LICENSE
 +-- package.json
 `-- README.MD

