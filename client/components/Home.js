import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadUsers();
  }
  render() {
    const users = this.props.users;
    return (
      <div>
        <h1>HOME PAGE </h1>
        <h2>Member Ranking: </h2>
        {
          users.map((user, idx) =>
            <h2 key={idx}>{idx + 1}. {user.name}</h2>
          )
        }
      </div>
    );
  }
}
