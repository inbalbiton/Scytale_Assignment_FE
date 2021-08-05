import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import Select from 'react-select';
import axios from 'axios';

class PullRequestsParams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      sortby: "Sort By",
      order: "Order",
      status: [],
      labels: [],
      sortOptions: [{value: 'PR_Number'} , {value: 'Title'}],
      ordersOptions: [{value: 'ASC'} , {value: 'DESC'}],
      statusOptions: [],
      labelsOptions: [],
    };
    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleSortOrderChange = this.handleSortOrderChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handlelabelsChange = this.handlelabelsChange.bind(this);
  }

  componentWillMount() {
    this.getOptions();
  }

  async getOptions() {
    axios.get(`http://127.0.0.1:3004/prs/allStatus`)
      .then(res => {
          let options = [];
          res.data.forEach(elem =>
            options.push({value: elem, label: elem}));
            this.setState({
              statusOptions: options
          });
    },(error)=>{
      console.log(error);
    })
    axios.get(`http://127.0.0.1:3004/prs/allLabels`)
      .then(res => {
          let options = [];
          res.data.forEach(elem =>
            options.push({value: elem, label: elem}));
            this.setState({
              labelsOptions: options
          });
    },(error)=>{
      console.log(error);
    })
  }

  async GetPullRequests() {    
    this.props.parentCallback([]);
    let ord = 1;
    if(this.state.order === 'DESC') ord = -1;
    if(this.state.sortby === 'Sort By') this.state.sortby = 'PR_Number';
    console.log(this.state.status);
    let queryParams = "?status=" + this.state.status.join(",") + "&labels=" + this.state.labels.join(",") + "&sorted=" + this.state.sortby + "&order=" + ord ;
    console.log(queryParams);
    axios.get(`http://127.0.0.1:3004/prs/all${queryParams}`)
      .then(res => {
          console.log(res.data);
            this.setState({
            isLoaded: true,
          });
          this.props.parentCallback(res.data);
    },(error)=>{
      console.log(error);
      this.setState({
                isLoaded: true,
              });
    })
  }

  async handleSortChange(evt){
    await this.setState({sortby: evt});
  }
  async handleSortOrderChange(evt){
    await this.setState({order: evt});
  }
  async handleStatusChange(evt){
    await this.setState({status: evt.map(x=>x.value)});
  }
  async handlelabelsChange(evt){
    await this.setState({labels: evt.map(x=>x.value)});
  }
  render() {
    return (
      <div class="all-pr-page">
        <h1>All Pull Request</h1>
        <div class="all-pr-sub">
          <label>Filter By Status(Multiple Choice)</label>
          <br />
          <Select onChange={this.handleStatusChange} className="multi-select" options={this.state.statusOptions} isMulti />
          <br />
          <label>Filter By Labels(Multiple Choice)</label>
          <br />
          <Select onChange={this.handlelabelsChange} className="multi-select" options={this.state.labelsOptions} isMulti/>
        </div>
        <div class="all-pr-sub">
          <Dropdown onSelect={this.handleSortChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">{this.state.sortby}</Dropdown.Toggle>
            <Dropdown.Menu id="dd-menu">
                {this.state.sortOptions.map((option) => (
                        <Dropdown.Item class="dd-item" eventKey={option.value}><b>{option.value}</b></Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown onSelect={this.handleSortOrderChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">{this.state.order}</Dropdown.Toggle>
            <Dropdown.Menu id="dd-menu">
                {this.state.ordersOptions.map((option) => (
                        <Dropdown.Item class="dd-item" eventKey={option.value}><b>{option.value}</b></Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <div class="all-pr-sub">
            <button onClick={this.GetPullRequests.bind(this)}>Get</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PullRequestsParams;
