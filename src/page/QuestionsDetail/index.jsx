import React from 'react';
import { connect } from 'react-redux';
// import { hashHistory } from 'react-router';
// import {actions} from '../../redux/app';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './index.less';
import {Icon, Avatar, Button} from 'antd';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isStared: false,
      editorState: EditorState.createEmpty(),
    };
  }
  changeStarState =() => {
    let { isStared } = this.state;
    this.setState({
      isStared: !isStared
    });
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  submit = () => {
    const {  editorState } =this.state;
    let val = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    // this.props.dispatch(actions.updateComment(val));
    console.log(val);
  }
  render(){
    // const {item} = this.state; 
    const data={
      id: 1,
      avatarSrc: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      title: 'tomacat8启动异常',
      author: 'cherrynia',
      date: '2018-04-27 17:06',
      startCount: 8,  
      answerCount: 10,
      isStared: true,
      content: `
      严重: A child container failed during start

      java.util.concurrent.ExecutionException: org.apache.catalina.LifecycleException: Failed to start component [StandardEngine[Catalina].StandardHost[localhost].StandardContext[/B]]
      
      at java.util.concurrent.FutureTask.report(Unknown Source)
      
      at java.util.concurrent.FutureTask.get(Unknown Source)
      
      at org.apache.catalina.core.ContainerBase.startInternal(ContainerBase.java:943)
      
      at org.apache.catalina.core.StandardHost.startInternal(StandardHost.java:871)
      
      at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:145)
      
      at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1408)
      
      at org.apache.catalina.core.ContainerBase$StartChild.call(ContainerBase.java:1398)
      
      at java.util.concurrent.FutureTask.run(Unknown Source)
      
      at java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)
      
      at java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)
      
      at java.lang.Thread.run(Unknown Source)
      
      Caused by: org.apache.catalina.LifecycleException: Failed to start component [StandardEngine[Catalina].StandardHost[localhost].StandardContext[/B]]
      
      at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:162)
      
      ... 6 more
      
      Caused by: org.apache.catalina.LifecycleException: Failed to start component [org.apache.catalina.webresources.StandardRoot@7f8b6c58]
      
      at org.apache.catalina.util.LifecycleBase.start(LifecycleBase.java:162)
      
      at org.apache.catalina.core.StandardContext.resourcesStart(StandardContext.java:4969)
      
     
      `
    };
    const { isStared, editorState } =this.state;
    // const {data} = this.props; 
    return(
      <div className="paths-wrapper">
        <div className="paths-container">
          <div className="question-box">
            <div className="headline">
              <span className="title">{data.title}</span>
              {isStared ? <Icon type="star-o" onClick={this.changeStarState} className="starIcon"/> : <Icon type="star" onClick={this.changeStarState} className="starIcon"/>}              
              <span className="answer">{`${data.answerCount} 回复`}</span>
              <span className="star">{`${data.startCount} 收藏`}</span>
            </div>
            <div className="author">
              <Avatar src={data.avatarSrc} size="large" />              
              <span>{data.date}</span>
            </div>
            <div className="content">{data.content}</div>
            <div className="all-answer">
              <p>全部回复</p>
              <hr/>
              <div>还没有人回复，沙发空缺中~</div>
            </div>
            <div className="your-answer">
              <p>你的回复</p>
              <hr/>
              <Editor
                editorState={editorState}
                editorClassName="editor"
                onEditorStateChange={this.onEditorStateChange}
              />
            </div>
            <Button className="submit-btn" type="primary" onClick={this.submit}>提交</Button>
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
