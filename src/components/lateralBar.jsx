import React, { Component } from "react";
import "../styles/lateralBar.css";
import { Item } from "./lateralBar/item";
import { Button } from "@windmill/react-ui";

class BarraLateral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barraOculta: false,
    };
  }

  toggleBarra = () => {
    this.setState((prevState) => ({
      barraOculta: !prevState.barraOculta,
    }));
  };

  render() {
    const { barraOculta } = this.state;

    if (barraOculta) {
      return (
        <div>
          <Button onClick={this.toggleBarra}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>

          </Button>
        </div>
      );
    }

    return (
      <nav className="sidebar bg-white dark:bg-gray-800">
        <div className="logo_items flex">
          <Button className="nav_image" onClick={this.toggleBarra}>
            <img src="https://seeklogo.com/images/P/psicologia-logo-1E81DC14D9-seeklogo.com.png" alt="logo" />
          </Button>
          <span className="logo_name">Aduaeasy</span>
          <i className="bx bx-lock-open-alt" id="lock-icon" title="Bloquear Barra Lateral"></i>
        </div>
        <div className="menu_container">
          <div className="menu_items">
            <ul className="menu_item">
              <div className="menu_title flex">
                <span className="title">Administacion</span>
                <span className="line"></span>
              </div>
              <li>
                <Item link="https://mi-website.com" textSpan="Home" iconName="bx bx-home-alt" />
              </li>
              <li>
                <Item link="https://mi-website.com" textSpan="Productos" iconName="bx bx-home-alt" />
              </li>
              {/* Agrega más elementos del menú según sea necesario */}
            </ul>
            {/* Agrega más secciones de menú según sea necesario */}
          </div>
          <div className="sidebar_profile flex">
            <span className="nav_image">
              <img src="https://c0.klipartz.com/pngpicture/178/595/gratis-png-perfil-de-usuario-iconos-de-computadora-inicio-de-sesion-avatares-de-usuario-thumbnail.png" alt="logo_img" />
            </span>
            <div className="data_text">
              <h2 className="">Adrian Jimenez</h2>
              <span className="email">isc_mjimenez2021@accitesz.com</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default BarraLateral;
