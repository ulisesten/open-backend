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



 ## Usage

 ### Set a product

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

### Update a product

    POST

    url: /updateProduct

    body: //same as setProduct
        

 ## Developers
    Ulisesten

