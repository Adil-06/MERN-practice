import React,{Component} from 'react'
import '../custom.css'

class ClassComponent extends Component{  
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render(){  
       return(  
          <div className="main-container">  
             <h1 className="main-header">JSX</h1>  
             <p className="main-description"> expression in jsx {23* 7} </p>
             <p className ={'main-description'}>This website contains the best react JS tutorials.</p>  
          </div>  
       );  
    }  
 }  
 export default ClassComponent;  