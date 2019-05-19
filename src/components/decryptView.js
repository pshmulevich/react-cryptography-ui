import React from 'react';

export default class DecryptView extends React.Component {

    render() {
        if (!this.props.visible) {
            return ("");
        }
        return (
            <div>
                <h2>Decryption page</h2>
                <div >
                    <div><label>
                        Ciphertext:
                        <textarea name="ciphertext" readOnly={true} value={this.props.ciphertext} />
                    </label></div>
                    <div>
                        <label>
                            Private Key:
                            <textarea name="privateKey" readOnly={true} value={this.props.privateKey} />
                        </label>
                    </div>
                    <div>
                        <button onClick={this.props.handleDecryptSubmit}>Decrypt</button>
                        <button onClick={this.props.handleEncryptOneMore}>Encrypt Another Message</button>
                        <button onClick={this.props.handleStartOver}>Start Over</button>
                    </div>
                </div>
                <div>
                    Decrypted plaintext:
                <div>
                    <textarea readOnly={true} value={this.props.decryptedText} />
                </div>
            </div>
        </div>
        )
    }
}