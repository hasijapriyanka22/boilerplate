import * as React from "react";
import PropTypes from 'prop-types';
import './navbar.css';

let navMenu = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    subMenu: [
      {
        title: "Alert ",
        href: "/docs/primitives/alert-dialog",
      },
      {
        title: "Alert Dialog test",
        href: "/docs/primitives/alert-dialog",
      },
      {
        title: "Alert Dialog test area ",
        href: "/docs/primitives/alert-dialog",
      },
    ]
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",

  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
  
  },
  {
    title: "Company",
    href: "/docs/primitives/tooltip",
    subMenu: [
      {
        title: "About Us",
        href: "/docs/primitives/tooltip",
      },
      {
        title: "Carrer",
        href: "/docs/primitives/tooltip",
      },
      {
        title: "Contact Us",
        href: "/docs/primitives/tooltip",
      }
    ]
  },
]

export function NavBar({component}) {
  navMenu = component?.length > 0 ? component : navMenu
  return (
    <nav>
      <ul className="nav-bar-menu">
        {navMenu?.length > 0 && navMenu.map((el, index) => (
          <li className="nav-bar-menu-item" key={index}>
            <a href={el.href}>{el.title}</a>
            <ul className="submenu">
              {el?.subMenu?.length > 0 && el?.subMenu?.map((subMenuEl, subMenuIndex) => (
                <li className="submenu-item" key={subMenuIndex}><a href={subMenuEl.href}>{subMenuEl.title}</a></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

NavBar.propTypes = {
  component: PropTypes.array,
};

NavBar.defaultProps = {
  component: navMenu,
};