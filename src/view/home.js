import React, { Component } from 'react';
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Switch } from "react-router"
import { Route, Redirect } from "react-router-dom";

import ChoseWay from './ComponentDataCollect/ChoseWay/index'

import showdata from "./ComponentDataCollect/DataShow/index"

import "./home.less"

const { SubMenu } = Menu;


class Home extends Component {
    munuItemClick = ({ key }) => {
        const { history } = this.props
        history.push(key)
    }
    render() {
        return (
            <div className="router">

                <div className="router-menu">
                    <Menu
                        onClick={this.munuItemClick}
                        style={{ width: 256, height: "100vh" }}
                        // defaultSelectedKeys={['1']}
                        // defaultOpenKeys={['sub1']}
                        mode="inline"
                    >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <MailOutlined />
                                    <span>代码练习</span>
                                </span>
                            }
                        >
                            <Menu.ItemGroup key="g1" title="基础代码">
                                <Menu.Item key="/componetdatacollect/choseway">
                                    componetdatacollect
                      </Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup key="g2" title="mock">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="router-view">
                    <Switch>
                        <Route path="/componetdatacollect/choseway" exect component={ChoseWay} />
                        <Route path="/componetdatacollect/showdata" exect component={showdata} />
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        );
    }

}

export default Home;
