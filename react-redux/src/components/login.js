import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //This is called for Loading Initial State
        this.props.loadInitialState();
    }

    render() {
        const { counter } = this.props.counter;
        return (
            <div>
                {counter}
            </div>
        );
    }
}

export default Login;