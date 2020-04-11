import React from 'react'
import copy from 'copy-to-clipboard'
import { Button } from '@material-ui/core'
import FileCopyIcon from '@material-ui/icons/FileCopy'

export default ({ url, text }) => {
    const copyText = () => {
        copy(url)
    }

    return (
        <Button color='primary' onClick={copyText} endIcon={<FileCopyIcon />}>
            <text>{text}</text>
        </Button>
    )
}
