import React, { Component } from 'react';
import './members.css';
import { connect } from 'react-redux';
import {getMembersData} from "../actions/membersActions";
import {Table, Card} from "antd";


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

  getDataSource(data) {
    const dataSource = [];

    data.map(membersByRank => {
      membersByRank.characters.map(char => {
        dataSource.push({
          rank_title: membersByRank.rank_title,
          name: char.name,
          level: char.level,
          status: char.status,
          vocation: char.vocation
        });
      });
    });

    return dataSource;
  };

  getColumns() {
    return [{
      title: 'Rank Title',
      dataIndex: 'rank_title',
      key: 'rank_title'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'Vocation',
      dataIndex: 'vocation',
      key: 'vocation'
    }]
  };

  render() {
    if(this.state.members) {
      const {members} = this.state.members;
      const dataSource = this.getDataSource(members);
      const columns = this.getColumns();
      console.log(dataSource);
      return(
        <div className="members-wrapper">
          <Card>
            <Table dataSource={dataSource} columns={columns} size="middle" />
          </Card>
        </div>
      );
    } else {
      return (<div></div>)
    }
    
  };
}

export default connect()(MembersComponent);