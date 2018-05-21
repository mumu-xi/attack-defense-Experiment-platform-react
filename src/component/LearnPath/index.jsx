import React from 'react';
import './index.less';
import { partial } from 'lodash';

class LearnPathBox extends React.Component {
  handleClick = (item) => {
    if (item.href) {
      let anchorElement = document.getElementById(item.href);
      console.log(anchorElement);
      if(anchorElement) { anchorElement.scrollIntoView();} 
    }
  } 
  render(){
    const {item} = this.props;
      
    return(
      <div className="ant-col-6 learn-path">
        <a className="learn-path-box"
          onClick={partial(this.handleClick, item)}
          href={item.href ? 'javascript:void(0)' : `/learn-path/${item.id}`}>        
          <div className="learn-path-img">
            <img alt={item.name} src={item.src} />
          </div>
          <div className="learn-path-name">{item.name}</div>
          <div className="learn-path-desc">{item.desc}</div>
        </a>
      </div>
    ); 
  } 
}

export default LearnPathBox;

