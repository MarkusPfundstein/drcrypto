import React from 'react';
import { Link } from 'react-router-dom';

const PageView = (props) => {
  return (
    <div>
      <Link to={props.linkTo}>{props.linkToName}</Link>
      <h2 id="heading">{props.title}</h2>
      <button onClick={props.toggleLogin}>CLICK ME</button>
      <p>
        { props.loggedIn ? 'LOGGED IN' : 'LOGGED OUT' }
      </p>
      <p>
        { props.token }
      </p>
    </div>
  );
};

export default PageView;
