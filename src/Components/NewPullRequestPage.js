import React from "react";
import "../index.css";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class NewPullRequestPage extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "Status",
      title: "",
      author: "",
      description: "",
      labels: "",
      statusOptions: [
        {value: "Draft"},
        {value: "Open"},
        {value: "Closed"}
      ],
    };
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.SendNewPullRequest = this.SendNewPullRequest.bind(this);
  }
  ValidInput(input) {
    let letters = /^[0-9a-zA-Z _-]+$/;
    if (input.match(letters) || input === "") {
      return true;
    }
    return false;
  }
  SendNewPullRequest() {
    if (this.ValidInput(this.state.title) && this.ValidInput(this.state.description) && this.ValidInput(this.state.author) &&
      this.ValidInput(this.state.labels) && this.state.status !== "Status") {
      const newPr = {
        title: this.state.title,
        description: this.state.description,
        author: this.state.author,
        status: this.state.status,
        labels: this.state.labels,
      };
      console.log(newPr);
      axios.post(`http://127.0.0.1:3004/prs/newpr`, newPr).then((res) => {
        console.log(res.data);
        if (res.status === 201) {
          alert("New Pull Request insert Successfully");
        } else {
          alert("Something went wrong with the server, please try again");
        }
      });
    }
    else{
      alert("One of the inputs you insert contains invalid characters or is left empty");
    }

  }
  handleStatusChange(evt) {
    this.state.status = evt;
  }
  setAuthor(value) {
    this.setState({ author: value });
  }
  setTitle(value) {
    this.setState({ title: value });
  }
  setDesc(value) {
    this.setState({ description: value });
  }
  setLabels(value) {
    this.setState({ labels: value });
  }

  render() {
    return (
      <div class="new-pr-page">
        <h1>Insert New Pull Request</h1>
        <div class="new-pr-menu">
          <div class="new-pr-sub-menu">
            <label class="sub-title-lbl">Title</label>
            <br />
            <input
              class="sub-title-input"
              type="text"
              onChange={(event) => this.setTitle(event.target.value)}
            ></input>
          </div>
          <div class="new-pr-sub-menu">
            <label class="sub-title-lbl">Description</label>
            <br />
            <input
              class="sub-title-input"
              type="text"
              onChange={(event) => this.setDesc(event.target.value)}
            ></input>
          </div>
          <div class="new-pr-sub-menu">
            <label class="sub-title-lbl">Author (Full Name)</label>
            <br />
            <input
              class="sub-title-input"
              type="text"
              onChange={(event) => this.setAuthor(event.target.value)}
            ></input>
          </div>
          <div class="new-pr-sub-menu">
            <label class="sub-title-lbl">Status</label>
            <br />
            <Dropdown onSelect={this.handleStatusChange}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {this.state.status}
              </Dropdown.Toggle>
              <Dropdown.Menu id="dd-menu">
                {this.state.statusOptions.map((option) => (
                  <Dropdown.Item class="dd-item" eventKey={option.value}>
                    <b>{option.value}</b>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div class="new-pr-sub-menu">
            <label class="sub-title-lbl">Labels</label>
            <br />
            <input
              class="sub-title-input"
              type="text"
              onChange={(event) => this.setLabels(event.target.value)}
            ></input>
          </div>
        </div>
        <button onClick={this.SendNewPullRequest}>Submit</button>
      </div>
    );
  }
}

export default NewPullRequestPage;
