import React from 'react';
import sent from '../assets/icons/sent.svg'
import received from '../assets/icons/received.svg';
import notReceived from '../assets/icons/not_received.svg';
import answered from '../assets/icons/answered.svg';

import '../assets/styles/Correos.css'

const Correos = () => {
	return (
		<div className="container-correos">
			<div className="stadistics">
				<div className="stadistics-content">
					<p className="env">Enviados</p>
					<div className="line-env"></div>
					<p className="number">25</p>
				</div>
				<div className="stadistics-content">
					<p className="env">Recibidos</p>
					<div className="received"></div>
					<p className="number">25</p>
				</div>
				<div className="stadistics-content">
					<p className="env">No recibidos</p>
					<div className="notReceived"></div>
					<p className="number">0</p>
				</div>
				<div className="stadistics-content">
					<p className="env">Respondidos</p>
					<div className="answered"></div>
					<p className="number">0</p>
				</div>
			</div>
			<div className="message-icons">
				<img src={sent}></img>
				<p>Mensajes enviados</p>
				<p>25</p>
				<div className="line-vertical line-sent"></div>
			</div>
			<div className="message-icons">
				<img src={received}></img>
				<p>Mensajes recibidos</p>
				<p>25</p>
				<div className="line-vertical line-received"></div>
			</div>
			<div className="message-icons">
				<img src={notReceived}></img>
				<p>Mensajes no recibidos</p>
				<p>0</p>
				<div className="line-vertical line-notReceived"></div>
			</div>
			<div className="message-icons message-answered">
				<img src={answered}></img>
				<p>Mensajes respondidos</p>
				<p>0</p>
				<div className="line-vertical line-answered"></div>
			</div>
		</div>
	);
};

export default Correos;
