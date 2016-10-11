/**
 * Created by yuanyunlong on 16/9/22.
 */
/**
 * 温度设置组件
 * @prop {string}   mode 模式名称
 * @prop {string}   text 文字描述
 * @prop {boolean}  on   是否开启状态
 * @prop {function} cb   可选，点击后的回调函数
 */

import React from 'react';


//一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。
// 如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。
// 下面是一个JS文件，里面使用export命令输出变量。


// //定义类
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   toString() {
//     return '(' + this.x + ', ' + this.y + ')';
//   }
// }

// extends 表示继承
// construct 是构造函数
// 如果是继承的 需要用 supper(args)
export class ModeButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        touchState: true
    }
  }
  touchStart() {
    console.log("touch");
    // this.setState()  给属性复制，只用通过setState这个方法触发才会刷新View层
    this.setState({touchState: !this.state.touchState});
  }
  render() {
    var src = '../images/' + "childlock" + (this.state.touchState? '-on' : '-off') + '@3x.png';
    return <div className={this.props.className} onTouchStart={this.touchStart.bind(this)}>
      <img src={src} />
      <p >{this.props.text}</p>
    </div>;
  }
};
