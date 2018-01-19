import Head from 'next/head'
import {
    Button,
    DatePicker,
    Form,
    Icon,
    InputNumber,
    Layout,
    Menu,
    Select,
    Slider,
    Switch
} from 'antd'
// import stylesheet from './../styles/main.less'

const  { Header, Content, Footer, Sider } = Layout;
const FormItem = Form.Item
const Option = Select.Option

export default() => (
    <Layout>
        {/* <Head>
            <link rel="stylesheet" href="/static/styles.css" />
        </Head> */}
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
        }}>
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                    <Icon type="user"/>
                    <span className="nav-text">nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera"/>
                    <span className="nav-text">nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload"/>
                    <span className="nav-text">nav 3</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <Icon type="user"/>
                    <span className="nav-text">nav 4</span>
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header
                style={{
                background: '#fff',
                padding: 0
            }}/>
            <Content style={{
                margin: '24px 16px 0'
            }}>
                <div
                    style={{
                    padding: 24,
                    background: '#fff',
                    minHeight: 360
                }}>

                    <Form layout='horizontal'>
                        <FormItem
                            label='Input Number'
                            labelCol={{
                            span: 8
                        }}
                            wrapperCol={{
                            span: 8
                        }}>
                            <InputNumber
                                size='large'
                                min={1}
                                max={10}
                                style={{
                                width: 100
                            }}
                                defaultValue={3}
                                name='inputNumber'/>
                            <a href='#'>Link</a>
                        </FormItem>

                        <FormItem
                            label='Switch'
                            labelCol={{
                            span: 8
                        }}
                            wrapperCol={{
                            span: 8
                        }}>
                            <Switch defaultChecked name='switch'/>
                        </FormItem>

                        <FormItem
                            label='Slider'
                            labelCol={{
                            span: 8
                        }}
                            wrapperCol={{
                            span: 8
                        }}>
                            <Slider defaultValue={70}/>
                        </FormItem>

                        <FormItem
                            label='Select'
                            labelCol={{
                            span: 8
                        }}
                            wrapperCol={{
                            span: 8
                        }}>
                            <Select
                                size='large'
                                defaultValue='lucy'
                                style={{
                                width: 192
                            }}
                                name='select'>
                                <Option value='jack'>jack</Option>
                                <Option value='lucy'>lucy</Option>
                                <Option value='disabled' disabled>disabled</Option>
                                <Option value='yiminghe'>yiminghe</Option>
                            </Select>
                        </FormItem>

                        <FormItem
                            label='DatePicker'
                            labelCol={{
                            span: 8
                        }}
                            wrapperCol={{
                            span: 8
                        }}>
                            <DatePicker name='startDate'/>
                        </FormItem>

                        <FormItem
                            style={{
                            marginTop: 48
                        }}
                            wrapperCol={{
                            span: 8,
                            offset: 8
                        }}>

                            <Button size='large' type='primary' htmlType='submit'>OK</Button>
                            <Button
                                size='large'
                                style={{
                                marginLeft: 8
                            }}>Cancel</Button>
                        </FormItem>
                    </Form>

                </div>
            </Content>
            <Footer style={{
                textAlign: 'center'
            }}>
                Ant Design ©2016 Created by Ant UED
            </Footer>
        </Layout>
    </Layout>
)
