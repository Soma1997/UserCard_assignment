import React,{useState, useEffect} from 'react';
import {Modal,Button,Form} from 'react-bootstrap';
const ItemModal =(props)=>{
    const [formValue, setFormValue] = useState("");
    const [itemDesp, setItemDesp] =useState("")
    useEffect(()=>{
        const description=localStorage.getItem(props.text);
        if(description){
            setItemDesp(description)
        }
    },[props.show,props.text])
   
   
    const onChangeHandler=(event)=>setFormValue(event.target.value)
    
    const saveChanges=()=>{     
        localStorage.setItem(props.text,formValue)
        setItemDesp(formValue)
        setFormValue("")
    }
  
    return (
      <div>
     
        <Modal show={props.show} onHide={props.handleClose} >
          <Modal.Header closeButton>
          <Modal.Title>{props.text} Comment</Modal.Title>
          </Modal.Header>
          <Form.Control
           onChange={onChangeHandler} 
           type="text"
           value={formValue} 
           placeholder="Add Comment" />
           <Modal.Body>
           {itemDesp}
           </Modal.Body>
           <Modal.Footer>
           <Button 
           variant="secondary"
           onClick={props.handleClose}>
           Close
           </Button>
           <Button
           variant="primary" 
           onClick={saveChanges}>
            Save Comment
            </Button>
           </Modal.Footer>
        </Modal>
      </div>)
    }
  
export default ItemModal