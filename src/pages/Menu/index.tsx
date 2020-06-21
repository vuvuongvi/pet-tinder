import { Menu, Form, Input, Button, Checkbox } from 'antd';
import React from 'react';
import { Modal } from 'antd';
import PandaSvg from '../Icon/Panda';
import styles from './styles.less';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class PetCareMenu extends React.Component {
  state = {
    current: 'mail',
    visible: false,
    notice: '',
    type: 'tab2',
    autoLogin: true,
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    if (e.key === 'sign-in') {
      this.setState({
        visible: true,
      })
    }
  };

  render() {
    return (
      <div>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className={styles.menuPetCare}>
          <Menu.Item key="sign-in" icon={<PandaSvg />}>
            Đăng Nhập
        </Menu.Item>
          <Menu.Item key="about-us" icon={<PandaSvg />}>
            Đăng Kí
        </Menu.Item>
        </Menu>
        <Modal className={styles.modalPetCare}
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
        </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default PetCareMenu;