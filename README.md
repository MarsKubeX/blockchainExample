# blockchainExample
This is a simple example of blockchain project with nodejs

To start run:
    npm start
then, in a app like postman, you have 3 services:

http://localhost:3000/mine :(get) that lets you mine a block

http://localhost:3000/chain : (get)show info about the chain of blocks

http://localhost:3000/transactions/new : (post)make a new transaction --> 
body = {
          "sender":"sender1",
          "recipient":"sender2", 
          "amount":1
       }
