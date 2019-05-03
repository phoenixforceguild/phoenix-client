import React, { Component } from 'react';
import './members.css';
import { connect } from 'react-redux';
import {getMembersData} from "../actions/membersActions";


class MembersComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  getMembers() {
    let { dispatch } = this.props;
    return dispatch(getMembersData());
  };

  componentDidMount() {
    this.getMembers().then((data) => {
      this.setState({
        members: data
      });
    });
  };

  getCharacters(member) {
    return member.characters.map(char => {
      return(
        <div>
          {char.name}
          {char.status}
        </div>
      );
    });
  };

  render() {
    if(this.state.members) {
      const {members} = this.state.members;
      return(
        members.map(member => (
          <div>
            {member.rank_title}
            {this.getCharacters(member)}
          </div>
        ))
      );
    } else {
      return (<div></div>)
    }
    
  };
}

export default connect()(MembersComponent);