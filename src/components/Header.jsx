import React from 'react'

import '../assets/styles/Header.css';

const Header = () => {
	return (
    <nav>
      <div className="container">
				<div className="message">
					<p>Mensajes Salientes</p>
				</div>
				<div className="container-image">
					<div className="image">
						<div className="agregar">+</div>
					</div>
					<p>Nuevo Mensaje</p>
				</div>
			</div>
    </nav>
  );
}

export default Header;
