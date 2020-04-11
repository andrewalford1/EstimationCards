import React from 'react'
import ReactCardFlip from 'react-card-flip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch'
import Button from '@material-ui/core/Button'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default class EstimationCard extends React.Component {

    constructor() {
        super();
        this.state = {
            isFlipped: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }))
    }
    

    render() {
        return (<div>
<ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">

    <CardFront/>
    <CardBack/>
</ReactCardFlip>

<Button variant='contained' color='default' onClick={this.handleClick}>
    Flip
</Button>
        </div>)
    }
}