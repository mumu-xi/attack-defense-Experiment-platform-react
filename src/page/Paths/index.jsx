import React from 'react';
import { connect } from 'react-redux';
import { hashHistory, Link } from 'react-router';

import {actions} from '../../redux/app';
import { courses, learnPath, paths } from '../../../config/listMap';
import CourseBox from '../../component/CourseBox';
import LearnPath from '../../component/LearnPath';
import './index.less';
import { Icon } from 'antd';

class IndexPage extends React.Component {
  render(){
    return(
      <div className="paths-wrapper">
        <div className="paths-banner"></div>
        <div className="paths-container">
          <div className="paths-body ant-row">
            {
              paths && paths.map(item => {
                return <LearnPath item={item} key={item.id} />;
              })
            }
          </div>
          <div className="path-header" name="first-step">
            <a name="first-step" id="first-step">新手入门</a>
            <Link to="/course" className="see-more">更多<Icon type="right" /></Link>
          </div>
          <div className="ant-row">
            {
              courses && courses.slice(0,4).map(item => {
                return <CourseBox item={item} key={item.id} />;
              })
            }
          </div>
          <div className="path-header">
            <a name="second-step" id="second-step">进阶课程</a>
            <Link to="/course" className="see-more">更多<Icon type="right" /></Link>
          </div>
          <div className="ant-row">
            {
              courses && courses.slice(1,5).map(item => {
                return <CourseBox item={item} key={item.id} />;
              })
            }
          </div>
          <div className="path-header">
            <a name="third-step" id="third-step">高阶课程</a>
            <Link to="/course" className="see-more">更多<Icon type="right" /></Link>
          </div>
          <div className="ant-row">
            {
              courses && courses.slice(2,6).map(item => {
                return <CourseBox item={item} key={item.id} />;
              })
            }
          </div>
          <div className="path-header" id="last-step">
            <a name="last-step" id="last-step">成为大牛</a>
            <Link to="/course" className="see-more">更多<Icon type="right" /></Link>
          </div>
          <div className="ant-row">
            {
              courses && courses.slice(3,7).map(item => {
                return <CourseBox item={item} key={item.id} />;
              })
            }
          </div>
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
