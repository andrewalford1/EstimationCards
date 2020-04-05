import React from 'react'
import copy from 'copy-to-clipboard';
import { Button } from '@material-ui/core';

export default ({url}) => {

    const copyText = () => {
        copy(url);
    }

    return (
        <Button color='primary' variant='outlined' onClick={copyText}>
            Copy to clipboard
        </Button>
    );
}