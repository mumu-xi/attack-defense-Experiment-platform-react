import React from 'react';
import {Icon} from 'antd';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions } from '../../redux/app';
import { handpickCourse, learnPath } from '../../../config/listMap';
import CourseBox from '../CourseBox';
import LearnPath  from '../LearnPath';
import './index.less';

class IndexPage extends React.Component {
  handleClick = (id) => {
    this.props.dispatch(actions.searchCommDetail({'commId': id}, ()=>{
      hashHistory.push(`/commodity/${id}`);
    }));
  }
  render(){
    return(
      <div className="list-wrapper">
        <div className="home-section handpick-course">
          <div className="container">
            <div className="home-section-header">
              <span>精选项目课</span>
              <span>|</span>
              <span className="home-select-desc">动手中收获</span>
              <Link to="/course" className="see-more">更多<Icon type="right" /></Link>
            </div>
            <div className="learn-path-body ant-row">
              {
                handpickCourse && handpickCourse.map(item => {
                  return <CourseBox item={item} key={item.id} />;
                })
              }
            </div>
          </div>
        </div>

        <div className="home-section learn-path">
          <div className="container">
            <div className="home-section-header">
              <span>学习路径</span>
              <span>|</span>
              <span className="home-select-desc">精准而系统的学习路径，从0到大牛</span>
              <Link to="/course" className="see-more">更多<Icon type="right" /></Link>
            </div>
            <div className="learn-path-body ant-row">
              {
                learnPath && learnPath.map(item => {
                  return <LearnPath item={item} key={item.id} />;
                })
              }
            </div>
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


