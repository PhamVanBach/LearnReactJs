import React, { Component } from 'react';

class MakeAList extends Component {
    render() {
      return(
          <ol type={this.props.type} start={this.props.start}>
              <li>
                { 
                    this.props.name 
                }
              </li>
          </ol>
      )
    };
}

export default MakeAList;