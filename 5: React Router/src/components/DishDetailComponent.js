import React from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap'

    
   function RenderComments({dish}){
        if(dish.comments!=null)
        {
            return(
                dish.comments.map((item)=>{
                    return(<li key={item.id}>
                    <p>{item.comment}</p>
                    <p>--{item.author},{new Intl.DateTimeFormat('en-us',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(item.date)))}</p>
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
   function RenderDish({dish}){
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
                <RenderComments dish={dish} />
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

    const DishDetailComponent=(props)=>{
    return(
        <div className="container">
            <RenderDish dish={props.dish} />
        </div>
        )
    
    }

export default DishDetailComponent
