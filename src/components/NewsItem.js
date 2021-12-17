import React, { Component } from 'react'
import {Card,Button,Badge} from 'react-bootstrap'

export default class NewsItem extends Component {
    
    render() {
        let {title,description,imageUrl,newsUrl,author,samay,source} = this.props;
        return (
             <>
                <Card>
                <div style={{display:'flex', justifyContent:'right',position:'absolute',right:'0'}}>
                <Badge pill bg="danger" text="dark" 
                >{source}</Badge>{' '}
                </div>
            <Card.Img variant="top" src={!imageUrl?'https://fdn.gsmarena.com/imgroot/news/21/12/samsung-galaxy-s22-live-img/-952x498w6/gsmarena_001.jpg':imageUrl} />
            <Card.Body>
                
                <Card.Title>{title}</Card.Title>
                    <Card.Text>
                {description}
                    </Card.Text>
                    <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on {new Date(samay).toGMTString()} </small></p>
                <Button href={newsUrl} target='_blank' className='btn btn-sm btn-dark' variant="primary">Read More</Button>
            </Card.Body>
            </Card>
            </>
        )
    }
}
