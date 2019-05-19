import React from "react";

export default class KeysView extends React.Component {

  render() {
    if (!this.props.visible) {
      return ("");
    }
    return (
      <div>
        <p>Here are your base64-encoded public and private keys: </p>
        Public Key:
        <div>
          <textarea readOnly={true} value={this.props.publicKey} />
        </div>
        Private Key:
        <div>
          <textarea readOnly={true} value={this.props.privateKey} />
        </div>
        <div><button onClick={this.props.handleGoToEncryptionPage}>Go to Encryption page</button></div>
      </div>
    );
  }
}
