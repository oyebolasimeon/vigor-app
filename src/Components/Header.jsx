import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div>
        <header className="header" id="header">
            <div className="logo">
                <h2>Vigor Toolkits</h2>
                {/* Subsititute for Image Logo */}
                {/* <img src="" alt='logo' /> */}
            </div>
            <nav className="nav-links">
                <ul>
                    <li>
                        <a href="#home" className="anchor">home</a>
                    </li>
                    <li>
                        <a href="#home" className="anchor">about</a>
                    </li>
                    <li>
                        <a href="#home" className="anchor">vigor</a>
                    </li>
                    <li>
                        <a href="#home" className="anchor">resources</a>
                    </li>
                    <li>
                        <a href="#home" className="anchor">tools</a>
                    </li>
                    <li>
                        <a href="#home" className="toggle"><i className="fa fa-moon"></i></a>
                    </li>
                </ul>
            </nav>
        </header>
          {/* <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav__logo">Vigour Toolkits</a>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i> Relevance
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i> Services
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i> Toolkits
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>

                    </ul>
                    
                    <i className="uil uil-times nav__close" id="nav-close"></i>
                </div>

                <div className="nav__btns">
                   
                    <i className="uil uil-moon change-theme" id="theme-button"></i>

                    <div className="nav__toggle" id="nav-toggle">
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header> */}
    </div>
  )
}

export default Header