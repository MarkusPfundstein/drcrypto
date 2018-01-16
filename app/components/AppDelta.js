import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginAction, logoutAction } from './Store';

class AppDelta extends React.Component {
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
      <div>
        <h2 id="heading">Second page!</h2>
        <button onClick={this.toggleLogin}>CLICK ME</button>
        <p>
          { this.props.loggedIn ? 'LOGGED IN' : 'LOGGED OUT' }
        </p>
        <p>
          { this.props.token }
        </p>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppDelta);
