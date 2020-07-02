import React ,{Component} from 'react';
import ItemModal from '../Modal/ModalFile';
import ItemUpdate from '../UpdateText/Update';
import '../mylist/tolist.css';


class ToList extends Component{
    constructor(props){
        super(props);
        this.state={
            Task:[],
            values:'',
            userGmail:" ",
            newUser:null,
            showModal:false,
            againshowModal:false,
            againmodalState:null,
            modalState:null
        }
    }
    componentDidMount(){
        const currentUser=localStorage.getItem("CurrentUserGmail")
        const userTask=localStorage.getItem(currentUser)
        let array=[]
        if(userTask)
        {
            array= userTask.split(',')
        }
         

        this.setState({newUser:currentUser,Task:array})
        
    }
    inputChange=(e)=>{
        const value=e.target.value;
        this.setState({
            values:value
        })
    }
    addValues=()=>{
        const addvalue=this.state.values;
        const Task=[...this.state.Task];
        Task.push(addvalue);
        localStorage.setItem(this.state.newUser,Task)
        this.setState({
            Task:Task,
            values:" "})
        
    }
    deleteItem=(key)=>{
        const deleteValues = [...this.state.Task];
        let index=-1
        for(let i in deleteValues){
            if(deleteValues[i]===key)
            {
                index=i;
                break;

            }
        }
    deleteValues.splice(index,1);
    localStorage.setItem(this.state.currentUser,deleteValues)
    this.setState({
        Task:deleteValues
    })
}

    againhandleClose=()=>this.setState({againshowModal:false});
    againhandleShow=(Task)=>this.setState({againshowModal:true,againmodalState:Task});

    handleClose=()=>this.setState({showModal:false});
    handleShow=(Task)=>this.setState({showModal:true,modalState:Task});
    render(){
        const list =this.state.Task.map((eachElement,i)=>{
            return (
                <div className="Todo">    
                <li>
                <input type="submit" value={eachElement}/>
                
                </li>
                <button onClick={()=>this.deleteItem(eachElement)}>Delete</button>
                <button onClick={()=>this.againhandleShow(eachElement)}>Post</button>
                <button onClick={()=>this.handleShow(eachElement)}>Add Comment</button>
                
                      
                </div>
            )

        }
        )
        return(

            <div classname="Styler">
            <ItemUpdate onshow={this.state.againshowModal} againhandleClose={this.againhandleClose} text={this.state.againmodalState}/>
            <ItemModal show={this.state.showModal}  handleClose={this.handleClose} text={this.state.modalState}/>
            <h4><center>{this.state.newUser}</center></h4>
            <center>
                <input onChange={this.inputChange} value={this.state.values}/>
                <button onClick={this.addValues}>ADD</button>  
            </center>
                <div>
                <center>
                    <ul>
            
                        {this.state.Task.length!==0? list:<h5>Please enter the values</h5>} 
        
                        </ul>
                 </center>   
                </div> 
                
            </div>
        )

        
    }
}

export default ToList
