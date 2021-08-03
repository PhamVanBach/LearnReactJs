import React, { Component } from 'react';
import './ChangeSizeImage.css';
class ChangeSizeImage extends Component {
    render(){
        
        const {item} = this.props;
        const imageClick = () => {
            console.log('hehe')
            {
                item.isClick = true;
            }

        };
        let className = 'ChangeSizeImage'; 

        if(item.isClick) { 
            className += ' ChangeSizeImage-big';  
        }

        return (
            <td>
               <img src={this.props.item.src} alt="Image 1" className={className} onClick={() => imageClick()}/>
          </td>
        )
    };
}

export default ChangeSizeImage;