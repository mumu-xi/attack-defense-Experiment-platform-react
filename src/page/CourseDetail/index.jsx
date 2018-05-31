import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { courses } from '../../../config/listMap'; 
import './index.less';
import {Icon, Button, Rate} from 'antd';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: this.props.singleCourseDetail.length > 0 ? this.props.singleCourseDetail: courses[this.props.location.pathname.slice(8)-1]
    };
  }
  render(){
    const {params} = this.props; 
    const {data} = this.state;
    
    return(
      <div className="course-wrapper">{
        <div className="course-container">
       
          <div className="course-img">
            <img alt={data.name} src={data.src} />
          </div>
          <div className="course-detail">
            <div className="course-name">{data.name}</div>
            <div className="course-fllower"><Icon type="user" />{data.followerNum}</div>
            <Rate value={data.rateVal} disabled={false}/>
            <div className="course-btns">
              <Button style={{marginRight: 20}}><a href={`${data.textLink}`} target="_black">查看文档</a></Button>
              <Button type="primary"><Link to={`/experiment/${params.id}`}>开始实验</Link></Button>
            </div>
          </div>
          <div className="course-desc">{data.desc}</div>
        </div>
      }</div>
      
    ); 
  }  
}

export default connect(state => {
  return {
    ...state.app
  };
})(IndexPage);
