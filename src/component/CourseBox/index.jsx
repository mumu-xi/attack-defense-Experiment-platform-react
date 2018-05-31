import React from 'react';
import { Icon } from 'antd';
import './index.less';
import {actions} from '../../redux/app';


class CourseBox extends React.Component {
  handleClick = (id) => {
    this.props.dispatch(actions.updateCourseDetail(id-1));
  }
  render(){
    const {item} = this.props;
      
    return(
      <div className="ant-col-6 course" onClick={this.handleClick.bind(this,item.id)}>
        <a className="course-box" href={`#/course/${item.id}`}>
          <div className="course-img">
            <img alt={item.name} src={item.src} />
          </div>
          <div className="course-body">
            <div className="course-name">{item.name}</div>
            <div className="course-desc">{item.desc}</div>
            <div className="course-footer"><Icon type="usergroup-add" />{item.followerNum}</div>
          </div>
        </a>
      </div>
    ); 
  } 
}

export default CourseBox;

