# Picavi API reference implementation in Node.js

The Picavi API is a standard interface for logistic warehouse's processes. The technical interface is based on JSON-RPC over HTTP. An implementation of this JSON-RPC Web Service enables a backend ERP-System or WMS to connect and communicate with Picavi Smart Glasses.

This is the Node.js reference implementation.

## Getting started
### Prerequisites
To run this server on your machine, you will need Node.js installed. Therefor you can use a [package manager](https://nodejs.org/en/download/package-manager) of your choice. 

### Installation

To install the JSON RPC Server you just use the usual node package manager commands. 

To install the dependencies which are maintained by nodes package manager you use
```
npm install
```

After setting up the server and its dependencies you can run the server application by using
```
npm start
```

## About
### Author

* Picavi GmbH | [GitHub](https://github.com/picavi) | [Website](https://picavi.com)

* Sebastian Breuer | [GitHub](https://github.com/thebreuer)

### Built With

* [Node.js](https://nodejs.org/en/) - JavaScript runtime

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/picavi/node-jsonrpc.server/tags). 

### License

This project is licensed under the BSD 3-Clause License - see the [LICENSE.md](LICENSE.md) file for details
