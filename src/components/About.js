/**
 * Created by yuanyunlong on 16/9/27.
 */
// import 是导入的意思
// import {} export{} 导入接口和导出接口的意思
// 这里有一个知识点， ES6有6种声明变量的方法
//  var 命令和function 命令  var 是定义改作用域中的局部作用域，去掉var是全局作用域
//  let 命令和const 命令  let实际上为javascript新增了块级作用域，并且let不存在变量提升的问题
//  import 命令和 export 命令

import React from 'react';
import {ModeButton} from './ModeButon.js';
import {Actions} from '../actions/action.js';
import  store from '../stores/store.js';
import ReactDOM from 'react-dom';


//导出class
// default 是为了 react-router 有效
export default class About extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    // 下面是ES6 匿名函数的写法，类似于swift的语法
    //  ES5的写法
    //  store.listen(function(data){
    //    return this.setState(data);
    //  });
    //   下面是es6的写法  标识名=>表达式  可以省略function 大括号
    //    多个参数的写法
    //    var total = values.reduce(function(a,b){return a + b}, 0);
    //    var total = values.reduce((a, b) => a + b, 0);
    store.listen((data)=>{
      if(!this.isMounted(this)) return;
      this.setState(data);
    }); // 监听Store


    this.handleLock = this.handleLock.bind(this);
  }

  isMounted(component){
    try {
      ReactDOM.findDOMNode(component);
      return true;
    }catch (e){
      return false;
    }
  }

  handleLock(e){//处理童锁事件 (1-无，2-有)

    console.log("touch 童锁事件");
    let childLock = this.state.childLock || 1;
    childLock==1 ? childLock=2 : childLock=1;
    Actions.lock(childLock);
  }

  render(){

    let childLockState = this.state.childLock;
    console.log("childLockState" + childLockState);

    return (<div>
        <p>About me!!!!!</p>

        <ModeButton className="modeButton" />
        <div className="btnlist-back">
          <section className="flex btnlist">
            <article className="flex-cell art-1" onTouchEnd={this.handleLock} >
              <img src={this.state.childLock==2 || this.state.childLock=='undefined'?"../images/btnlist/2.png":"../images/btnlist/1.png"} style={this.state.childLock==2?{opacity:0.3}:{opacity:1}}  alt=""/>
              <p>儿童锁</p>
            </article>
            <article className="flex-cell art-2">
              <img src="../images/btnlist/4.png" alt=""/>
              <p>冰冻</p>
            </article>
            <article className="flex-cell art-3">
              <img src="../images/btnlist/6.png" alt=""/>
              <p>冷藏室</p>
            </article>
          </section>
        </div>
      </div>);
  }

};
