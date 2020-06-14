
import React, { Component } from "react"

import {
    Form,
    Input,
    Button,
    Select,
    Radio,
    Row,
    Checkbox,
    Col,
} from 'antd';

// import { FormInstance } from 'antd/lib/form';
import "./index.less"


const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};
// const form = Form.useForm()


class ChoseWay extends Component {

    formRef = React.createRef();
    goPage = () => {
        const { history } = this.props
        this.formRef.current.validateFields().then((formValue) => {
            const { action, componentList } = formValue
            sessionStorage.setItem("componentList", JSON.stringify(componentList))
            history.push(`/componetdatacollect/showdata?way=${action}`)
        })
    }
    render() {
        return (
            <div className="component-data-collect">
                <div className="form-area">
                    <Form
                        ref={this.formRef}
                        {...layout}
                        onFinish={(value) => this.goPage(value)}
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            label="进入方式"
                            name="action"
                            rules={[{ required: true, message: '页面展现的方式' }]}
                        >
                            <Select placeholder="请选择进入下个页面的方式">
                                <Option value="create">create</Option>
                                <Option value="edit">edit</Option>
                                <Option value="detail">detail</Option>
                            </Select>
                        </Form.Item>


                        <Form.Item name="componentList" label="展现组件区块" rules={[{ required: true, message: '都需要那些区域' }]}>
                            <Checkbox.Group>
                                <Row>
                                    <Checkbox value="baseform" style={{ lineHeight: '32px' }}>
                                        基础form组件
                                    </Checkbox>
                                </Row>
                                <Row>
                                    <Checkbox value="tableform" style={{ lineHeight: '32px' }}>
                                        列表form嵌套组件
                                    </Checkbox>
                                </Row>
                                <Row>
                                    <Checkbox value="editorForm" style={{ lineHeight: '32px' }}>
                                        富文本编辑器组件
                                    </Checkbox>
                                </Row>
                            </Checkbox.Group>
                        </Form.Item>

                        {/* <Form.Item {...tailLayout}> */}
                        <Button
                            type="primary"
                            // htmlType="submit" 
                            onClick={() => this.goPage()}>
                            页面跳转
                            </Button>
                        {/* </Form.Item> */}
                    </Form>
                </div>
            </div>
        )
    }
}



export default ChoseWay