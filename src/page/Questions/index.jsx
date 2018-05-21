import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import { actions } from '../../redux/app';
import { questions } from '../../../config/listMap';
// import { hashHistory } from 'react-router';
import { Avatar, Pagination } from 'antd';
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
      <div className="questions-wrapper">
        <div className="questions-container">
          <div className="questions-items">
            {
              questions && questions.map(item => {
                return (
                  <div className="questions-item ant-row" key={item.id}>
                    <div className="ant-col-18">
                      <div className="ant-col-2">
                        <Avatar src={item.avatarSrc} size="large" />
                      </div>
                      <div className="ant-col-10" style={{ textAlign: 'left'}}>
                        <Link to={`/questions/${item.id}`} className="questions-title">{item.title}</Link>
                        <div className="questions-summary">
                          <span className="author">{item.author}</span>
                          <span className="date">{item.date}</span>
                        </div>
                      </div>
                    </div>
                    <div className="ant-col-6">
                      <div className="answer-count"><div>{item.answerCount}</div><div>回复</div></div>
                      <div className="start-count"><div >{item.startCount}</div><div>收藏</div></div>                      
                    </div>
                  </div>
                );
              })
            }
          </div>
          <Pagination current={currentPage} total={questions.length}  onChange={this.pageChange} pageSize={8} />
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
