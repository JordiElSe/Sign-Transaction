import { useState } from "react";
import server from "./server";
import { keccak256 } from "ethereum-cryptography/keccak.js";
import { utf8ToBytes, toHex } from "ethereum-cryptography/utils";
import { secp256k1 } from "ethereum-cryptography/secp256k1.js";
 

function Transfer({ address, setBalance }) {
  const [sendAmount, setSendAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const setValue = (setter) => (evt) => setter(evt.target.value);
  async function transfer(evt) {
    evt.preventDefault();

    if (address === "") {
      alert("Please first enter your address.");
      return;
    }
    
    const msg = `${address}-${sendAmount}-${recipient}`;
    const hashedMsg = keccak256(utf8ToBytes(msg));

    try {
      const signature = secp256k1.sign(hashedMsg, privateKey);
      const point = signature.recoverPublicKey(hashedMsg).toHex();
      const signAddress = point.slice(-20);
      // Verify the signature
      if (`0x${signAddress}` !== address) {
        alert(`You are not the owner of the wallet address ${address}!`);
        return;
    }
    } catch (ex) {
      alert(ex.message);
      return;
    }
    
    

    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={setValue(setSendAmount)}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
        ></input>
      </label>

      <label>
        Private Key
        <input
          type="password"
          placeholder="Type your private key"
          value={privateKey}
          onChange={setValue(setPrivateKey)}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" />
    </form>
  );
}

export default Transfer;
