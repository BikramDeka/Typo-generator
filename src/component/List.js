import React from "react";

export default class List extends React.Component{
    render(){
        const listItem=this.props.array.map(item => <li>{item}</li>)
        return(
            <div className="col-sm-6 col-md-3 col-lg-2">
                <div className="listContainer">
                    <ul>{listItem}</ul>
                </div>
            </div>
        )
    }
}