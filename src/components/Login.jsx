import React from 'react'
// 引入semanticui的组件
import { Form } from 'semantic-ui-react'
// 引入Login.css样式
import './Login.css'
class Login extends React.Component {
  render() {
    return (
      <div className="login_container">
        <div className="login_title">登录</div>
        <div className="login_form">
          {/* Form:表示整个表单组件 */}
          {/* Form.Field：表示表单的一个字段 */}
          <Form action="">
            <Form.Field>
              <Form.Input
                size="big"
                icon="user"
                iconPosition="left"
                placeholder="请输入用户名..."
                name="username"
                autoComplete="off"
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                size="big"
                icon="lock"
                iconPosition="left"
                placeholder="请输入密码..."
                name="password"
                autoComplete="off"
              />
            </Form.Field>
            <Form.Field>
              <Form.Button fluid positive size="big">
                登录
              </Form.Button>
            </Form.Field>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login
