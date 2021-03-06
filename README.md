# Open-backend
Nodejs backend with c/c++ addons


* [Configuration](#Configuration)
* [Running](#Running)
* [Project structure](#Structure)
* [Usage](#Usage)
* [Developers](#Developers)


# Configuration

set the env variables when running iaas or paas or if needed(not needed locally)

    MONGO_URL //This is the url to connect with mongodb service like ATLAS etc.
    SECRET    //This is the secret to encode jwt tokens. Take care with this.

run install_mongo_locally.sh(needed only locally) so you can run mongodb on your system

init mongodb with
    
    sudo service mongod start

stop with

    sudo service mongod stop


# Running

    npm install
    npm start


# Structure

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
        |     |      |    `- routes /** to be renamed*/
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



 # Usage

 ## Set a product

     POST

     url: /setProduct

     body: {
                seller_id: String,
                seller_device_id: String,
                seller_name: String,
                product_name: String,
                description: String,
                price: Number,
                category: String,
                shape: String,
                count: Number,
                image_array: Array
            }

## Update a product

    POST

    url: /updateProduct

    body: //same as setProduct
        

 # Developers
    Ulisesten

