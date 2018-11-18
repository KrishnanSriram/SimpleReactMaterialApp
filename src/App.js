import React, { Component, Fragment } from 'react';
import TitleBar from './components/titlebar';
// import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import TopicsPage from './pages/topics';
// Side Nave implementation
import SideList from './components/sidelist';
import SideDrawer from './components/sidedrawer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class App extends Component {
  state = {
    showItem: 'home',
    left: false,
    sidelist:
        [{
          text: 'Home',
          link: '/'
        }, {
          text: 'Dashboard',
          link: '/dashboard'
        }, {
          text: 'Topics',
          link: '/topics'
        }]
  }

  toggleDrawer = (side, open) => {
    this.setState({
      [side]: open,
    });
  };

  toggleDrawer1 = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  sideList = () =>{
    return <SideList />
  }

  updateControl = (item) => {
    // console.log('selected Item', item);
    if(item === 'home') {
      this.setState({showItem: 'home'})
    } else if(item === 'dashboard') {
      this.setState({showItem: 'dashboard'})
    } else {
      this.setState({showItem: 'home'});
    }
  }

  onMenuButtonClicked = (event) => {
    console.log('Menu button clicked');
  }
  render() {
    // const { classes } = this.props;
    return (
      <Router>
        <Fragment>
          <TitleBar title="Home" onMenuButtonClicked = {(event) => this.toggleDrawer('left', true)} />
          <SideDrawer open={this.state.left} toggleDrawer = {this.toggleDrawer1} >
            <SideList items={this.state.sidelist} />
          </SideDrawer>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/topics" component={TopicsPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  } 
}

export default withStyles(styles)(App);

