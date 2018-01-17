import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginAction, logoutAction } from '../../data/Store';
import PageView from '../views/PageView';

/* This is a controller because it has state and side-effects (events) */
class FirstPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    /* read props from store */
    if (this.props.loggedIn === false) {
      /* emit loginAction */
      this.props.loginAction('my-super-nice-token');
    } else {
      /* emit logout Action */
      this.props.logoutAction();
    }
  }

  render() {
    /* render the stateless View component. Note how we pass variables down
     * the road via one-way binding. The `toggleLogin` is a callback function */
    return (
      <PageView
        linkTo="/second"
        linkToName="Second page"
        title="Buy Bitcoin!"
        toggleLogin={this.toggleLogin}
        token={this.props.token}
        loggedIn={this.props.loggedIn}
      />
    );
  }
}

/* state is the complete Redux store. We will extract only the loginReducer part of the store */
function mapStateToProps(state) {
  const { loggedIn, token } = state.loginReducer;
  /* this properties will be made available to the FirstPage controller as props */
  return {
    loggedIn,
    token,
  };
}

function mapDispatchToProps(dispatch) {
  /* bind the two action creators loginAction and logoutAction to the controller. They will be
   * available via its props */
  return bindActionCreators({ loginAction, logoutAction }, dispatch);
}

/* connect the controller to Redux */
export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
