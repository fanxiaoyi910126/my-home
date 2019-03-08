import React from 'react'
import axios from 'axios'
// 导入需要的UI组件
import { Icon, Button, Form, Divider } from 'semantic-ui-react'
// 导入样式
import './login.css'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  submit = async () => {
    // 获取表单数据
    // 调用接口进行身份验证 http://47.96.21.88:8086/users/login
    // 服务器返回一个状态：如果登录成功会返回一个状态token
    // 保存token信息到sessionStorage
    // 跳转到主页页
    // console.log(this.state.username)
    // console.log(this.state.password)
    let ret = await axios.post('http://47.96.21.88:8086/users/login',{
      uname: this.state.username,
      pwd: this.state.password
    })
    console.log(ret)
  }
  render() {
    return (
      <div className="login-container">
        <div className="login-logo">
          <Icon name="home" color="orange" size="massive" />
        </div>
        <div className="login-form">
          <Form>
            <Form.Input
              icon="user"
              required
              size="big"
              iconPosition="left"
              name="username"
              value={this.state.username}
              onChange={this.handleUsername}
              placeholder="请输入用户名"
            />
            <Form.Input
              icon="lock"
              required
              size="big"
              iconPosition="left"
              name="password"
              value={this.state.password}
              onChange={this.handlePassword}
              placeholder="请输入密码"
            />
            <Button onClick={this.submit} fluid color="green">
              登录
            </Button>
            <Divider horizontal>---</Divider>
          </Form>
        </div>
        <div className="login-third">
          <Icon name="wechat" color="green" size="big" />
          <Icon name="qq" color="red" size="big" />
        </div>
      </div>
    )
  }
}

export default Login
