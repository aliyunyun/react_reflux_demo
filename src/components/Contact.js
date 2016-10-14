
import React from 'react';
import {ModeButton} from  "./ModeButon.js";

export default class Contact extends React.Component{
  constructor(props){
    super(props);

  }

  render(){

    return (<div>
      <section className="flex">
        <div className="main-wrap">
          <div className="blue-box flex">
            <dl className="flex-cell">
              <dt>冷冻室</dt>
              <dd>23</dd>
            </dl>
            <dl className="flex-cell">
              <dt>冷藏室</dt>
              <dd>23</dd>
            </dl>
          </div>
        </div>
        <div className="flex-cell vice-wrap child-lock">
          <dl>
            <dd className="child-lock-ico"><img src="../images/childlock-off@3x.png" /></dd>
            <dt className="child-lock-txt">儿童锁</dt>
          </dl>
        </div>

      </section>

    </div>);
  }

};
