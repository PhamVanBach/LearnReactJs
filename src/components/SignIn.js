/*
* https://www.figma.com/file/M2Lh7XaEKWnds9SeEuJ1l0/B%C3%A0i-t%E1%BA%ADp-CSS-cho-entry-test?node-id=50%3A0
* Dựa vào link( tìm đến phần Signin) trên và với kiến thức đã học về cách chia nhỏ 1 giao diện ra thành
* component trong reactjs
* Chia nhỏ giao diện signin thành các component nhỏ trong reactjs.
*/

import React, { Component } from 'react';

class SignIn extends Component {
    render() {
      return  <li>
                <div className="icon"> {this.props.icon} </div>
                <div className="name">{this.props.name}</div>
            </li>
    };
}

export default SignIn;