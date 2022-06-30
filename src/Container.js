import React from "react";

export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {show: true }
    }
    deHeader = () => {
        this.setState({show: false })
    }

    render() {
        let myheader;
        if (this.state.show) {

            myheader = <Child/>;
        };



        return (
            <div>

                {myheader}
                <button type="button" onClick={this.deHeader}>Delete Header</button>
            </div>
        );
    }
}

class Child extends React.Component {
    componentWillUnmount() {
        alert("dgjghdhgdgh");
    }

    render() {
        return (
            <h1>helloooo</h1>
        );
    }
}