import React, { Component } from 'react';
import './App.css';
import { BiHomeHeart } from 'react-icons/bi';
import { BiGift } from 'react-icons/bi';
import { BiCloudUpload } from 'react-icons/bi';
import { FiCoffee } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import SignIn from './components/SignIn';
import Employee from './components/Employee';
import ChangeSizeImage from './components/ChangeSizeImage';
import MakeAList from './components/MakeAList';

class App extends Component {
  constructor() {
    super();
    this.employees = [
      {Company: 'Google', Contact: 'Maria Anders', Country: 'Germany'},
      {Company: 'Google', Contact: 'Maria Anders', Country: 'Germany'},
      {Company: 'Google', Contact: 'Maria Anders', Country: 'Germany'},
      {Company: 'Google', Contact: 'Maria Anders', Country: 'Germany'},
      {Company: 'Google', Contact: 'Maria Anders', Country: 'Germany'},
      {Company: 'Google', Contact: 'Maria Anders', Country: 'Germany'},
    ];
    this.images = [
      {src: 'http://bit.ly/3ayPusa', isClick: null},
      {src: 'http://bit.ly/3ayPusa', isClick: false},
      {src: 'http://bit.ly/3ayPusa', isClick: false},
      {src: 'http://bit.ly/3ayPusa', isClick: false}
    ];

    this.listType = [
     
    ];
  }

  render() {
    return (
      <div className="App">
        
        <div className="navbar">
          <ul>
          <SignIn icon={<BiHomeHeart />} name="Home"/>
          <SignIn icon={<BiGift />} name="Deals"/>
          <SignIn icon={<BiCloudUpload />} name="Upload"/>
          <SignIn icon={<FiCoffee />} name="Work"/>
          <SignIn icon={<FiSettings />} name="Settings"/>
          </ul>
        </div>
          
        <div className="htmTable">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              {this.employees.map((item, index) => <Employee key={index} company={item.Company} contact={item.Contact} country={item.Country} />)}
            </tbody>
          </table>
        </div>
        <div className="imageTable">
          {
            this.images.map((item, index) => 
              <ChangeSizeImage key={index} item={item} />
            )
          }
        </div>
        <div className="makeAList">
          {
             
            this.listType.map((item) => <MakeAList type={item.type} start={item.start} name={item.name}/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
