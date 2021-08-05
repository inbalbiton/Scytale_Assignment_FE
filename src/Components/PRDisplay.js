import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class PRDisplay extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          pr: this.props.pr,
        };
    }
    ConvertDate(date){
        let d = new Date(date);
        return d.toDateString();
    }
    render(){
        return(
            <div class="pr-row">
                <div class="pr-col" >{this.state.pr.PR_Number}</div>
                <div class="pr-col" >{this.state.pr.Title}</div>
                <div class="pr-col" >{this.state.pr.Description}</div>
                <div class="pr-col" >{this.state.pr.Author}</div>
                <div class="pr-col" >{this.state.pr.Status}</div>
                <div class="pr-col" >{this.state.pr.Labels}</div>
                <div class="pr-col" >{this.ConvertDate(this.state.pr.Creation_Date)}</div>
            </div>
        );
    }
}

export default PRDisplay;
