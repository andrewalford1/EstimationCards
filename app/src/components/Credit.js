import React from 'react'

export default ({name, LinkedIn}) => {
    return (
        <a href={LinkedIn}>{name}</a>
    );
}