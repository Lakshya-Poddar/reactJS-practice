import React,{Component} from 'react';
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import Menu from './MenuComponent'
import DishDetail from './DishDetailComponent'
import {DISHES} from '../shared/dishes'
class Main extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       dishes:DISHES,
       selectedDish:null
    }
  }

  onDishSelect(dishId){
    this.setState({
        selectedDish:dishId
    })
}
  render()
  {
    return (
      <div>
        <HeaderComponent />
        <Menu dishes={this.state.dishes} onclick={(dishId)=>this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} />
        <FooterComponent />
      </div>
    );
  }
}  

export default Main;
