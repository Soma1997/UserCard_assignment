import React,{useState} from 'react';
import {Card,Button} from 'react-bootstrap';
import './public_card.css';
import {Link}  from 'react-router-dom';


const PublicCards =()=>{
    const [User, setUser]=useState([{
        name:"Soma Bose",
        gmail:"bose.soma2014@gmail.com",
        position:"Intern",
        description:"This is about myself in brief"
    },
    {
        name:"Sharant Sharma",
        gmail:"sharant69sharma@gmail.com",
        position:"Intern",
        description:"This is about myself in brief"
    },
    {
        name:"Saksham Sachdeva",
        gmail:"saksham77sachdeva@gmail.com",
        position:"Intern",
        description:"This is about myself in brief"
    },

    ]

    )
    const setHandler=(userGmail)=>{
        for(let x in User)
        {
            if(User[x].gmail===userGmail)
            {
                localStorage.setItem("CurrentUserGmail",userGmail)
            }
        }

    }
    
    const UserList=User.map((eachUser)=>{
        return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{eachUser.name}</Card.Title>
            <Card.Title>{eachUser.gmail}</Card.Title>
            <Card.Title>{eachUser.position}</Card.Title>
        <Card.Text>{eachUser.description}</Card.Text>
        <Button  onClick ={()=>setHandler(eachUser.gmail)} variant="primary">
        <Link style={{color:"#ffff"}} to ="/List" >DETAILS</Link></Button>
        </Card.Body>
        </Card>

        )
    })
    
    return(
        <div>
        <center>
        <h1>User Card</h1>
        </center>
        <div className="Body">
        {UserList}
        </div>
        </div>
    )
}
export default PublicCards