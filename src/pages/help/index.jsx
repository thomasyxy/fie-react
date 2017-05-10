'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
// import { Button } from 'Blue';
import './index.scss';
import wx from 'weixin-js-sdk'

class Help extends React.Component {
  handleScan() {
    wx.scanQRCode({
      needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {}
    })
  }
  render() {
    return (
      <div className="help-page">
        <div className="tip-text">
          <span onClick={this.handleScan}>扫一扫</span>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Help />, document.getElementById('container'));
