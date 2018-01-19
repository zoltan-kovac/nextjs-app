'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _layout = require('antd/lib/layout');

var _layout2 = _interopRequireDefault(_layout);

var _form = require('antd/lib/form');

var _form2 = _interopRequireDefault(_form);

var _button = require('antd/lib/button');

var _button2 = _interopRequireDefault(_button);

var _datePicker = require('antd/lib/date-picker');

var _datePicker2 = _interopRequireDefault(_datePicker);

var _select = require('antd/lib/select');

var _select2 = _interopRequireDefault(_select);

var _slider = require('antd/lib/slider');

var _slider2 = _interopRequireDefault(_slider);

var _switch = require('antd/lib/switch');

var _switch2 = _interopRequireDefault(_switch);

var _inputNumber = require('antd/lib/input-number');

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import stylesheet from './../styles/main.less'

var Header = _layout2.default.Header,
    Content = _layout2.default.Content,
    Footer = _layout2.default.Footer,
    Sider = _layout2.default.Sider;

var FormItem = _form2.default.Item;
var Option = _select2.default.Option;

exports.default = function () {
    return _react2.default.createElement(_layout2.default, null, _react2.default.createElement(Sider, {
        breakpoint: 'lg',
        collapsedWidth: '0',
        onCollapse: function onCollapse(collapsed, type) {
            console.log(collapsed, type);
        } }, _react2.default.createElement('div', { className: 'logo' }), _react2.default.createElement(_menu2.default, { theme: 'dark', mode: 'inline', defaultSelectedKeys: ['4'] }, _react2.default.createElement(_menu2.default.Item, { key: '1' }, _react2.default.createElement(_icon2.default, { type: 'user' }), _react2.default.createElement('span', { className: 'nav-text' }, 'nav 1')), _react2.default.createElement(_menu2.default.Item, { key: '2' }, _react2.default.createElement(_icon2.default, { type: 'video-camera' }), _react2.default.createElement('span', { className: 'nav-text' }, 'nav 2')), _react2.default.createElement(_menu2.default.Item, { key: '3' }, _react2.default.createElement(_icon2.default, { type: 'upload' }), _react2.default.createElement('span', { className: 'nav-text' }, 'nav 3')), _react2.default.createElement(_menu2.default.Item, { key: '4' }, _react2.default.createElement(_icon2.default, { type: 'user' }), _react2.default.createElement('span', { className: 'nav-text' }, 'nav 4')))), _react2.default.createElement(_layout2.default, null, _react2.default.createElement(Header, {
        style: {
            background: '#fff',
            padding: 0
        } }), _react2.default.createElement(Content, { style: {
            margin: '24px 16px 0'
        } }, _react2.default.createElement('div', {
        style: {
            padding: 24,
            background: '#fff',
            minHeight: 360
        } }, _react2.default.createElement(_form2.default, { layout: 'horizontal' }, _react2.default.createElement(FormItem, {
        label: 'Input Number',
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 8
        } }, _react2.default.createElement(_inputNumber2.default, {
        size: 'large',
        min: 1,
        max: 10,
        style: {
            width: 100
        },
        defaultValue: 3,
        name: 'inputNumber' }), _react2.default.createElement('a', { href: '#' }, 'Link')), _react2.default.createElement(FormItem, {
        label: 'Switch',
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 8
        } }, _react2.default.createElement(_switch2.default, { defaultChecked: true, name: 'switch' })), _react2.default.createElement(FormItem, {
        label: 'Slider',
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 8
        } }, _react2.default.createElement(_slider2.default, { defaultValue: 70 })), _react2.default.createElement(FormItem, {
        label: 'Select',
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 8
        } }, _react2.default.createElement(_select2.default, {
        size: 'large',
        defaultValue: 'lucy',
        style: {
            width: 192
        },
        name: 'select' }, _react2.default.createElement(Option, { value: 'jack' }, 'jack'), _react2.default.createElement(Option, { value: 'lucy' }, 'lucy'), _react2.default.createElement(Option, { value: 'disabled', disabled: true }, 'disabled'), _react2.default.createElement(Option, { value: 'yiminghe' }, 'yiminghe'))), _react2.default.createElement(FormItem, {
        label: 'DatePicker',
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 8
        } }, _react2.default.createElement(_datePicker2.default, { name: 'startDate' })), _react2.default.createElement(FormItem, {
        style: {
            marginTop: 48
        },
        wrapperCol: {
            span: 8,
            offset: 8
        } }, _react2.default.createElement(_button2.default, { size: 'large', type: 'primary', htmlType: 'submit' }, 'OK'), _react2.default.createElement(_button2.default, {
        size: 'large',
        style: {
            marginLeft: 8
        } }, 'Cancel'))))), _react2.default.createElement(Footer, { style: {
            textAlign: 'center'
        } }, 'Ant Design \xA92016 Created by Ant UED')));
};