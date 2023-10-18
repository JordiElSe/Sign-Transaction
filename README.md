## Sign-Transaction

This project is an example of using a client and server to facilitate transfers between different addresses. The project incorporates Public Key Cryptography by using Elliptic Curve Digital Signatures such that the server only allows transfers that have been signed by the owner of the associated address.

### Client

The client folder contains a [react app](https://reactjs.org/) using [vite](https://vitejs.dev/). To get started, follow these steps:

1. Open up a terminal in the `/client` folder
2. Run `npm install` to install all the depedencies
3. Run `npm run dev` to start the application 
4. Now you should be able to visit the app at http://127.0.0.1:5173/

### Server

The server folder contains a node.js server using [express](https://expressjs.com/). To run the server, follow these steps:

1. Open a terminal within the `/server` folder 
2. Run `npm install` to install all the depedencies 
3. Run `node index` to start the server 

The application should connect to the default server port (3042) automatically! 

Use [nodemon](https://www.npmjs.com/package/nodemon) instead of `node` to automatically restart the server on any changes.

### Usage
Inside the `/server` folder run `node generate` to generate a key pair and the associated address.

With your address you can view the balance in your wallet. If you want to make a transaction you will have to sign it using your private key. The transaction will only go through if the owner of the wallet is signing the transaction.

There are already 3 sample key pairs and addresses generated with some funds in it. They are specified as a comment in the `generate.js` file inside the `/server` folder. You can use these addressess to fund your wallet.
