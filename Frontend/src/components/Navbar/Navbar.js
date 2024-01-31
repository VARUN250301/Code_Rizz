import React from "react";
import { Component } from "react";
import "./Navbarstyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false , selected:'Home'};

  handleClick = (e) => {
    this.setState({ clicked: !this.state.clicked });
  };

  FnSelected= (title)=>{
    console.log('ppp');
    this.setState({selected:title})
  }
 

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo"><i class="fa-solid fa-bars"></i>Sahayog </h1>
        <hr/>
        <div className="menu-icons" onClick={()=>this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div> 
  
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems &&
            MenuItems.map((item, index) => {
              return (
                <li key={index}
                    className={this.state.selected===item.title? "selectedd":''} 
                    onClick={()=>this.FnSelected(item.title)}
                    >
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>
                    <span className="TitleOfNav">{item.title}</span>
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
