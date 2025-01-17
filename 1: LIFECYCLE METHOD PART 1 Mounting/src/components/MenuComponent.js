import React ,{Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'

class Menu extends Component{
    constructor(props)
    {
        super(props);

        this.state={
            selectedDish:null
        }
        console.log('MENU COMPONENT CONSTRUCTER INVOKED');
    }
    componentDidMount(){
        console.log("MENU COMPONENT COMPONENT DID MOUNT INVOKED");

    }
    onDishSelect(dish){
        this.setState({
            selectedDish:dish
        })
    }

    renderDish(dish){
        if(dish!=null)
        {
            return(
                <Card>
                     <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    render(){
        const menu= this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 mt-1 ">
                    <Card onClick={()=>this.onDishSelect(dish)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                            
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log("MENU COMPONENT RENDER INVOKED");

        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}
export default Menu;