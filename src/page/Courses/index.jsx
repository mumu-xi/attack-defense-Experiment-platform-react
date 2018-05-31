import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import {Pagination} from 'antd';

import { courses } from '../../../config/listMap';
import {actions} from '../../redux/app';
import CourseBox from '../../component/CourseBox';
import './index.less';

class IndexPage extends React.Component {
  constructor(){
    super();
    this.state={
      currentPage: 1
    };
  }
  pageChange = val =>{
    this.setState({
      currentPage: val
    });

  }

  render(){   
    const {currentPage} = this.state;
    return(
      <div className="courses-wrapper">
        <div className="courses-container">
          <div className="ant-row">
            {
              courses && courses.map(item => {
                return <CourseBox item={item} key={item.id} {...this.props}/>;
              })
            }
          </div>
        </div>
        <Pagination current={currentPage} total={courses.length}  onChange={this.pageChange} pageSize={8}/>
      </div>
  
    ); 
  }  
}

export default connect(state => {
  return {
    ...state.app
  };
})(IndexPage);
