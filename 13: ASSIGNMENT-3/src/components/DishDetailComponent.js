import React,{Component} from 'react'
import {Card,CardImg,CardText,CardBody,CardTitle ,Breadcrumb,BreadcrumbItem,Button,FormGroup,Label,ModalBody,ModalHeader,Modal} from 'reactstrap'
import {Link} from 'react-router-dom'
import {Control,LocalForm,Errors} from 'react-redux-form'

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val)&&(val.length >= len);


    class CommentForm extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                isModalOpen:false
            }
        this.toggleModal=this.toggleModal.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

        toggleModal(){
            this.setState({
                isModalOpen:!this.state.isModalOpen
            })
        }
        handleSubmit(values){
            this.toggleModal();
            console.log('CurrentState' + JSON.stringify(values));
            alert('CurrentState' + JSON.stringify(values));
    }
        
        render() {
            return (
                <div>
                <Button outline onClick={this.toggleModal}>
                              <span className="fa fa-pencil fa-lg"> Submit Comment   </span>
                </Button> 
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                   <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                   <ModalBody>
                   <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating" className="form-control" >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>  
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="yourname">Your Name</Label>
                                    <Control.text model=".yourname" id="yourname" name="yourname"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                        minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                
                            </FormGroup>
                            <FormGroup>                                
                            <Label htmlFor="comment">Comment</Label>
                                
                                    <Control.textarea model=".comment" id="comment" name="comment" row="6" className="form-control"  />

                                </FormGroup>
                            <FormGroup>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>

                            </FormGroup>
                        </LocalForm>
                        
                   </ModalBody>
               </Modal>
                </div>
            )
        }
    }
    
    

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
                <CommentForm />
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
        </div>
        )
    
    }

export default DishDetailComponent
