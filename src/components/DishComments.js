import React, { Component } from 'react'


export default class DishComments extends Component {

   

render(){
    
    // const view = this.props.select.comments.map((com) => {
    //     return(
    //             <p>
    //                 <h4>{com.comment}</h4>
    //                 <h4>{com.author}</h4>
    //             </p>
    //             );
        
    //         }
    //     )
    
   const selected = this.props.select;
    return (
        <div>
            
        <h3>Comments</h3>
            {console.log(selected)}
        </div>
            
        )
    }
}
