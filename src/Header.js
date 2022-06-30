import React from "react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            favoritecolor: "red"
        };


    }

    componentDidMount() {

        setTimeout(() => {
            this.setState({ favoritecolor: "yellow" }
            )

        }, 2000);


    }
  
    componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
            "the update favorite is " + this.state.favoritecolor;
    }

    render() {
        console.log(this.state.favoritecolor);

        return (
            <div>
                <h1>favorite color : {this.state.favoritecolor}</h1>
                <di id="mydiv"></di>

            </div>
        );
    }
}