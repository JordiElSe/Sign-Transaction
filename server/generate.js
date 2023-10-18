const secp = require("ethereum-cryptography/secp256k1");
const { toHex } = require("ethereum-cryptography/utils");



const privateKey = secp.secp256k1.utils.randomPrivateKey();
const publicKey = secp.secp256k1.getPublicKey(privateKey);
//Take the last 10 bytes of the public key for the address
const address = publicKey.slice(1).slice(-10);

console.log('Private Key: ', toHex(privateKey));
console.log('Public Key:', toHex(publicKey));
console.log(`Address: 0x${toHex(address)}`);

/*
Person 1:
Private Key: 41638f541019736d88caf3f45f91f034a0f9e1aba3621fb97f94fc5f25091ca5
Public key: 039856904fd2d261fa5bacf80bf5ddc99bf8b66204645b8f5808d1fd60506e4bb0
Address: 0x8f5808d1fd60506e4bb0

Person 2:
Private Key: ac3d1fd152dbff680d4a90677b450dd2ef6fef951403f423367ca6bf72bdfbdd
Public Key: 0232e6bb2cda39a98831f3ca185d16ca89346ae8771e96cb8e48c37350e59d9283
Address: 0xcb8e48c37350e59d9283

Person 3:
Private Key: c4d104482d62b826cbdbb1806df4a499d2ee0009dbc2ad592f1a28829dcb4c7a
Public Key: 03e63e93106a6be3e4b79988e3ecc7b2a3b523bdd782385c8c54309f6dc9fa3fbe
Address: 0x5c8c54309f6dc9fa3fbe
*/