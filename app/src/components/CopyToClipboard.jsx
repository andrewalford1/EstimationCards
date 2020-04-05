import React, { Component } from 'react'
import copy from 'copy-to-clipboard';
import { Button } from '@material-ui/core';

export default class extends Component {

    constructor(props) {
        super();

        console.log(props);

        this.state = {
            textToCopy: props.url,
            btnText: 'Copy To Clipboard'
        };
        this.handleInputChage = this.handleInputChage.bind(this);
        this.CopyText = this.CopyText.bind(this);
        
    }

    handleInputChage(e) {
        this.setState({
            textToCopy: e.target.value
        });
    }

    CopyText() {
        copy(this.state.textToCopy);
    }

    render() {
        const { btnText } = this.state;
        return (
            <Button color='primary' variant='outlined' onClick={this.CopyText}>
                {btnText} 
            </Button>
        );
    }

}