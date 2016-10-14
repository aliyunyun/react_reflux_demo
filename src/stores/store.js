/**
 * Created by yuanyunlong on 16/9/28.
 */
import Reflux from 'reflux'
import {Actions} from '../actions/action'

//给数组添加remove方法，用于去除指定下标的元素

let currentMode = 1;
let modes = {
  1: {
    mode: 1,
    temp1: 3,
    temp2: 2,
    power: 2
  },
  2: {
    mode: 2,
    temp1: 4,
    temp2: 4,
    power: 4
  }

}

Array.prototype.remove=function(dx)
{
  if(isNaN(dx)||dx>this.length){return false;}
  for(var i=0,n=0;i<this.length;i++)
  {
    if(this[i]!=this[dx])
    {
      this[n++]=this[i]
    }
  }
  this.length-=1
};

export default Reflux.createStore(
  {

    //监听所有的actions
    listenables: [Actions],
    //on开头的都是action触发后的回调函数
    onSwitchMode(value){
      currentMode = value;
      this.trigger(modes[value]);
    },
    onLock(value){
      console.log("onlock touch");
      if(null){
        console.log("aaa11111");
      }
      // trigger 会触发状态，将childLock 值返回给view层
      this.trigger({childLock: value});
    }

  }

);
