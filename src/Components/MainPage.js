import React from 'react';
import '../index.css';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
import {Nav } from 'react-bootstrap';

import AllPullRequestsPage from './AllPullRequestsPage';
import NewPullRequestPage from './NewPullRequestPage';

class MainPage extends React.Component {
    constructor() {
      super();
      this.state = {
        showHideAllPullRequestsPage: false,
        showHideNewPullRequestPage: false,
      };
      this.hideComponent = this.hideComponent.bind(this);
    }
  
    hideComponent(name) {
      this.setState({ name: !this.state.name });
      switch (name) {
        case "showHideAllPullRequestsPage":
          this.setState({ showHideAllPullRequestsPage: !this.state.showHideAllPullRequestsPage });
          this.setState({ showHideNewPullRequestPage: false })
          break;
        case "showHideNewPullRequestPage":
          this.setState({ showHideNewPullRequestPage: !this.state.showHideNewPullRequestPage });
          this.setState({ showHideAllPullRequestsPage: false })
          break;
        default:
      }
    }
    render() {
      const { showHideAllPullRequestsPage, showHideNewPullRequestPage } = this.state;
      return (
        <div className="header">
          <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Pull Requests App </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onSelect={() => this.hideComponent("showHideAllPullRequestsPage")} href="#AllPullRequests">All Pull Requests</Nav.Link>
              <Nav.Link onSelect={() => this.hideComponent("showHideNewPullRequestPage")} href="#NewPullRequest">Insert New Pull Request</Nav.Link>
            </Nav>
          </Container>
          </Navbar>
          <h1>Welcome To Pull Requests App</h1>
          {showHideAllPullRequestsPage && <AllPullRequestsPage />}
          {showHideNewPullRequestPage && <NewPullRequestPage />}
        </div>
      );
    }
  }

  export default MainPage;