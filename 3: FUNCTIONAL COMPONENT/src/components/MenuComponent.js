import React from 'react';
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap'
  
function RenderMenuItem({dish,onclick})
{
    return(
        <Card onClick={()=>onclick(dish.id)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                            
                        </CardImgOverlay>
        </Card>
    );
}

const Menu = (props)=>{

    const menu= props.dishes.map((dish)=>{
        return(
            <div key={dish.id} className="col-12 col-md-5 mt-1 ">
                <RenderMenuItem dish={dish} onclick={props.onclick} />
            </div>
        );
    });


    return(
        <div className="container">
            <div className="row">
                    {menu}
            </div>
        </div>
    );
}
       
export default Menu;