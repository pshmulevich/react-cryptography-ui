import React from "react";
import axios from "axios";
import "./styles.css";
import Header from "./header.js";
import Start from "./start.js";
import KeysView from "./keysView";
import EncryptView from "./encryptView";
import DecryptView from "./decryptView";
import Footer from "./footer.js";


const serviceUrl = "https://cryptography-service-demo.herokuapp.com/api/";

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 0, //Stage 0 = start, stage 1 = keys, stage 2 = encrypt, stage 3 = decrypt
      publicKey: "",
      privateKey: "",
      plaintext: "", //input
      ciphertext: "",
      decryptedText: "" //the result of decrypting ciphertext
    };
  }

  handleGetKeys = async () => {
    try {
      const response = await axios.get(serviceUrl + "keys");
      if (response.data.publicKey) {
        this.setState({ publicKey: response.data.publicKey, privateKey: response.data.privateKey, stage: 1 });
      }
    } catch (error) {
      console.error("handleGetKeys error: ", error);
    }
  };

  handleGoToEncryptionPage = () => {
    this.setState({ stage: 2 });
  }


  handleEncryptSubmit = event => {
    event.preventDefault();

    const input = {
      plaintext: this.state.plaintext,
      publicKey: this.state.publicKey
    };

    axios.post(serviceUrl + "encrypt", input)
      .then(response => {
        if (response.data.encryptedText) {
          // TODO: need to rename encryptedText to ciphertext after service update
          console.log("Encrypt returned: ", response)
          this.setState({ ciphertext: response.data.encryptedText, stage: 3 });
        } else {
          this.setState({ ciphertext: "Did not get proper response..." });
        }
      })
  }

  handleDecryptSubmit = event => {
    event.preventDefault();

    const input = {
      ciphertext: this.state.ciphertext,
      privateKey: this.state.privateKey
    };

    console.log("Decrypt input: ", input)
    axios.post(serviceUrl + "decrypt", input)
      .then(response => {
        if (response.data.decryptedText || response.data.decryptedText === "") {
          console.log("Decrypt returned: ", response)
          this.setState({ decryptedText: response.data.decryptedText });
        } else {
          console.log("Decrypt error: ", response)
          this.setState({ decryptedText: "Did not get proper response..." });
        }
      })
  }

  handlePlaintextChange = event => {
    this.setState({ plaintext: event.target.value });
  }

  handleEncryptOneMore = () => {
    this.setState({ plaintext: "", cipherText: "", decryptedText: "", stage: 2 });
  }

  handleStartOver = () => {
    this.setState({ publicKey: "", privateKey: "", plaintext: "", cipherText: "", decryptedText: "", stage: 0 });
  }
  
  render() {
    return (
      <div>
        <Header />
        <div id="container">
          <Start
            visible={this.state.stage === 0}
            handleGetKeys={this.handleGetKeys} />
          <KeysView
            visible={this.state.stage === 1}
            publicKey={this.state.publicKey}
            privateKey={this.state.privateKey}
            handleGoToEncryptionPage={this.handleGoToEncryptionPage} />
          <EncryptView
            visible={this.state.stage === 2}
            publicKey={this.state.publicKey}
            plaintext={this.state.plaintext}
            ciphertext={this.state.ciphertext}
            handlePlaintextChange={this.handlePlaintextChange}
            handleEncryptSubmit={this.handleEncryptSubmit} />
          <DecryptView
            visible={this.state.stage === 3}
            privateKey={this.state.privateKey}
            ciphertext={this.state.ciphertext}
            decryptedText={this.state.decryptedText}
            handleDecryptSubmit={this.handleDecryptSubmit}
            handleEncryptOneMore={this.handleEncryptOneMore}
            handleStartOver={this.handleStartOver} />
        </div>
        <Footer />
      </div>
    );
  }
}