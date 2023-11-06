import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFileAlt, faDollarSign, faCog } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';
import './Sidebar.css';

const Sidebar = ({ setContent }) => {
    const [selectedOption, setSelectedOption] = useState('Recuperação tributária');
  
    const handleRecuperacaoTributariaClick = () => {
      setContent('Recuperação tributária');
      setSelectedOption('Recuperação tributária');
    };
  
    const handleAtivosTributariosClick = () => {
      setContent('Ativos tributários');
      setSelectedOption('Ativos tributários');
    };
  
    const handleRessarcimentoClick = () => {
      setContent('Ressarcimento');
      setSelectedOption('Ressarcimento');
    };

    const handleConfiguraçõesClick = () => {
      setContent('Configurações');
      setSelectedOption('Configurações');
    };
  
    return (
      <div className="col-md-3 col-sm-12 sidebar-container">
        <div className="sidebar-header">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <p className="workspace-text">Workspace</p>
        <ul className="list-group mt-3">
          <li className={`list-group-item ${selectedOption === 'Recuperação tributária' ? 'active' : ''}`} onClick={handleRecuperacaoTributariaClick}>
            <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
            Recuperação tributária
          </li>
          <li className={`list-group-item ${selectedOption === 'Ativos tributários' ? 'active' : ''}`} onClick={handleAtivosTributariosClick}>
            <FontAwesomeIcon icon={faChartBar} className="mr-2" />
            Ativos tributários
          </li>
          <li className={`list-group-item ${selectedOption === 'Ressarcimento' ? 'active' : ''}`} onClick={handleRessarcimentoClick}>
            <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
            Ressarcimento
          </li>
          {/* ... outras opções */}
          <li className={`list-group-item config ${selectedOption === 'Configurações' ? 'active' : ''}`} onClick={handleConfiguraçõesClick}>
            <FontAwesomeIcon icon={faCog} className="mr-2" />
            Configurações
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
