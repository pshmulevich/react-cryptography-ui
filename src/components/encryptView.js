import React from 'react';

export default class EncryptView extends React.Component {

    render() {
        if (!this.props.visible) {
            return ("");
        }
        return (
            <div>
                <h2>Encryption page</h2>
                <form onSubmit={this.props.handleEncryptSubmit}>
                    <div>
                        <label>
                            Plaintext:
            <textarea name="plaintext" value={this.props.plaintext} placeholder="Please enter text to encrypt" onChange={this.props.handlePlaintextChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                        Public Key:
            <textarea name="publicKey" readOnly={true} value={this.props.publicKey} />
                    </label>
                    </div>
                    <div>
                        <button type="submit" disabled={this.props.plaintext.trim() === ""}>Encrypt</button>
                    </div>
                </form>
            </div>
        )
    }
}