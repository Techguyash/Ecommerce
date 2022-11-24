import React from "react";


const NavBar = () => {
  return (
    <header class="l-header">
      <nav class="nav bd-grid">
        <div>
          <a href="#" class="nav__logo">
            TRACKME
          </a>
        </div>

        <div class="nav__menu" id="nav-menu">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active">
                Home
              </a>
            </li>
            <li class="nav__item">
              <a href="#featured" class="nav__link">
                Featured
              </a>
            </li>
            <li class="nav__item">
              <a href="#new" class="nav__link">
                New
              </a>
            </li>
            <li class="nav__item">
              <a href="#suscribed" class="nav__link">
                Suscribed
              </a>
            </li>
          </ul>
        </div>

        <div>
          <i class="bx bxs-cart nav__cart"></i>
          <i class="bx bx-menu nav__toggle" id="nav-toggle"></i>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
