import React from 'react' 
import axios from 'axios'

class UserShow extends React.Component {
    constructor(){
        super()
        this.state ={
            user:{}       
        }
    }
   
     componentDidMount(){         
         axios.get('https://panorbit.in/api/users.json')
         .then((response)=>{             
             const user= response.data.users.find(user=>user.id==1)
             this.setState({user})
         })

         .catch((err) =>{
            console.log(err)
        })
     }

    render() {
        console.log(this.state.user)
        return (
            <div> 
                <h2>Profile</h2>
                <hr/>
                { Object.keys(this.state.user).length > 0 && (
                <div>
                        <h4>User Name : {this.state.user.name}</h4>
                        <h4>Email : {this.state.user.email}</h4>
                        <h4>Phone : {this.state.user.phone}</h4>
                        <h4>Website : {this.state.user.website}</h4>
                        <hr/>
                        <h2> Company</h2>
                        <h4>Name : {this.state.user.company.name}</h4>
                        <h4>CatchPhrase : {this.state.user.company.catchPhrase}</h4>
                        <h4>bs : {this.state.user.company.bs}</h4>                
                </div> 
            )}
            </div> 
        )
    }
}

export default UserShow