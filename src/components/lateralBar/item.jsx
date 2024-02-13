import React, { Component } from "react";

class Item extends Component {
  render() {
    const {link, textSpan, iconName} = this.props;
    return (
      <div className="item">
        <a href={link} className="link flex">
          <i className={iconName}></i>
          <span>{textSpan}</span>
        </a>
      </div>
    );
    }
}
export {Item};