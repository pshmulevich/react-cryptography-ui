import React from "react";

export default class Start extends React.Component {
    render() {
        if (!this.props.visible) {
            return ("");
        }
        return (
            <div>
                <h1>Intro</h1>
                <p>
                    This demo generates a public and private key pair for you using the RSA algorithm.
                </p>
                <p>
                    You can then encrypt a message with your given public key and decrypt it using the given private key.
                </p>

                <p>
                Instructions: 
                <ul>
                        <li>When you click "Generate Keys" you will see the generated public and private keys (this may take a few seconds)</li>
                        <li>Click "Go to Encryption page" to continue.</li>
                        <li>Please enter plaintext you wish to encode.</li>
                        <li>Click "Encrypt" to continue.</li>
                        <li>You will see the encoded plaintext in the ciphertext box.</li> 
                        <li>Click "Decrypt" to see the decrypted plaintext in the lower box.</li>
                    </ul>
                </p>
                <button onClick={this.props.handleGetKeys}>Generate Keys</button>
            </div>
        );
    }
}