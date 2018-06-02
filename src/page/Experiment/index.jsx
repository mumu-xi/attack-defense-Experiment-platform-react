/*
 * @Author: my-girl 
 * @Descrition:  
 * @Date: 2018-05-27 21:28:03 
 * @Last Modified time: 2018-05-27 21:28:03 
 */

import React, { Component } from 'react';
import { Icon } from 'antd';
import './index.less';

class Experiment extends Component {
  handleClickBack = () => {
    history.back();
  }
  render() {
    let textLink = `http://doc.always-online.club/detail/0${this.props.params.id}.html`;

    return <div className="experiment">
      <div className="experiment-container">
        <div className="link-back">
          <a href="javascript:void(0)" onClick={this.handleClickBack}>
            <Icon type="rollback" /> 返回
          </a>
        </div>
        <div className="exp-gitbook">
          {/* <iframe src="http://doc.always-online.club/detail/SQL-injection-attack-training.html" frameBorder={0}/> */}
          <iframe src={`${textLink}`} frameBorder={0}/>
        </div>
        <div className="exp-vnc">
          <iframe src="http://47.100.49.235:6080/vnc.html?host=47.100.49.235&port=6080" frameBorder={0}/>
        </div>
      </div>
    </div>;
  }
}

export default Experiment;
