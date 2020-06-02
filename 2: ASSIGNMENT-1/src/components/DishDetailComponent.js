import React, { Component } from 'react'
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'

export class DishDetailComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    renderComments(dish){
        if(dish.comments!=null)
        {
            return(
                dish.comments.map((item)=>{
                    return(<li key={item.id}>
                    <p>{item.comment}</p>
                    <p>--{item.author},{item.date}</p>
                    </li>)
                })
            )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }
    renderDish(dish){
        if(dish!=null)
        {
        return (
            <div>
            <div className="row">
             <div className="col-md-5 col-12 m-1">
             <Card>
                     <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
             </div>
             <div className="col-md-5 col-12 m-1">
             
             
                <h4>Comments:</h4>
                <ul className="list-unstyled">
                {this.renderComments(dish)}
                </ul>

             </div>

                
            </div>
            </div>
        )
        }else
        {
            return(
                <div>

                </div>
            )
        }
    }
    render() {
        return(
        this.renderDish(this.props.dish)
        )
    }
}

export default DishDetailComponent
