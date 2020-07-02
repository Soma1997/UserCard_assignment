import React,{useState, useEffect} from 'react';
import {Modal,Button,Form} from 'react-bootstrap';
const ItemUpdate =(props)=>{
    const [formVal, setFormVal] = useState("");
    const [itemDes, setItemDes] =useState("");
    
    useEffect(()=>{
        const posting=localStorage.getItem(props.text);
        if(posting){
            setItemDes(posting)
        }
    },[props.onshow,props.text])
    
   
   
    const againonChangeHandler=(tag)=>setFormVal(tag.target.value)
    
    const againsaveChanges=()=>{     
        localStorage.setItem(props.text1,formVal)
        setItemDes(formVal)
        setFormVal("")
    }
  
    return (
      <div>
     
        <Modal show={props.onshow} onHide={props.againhandleClose} >
          <Modal.Header closeButton>
          <Modal.Title>{props.text}</Modal.Title>
          </Modal.Header>
          <Form.Control
           onChange={againonChangeHandler} 
           type="text1"
           value={formVal} 
           placeholder="Write Your Post Description" />
            <Modal.Body>
           {itemDes}
           </Modal.Body>
           <Modal.Footer>
           <Button 
           variant="secondary"
           onClick={props.againhandleClose}>
           Close
           </Button>
           <Button
           variant="primary" 
           onClick={againsaveChanges}>
            Save Post
            </Button>
           </Modal.Footer>
        </Modal>
      </div>)
    }
  
export default ItemUpdate