import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

export default class DishdetailComponent extends Component {
   
renderSelect() {
    const selected = this.props.select;
    if (selected != null){
    // console.log(selected.comments.map((value) => value))
        return(
            <Card>
                <CardImg top src={selected.image} alt={selected.name} />
                <CardBody>
                    <CardTitle>{selected.name}</CardTitle>
                    <CardText>{selected.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    else{
    return(
        <div></div>
    );
    }
}
render(){
    return (
        <>
            {this.renderSelect()}
        </>
            
        )
    }
}
