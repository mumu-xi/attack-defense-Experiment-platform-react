import React from 'react';
import { Menu, Icon,Modal, Form, Input, Button, Dropdown, Avatar, Popconfirm } from 'antd';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { actions } from '../../redux/app';
import './index.less';

const FormItem = Form.Item;

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      loginVisible: false,
      registerVisible: false 
    };
    this.dispatch = this.props.dispatch;
  }
  showLoginModal = () => {
    this.setState({
      loginVisible: true
    });
  }
  handleLoginCancle = () => {
    this.setState({
      loginVisible: false
    });
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch(actions.login(values));
      }
    });
    this.setState({
      loginVisible: false
    });
  }
  showRegModal = () => {
    this.setState({
      registerVisible: true
    });
  }
  handleRegCancle = () => {
    this.setState({
      registerVisible: false
    });
  }
  handleReg = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch(actions.register(values));
      }
    });
    this.setState({
      registerVisible: false
    });
  }
  render(){
    const { loginVisible, registerVisible } =this.state;
    const { isLogin, username } = this.props; 
    const { getFieldDecorator } = this.props.form;
    
    return(
      <div>
        <div className="headerWrapper">
          <div className="logo"></div>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{width: '80%'}}
          >
            <Menu.Item>
              <Link to="/courses">课程</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/paths">路径</Link>
            </Menu.Item>
            {/* <Menu.Item>
              <Link to="/contests">比赛</Link>
            </Menu.Item> */}
            <Menu.Item>
              <Link to="/questions">讨论</Link>
            </Menu.Item>
          </Menu>
          {
            !isLogin ?  
              <div style={{float: 'right'}} className="oprate">
                <span onClick={()=>this.showLoginModal()} style={{color: 'skyblue'}}>登录</span>
                <span style={{padding: '0 15px'}}>/</span>
                <span onClick={()=>this.showRegModal()}>注册</span>
              </div>:
              (
                <Dropdown 
                  overlay={
                    <Menu>
                      <Menu.Item>
                        我的课程
                      </Menu.Item>
                      <Menu.Item>
                        我的路径
                      </Menu.Item>
                      <Menu.Item>
                        我的讨论
                      </Menu.Item>
                      <Menu.Item>
                        个人中心
                      </Menu.Item>
                      <Menu.Item>
                        <Popconfirm title="确认退出？" onConfirm={()=>this.dispatch(actions.logout())} okText="确认" cancelText="取消">
                          退出
                        </Popconfirm>
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <div style={{float: 'right'}}>
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <span>{username}</span>
                  </div>
                </Dropdown>
              )
          }

        </div>
        <Modal
          title="登录"
          visible={loginVisible}
          onCancel={this.handleLoginCancle}
          footer={null}
        >
          <Form onSubmit={this.handleLogin} className="login-form">
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('pass', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            
            <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
          </Form>
        </Modal>
        <Modal
          title="注册"
          visible={registerVisible}
          onCancel={this.handleRegCancle}
          footer={null}
        >
          <Form onSubmit={this.handleReg} className="register-form">
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('pass', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            
            <Button type="primary" htmlType="submit" className="login-form-button">注册</Button>
          </Form>
        </Modal>
      </div>
    ); 
  } 
}

const IndexPage = Form.create()(Header);
export default connect(state => {
  return {
    ...state.app
  };
})(IndexPage);

