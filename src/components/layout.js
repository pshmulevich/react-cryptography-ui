import React from "react";

import Header from "./header.js";
import Footer from "./footer.js";
import Container from "./container.js";


export default class Layout extends React.Component {
  
    render() {
  
        return (
            <div className="page">
                <Header/>
                <Container />
                <Footer/>
            </div>
        );
    }
}
