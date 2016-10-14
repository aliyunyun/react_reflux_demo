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
import  store from '../stores/store.js';
import ReactDOM from 'react-dom';


//导出class
// default 是为了 react-router 有效
export default class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
    store.listen((data)=>{
      if(!this.isMounted(this)) return;
      this.setState(data);
    }); // 监听Store

  }

  isMounted(component){
    try {
      ReactDOM.findDOMNode(component);
      return true;
    }catch (e){
      return false;
    }
  }



  render(){

    return (<div>
      <p>Home!!!!!</p>

    </div>);
  }

};
