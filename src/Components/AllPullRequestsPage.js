import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PRDisplay from './PRDisplay';
import PullRequestsParams from './PullRequestsParams';

class AllPullRequestsPage extends React.Component {
    constructor() {
        super();
        this.state = {
          PRs: [],
          isLoaded: false,
        };
    }
    handleCallback = (items) =>{
        this.setState({PRs: items, isLoaded: true})
    }
    render() {
        const { isLoaded} = this.state;
        if(!isLoaded){
            return(
                <div>
                    <PullRequestsParams parentCallback={this.handleCallback} /><br />
                </div>
            );
        }
        else{
            return(
                <div>
                    <PullRequestsParams parentCallback={this.handleCallback} /><br /><br />
                    <div class="pr-row-h">
                        <div class="pr-col-h">Number</div>
                        <div class="pr-col-h">Title</div>
                        <div class="pr-col-h">Description</div>
                        <div class="pr-col-h">Author</div>
                        <div class="pr-col-h">Status</div>
                        <div class="pr-col-h">Labels</div>
                        <div class="pr-col-h">Creation Date</div>
                    </div><br /><hr/>
                    {this.state.PRs.map((pr) => (
                        <PRDisplay pr={pr}/>
                    ))}
                </div>
            );
        }
    }
  }

export default AllPullRequestsPage;