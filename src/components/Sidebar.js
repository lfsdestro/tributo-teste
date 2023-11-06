import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faFileAlt, faDollarSign, faCog } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';
import './Sidebar.css';

const Sidebar = ({ setContent }) => {
    // Define o estado do componente Sidebar
    const [selectedOption, setSelectedOption] = useState('Recuperação tributária');
  
    // Funções para lidar com os cliques nas opções do Sidebar e alterar o conteúdo principal
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

    const handleConfiguracoesClick = () => {
        setContent('Configurações');
        setSelectedOption('Configurações');
    };
  
    return (
        // Estrutura do sidebar com base nas classes de estilo fornecidas
        <div className="col-md-3 col-sm-12 sidebar-container">
            <div className="sidebar-header">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <p className="workspace-text">Workspace</p>
            <ul className="list-group mt-3">
                {/* Opções do sidebar com ícones e funcionalidades de clique */}
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
                <li className={`list-group-item config ${selectedOption === 'Configurações' ? 'active' : ''}`} onClick={handleConfiguracoesClick}>
                    <FontAwesomeIcon icon={faCog} className="mr-2" />
                    Configurações
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
