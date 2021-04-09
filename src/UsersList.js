import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Card, ListGroup} from 'react-bootstrap'

class UsersList extends React.Component{
    constructor(){
        super()
         this.state={
            users : []            
        }
    }

    componentDidMount(){
        axios.get('https://panorbit.in/api/users.json')
       .then((response)=>{
           const users= response.data.users
           this.setState({users})
    })

     .catch((err) =>{
         console.log(err)
     })
    }                                 
    
    render(){   
        console.log(this.state.users)   
        return(
            <div>
                {this.state.users.length > 0 && (
                <div>
                <Card style={{ width: '18rem' }}>
                <Card.Header>Select an account</Card.Header>
                     <ListGroup variant="flush">
                            {this.state.users.map(user => {
                                return <ListGroup.Item key={user.id}> <Link to={`/${user.id}`}>{user.name}
                                </Link></ListGroup.Item>
                            })}
                    </ListGroup> 
                </Card>
                </div> 
                )}
            </div>
        )
    }
}
  
export default  UsersList