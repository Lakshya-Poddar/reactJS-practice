import React from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle ,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'
    
   function RenderComments({comments}){
        if(comments!=null)
        {
            return(
                comments.map((item)=>{
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
   function RenderDish({dish,comments}){
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
                <RenderComments comments={comments} />
                {console.log(comments)}
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
         <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr></hr> 
            </div>
        </div>
            <RenderDish dish={props.dish} comments={props.comments}/>
            {/* <RenderComments comments={props.comments} /> */}
        </div>
        )
    
    }

export default DishDetailComponent
