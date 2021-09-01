import React from 'react'
import './index.css'
import portrait from '../../images/portrait.jpg'
import Card from 'react-bootstrap/Card'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ContactInfo = ()=> {
    return(
        <Card className="contactCard">
            <Card.Img varient="top" className="portrait" src={portrait}/>
                <ListGroup>
                    <ListGroupItem>Email: trhines94@gmail.com</ListGroupItem>
                    <ListGroupItem>Location: Roseville CA</ListGroupItem>
                </ListGroup>
            
                <Card.Header>Technologies</Card.Header>
                <div className="tech">
                <ListGroup>
                    <ListGroupItem>HTML/CSS</ListGroupItem>
                    <ListGroupItem>Javascript</ListGroupItem>
                    <ListGroupItem>React</ListGroupItem>
                    <ListGroupItem>Node.js</ListGroupItem>
                    <ListGroupItem>Express</ListGroupItem>
                    <ListGroupItem>Mongoose</ListGroupItem>
                    <ListGroupItem>My Sql</ListGroupItem>
                    <ListGroupItem>HandleBars</ListGroupItem>
                </ListGroup>
                </div>
        </Card>
    );
}

export default ContactInfo