import React from 'react'
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default ({name, LinkedIn}) => {
    return (
        <Button
        variant="outlined"
        color="primary"
        endIcon={<LinkedInIcon/>}
        >
            <a href={LinkedIn}>{name}</a>
        </Button>
    );
}