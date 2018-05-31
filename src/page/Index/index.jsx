import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import List from '../../component/List';
import './index.less';
// import { actions } from '../../redux/app'; 

class Index extends React.Component {
  
  // componentDidMount(){
  //   this.props.dispatch(actions.searchAllCommodityList());
  // }
  
  render (){
    return (<div className="index" style={{color: 'red',fontSize: 24}}>
      <Carousel autoplay>
        <div className="carousel-item carousel-item1"></div>
        <div className="carousel-item carousel-item2"></div>
        <div className="carousel-item carousel-item3"></div>
      </Carousel>
      <List {...this.props}/>
    </div>
    );
  }
}
export default connect(state => {
  return {
    ...state.app
  };
})(Index);