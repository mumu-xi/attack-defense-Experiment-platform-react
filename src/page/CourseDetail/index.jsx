import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import {actions} from '../../redux/app';
import './index.less';
import {Icon, Button, Rate} from 'antd';

class IndexPage extends React.Component {
  constructor(){
    super();
    this.state={
      item: null
    };
  }
  componentDidUpdate(preProps){
    
    if(preProps.singlecommDetail.length ===  0 && this.props.singlecommDetail) {
      this.setState({
        item: this.props.singlecommDetail,
      });
    }
  }
  render(){
    // const {item} = this.state; 
    const data={
      id: 1,
      name: 'SQL注入漏洞模拟训练攻击训练',
      src: 'https://dn-simplecloud.shiyanlou.com/1501565731189.png',
      desc: 'sqli-labs是一个专业的SQL注入练习平台，它支持GET和POST两种类型的注入方式，其中包含：1.报错注入(联合查询)1)字符型 2)数字型 2.报错注入(基于二次注入) 3.盲注1)基于布尔值2)基于时间 4.UPDATE型注入练习 5.INSERT型注入练 6. HTTP头部注入1)基于Referer2)基于UserAgent3)基于Cookie 7. 二次排序注入练习',
      followerNum: '10',
      rateVal: 2.5
    };
    // const {data} = this.props; 
    return(
      <div className="course-wrapper">
        <div className="course-container">
          <div className="course-img">
            <img alt={data.name} src={data.src} />
          </div>
          <div className="course-detail">
            <div className="course-name">{data.name}</div>
            <div className="course-fllower"><Icon type="user" />{data.followerNum}</div>
            <Rate value={data.rateVal} disabled={false}/>
            <div className="course-btns">
              <Button style={{marginRight: 20}}><a href="http://10.96.82.154:4000/detail/weblogic.html" target="_black">查看文档</a></Button>
              <Button type="primary">开始实验</Button>
            </div>
          </div>
          <div className="course-desc">{data.desc}</div>
        </div>
      </div>
    ); 
  }  
}

export default connect(state => {
  return {
    ...state.app
  };
})(IndexPage);
