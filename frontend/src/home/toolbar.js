import React, {Component} from 'react';
import {Button, Icon, Menu, Dropdown} from 'antd';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      collapsed: true
    };

  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">Membros</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Regras</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Links úteis</a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="toolbar-details">
        <div className="toolbar-menu">
        <Dropdown overlay={menu}>
          <Button type="danger">
            Menu <Icon type="down" />
          </Button>
        </Dropdown>
        </div>
        <div className="toolbar-title">
          <b><span>{this.props.title}</span></b>
        </div>
        <div className="toolbar-auth-btn">
          <Button type="danger">
            Registrar/Entrar
          </Button>
        </div>
      </div>
    );
  };
}

export default Toolbar;