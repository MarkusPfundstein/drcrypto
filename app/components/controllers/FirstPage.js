import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginAction, logoutAction } from '../../data/Store';
import PageView from '../views/PageView';

class FirstPage extends React.Component {
  constructor(props) {
    super(props);

    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    if (this.props.loggedIn === false) {
      this.props.loginAction('my-super-nice-token');
    } else {
      this.props.logoutAction();
    }
  }

  render() {
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

function mapStateToProps(state) {
  const { loggedIn, token } = state.loginReducer;
  return {
    loggedIn,
    token,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginAction, logoutAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstPage);
