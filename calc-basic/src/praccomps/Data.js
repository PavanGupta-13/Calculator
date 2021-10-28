import React from "react";


class Data extends React.Component{
    constructor(){
        super();
        this.state = {
            msgD : true,
            dispMsg : "Vals Deleted"
        }
    }
    render(){
        return(
            <div>
                {this.props.prsn}
                <input type="button" value="Delete" onClick={()=>{this.props.deleteRec(this.state.msgD,this.state.dispMsg)}}></input>
            </div>

        )
    }
}

export default Data


// this.props.deleteRec(this.state.msgD,this.state.dispMsg)