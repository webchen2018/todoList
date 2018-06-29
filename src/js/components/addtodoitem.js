import React from 'react';
import ReactDOM from 'react-dom';
import {Row, Col, Form, Input, Button,notification } from 'antd';
export default class AddTodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.saveNewItem = this.saveNewItem.bind(this)
  }
  saveNewItem (e){
    e.preventDefault()
    let element = ReactDOM.findDOMNode(this.refs.newItem)
    let task = element.value
    if (!task) {
      notification.open({
        description: 'Todo内容不得为空！',
      });
    } else {
      this.props.saveNewItem(task)
      element.value = ""
    }
  }
  render() {
    console.log('测试77');
    return (
      <div className="addtodoitem">
        <Form.Item>
          <label htmlFor="newItem"></label>
          <Input type="text" ref="newItem" id="newItem"></Input>
          <Button type="primary" className="pull-right" onClick={this.saveNewItem}>保存</Button>
        </Form.Item>
      </div>
    )
  }
}
