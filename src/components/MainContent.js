import React, { useState } from 'react';
import ClientMenu from './ClientMenu';
import { clients } from '../data/ClientData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import people from '../img/people.svg';

const MainContent = ({ content }) => {
    // Estado para controlar a exibição do menu de clientes e o termo de pesquisa
    const [showClientMenu, setShowClientMenu] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Função para lidar com a alteração no termo de pesquisa
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    // Função para alternar a exibição do menu de clientes
    const handleClientMenuClick = () => {
        setShowClientMenu(!showClientMenu);
    };

    // Filtra os clientes com base no termo de pesquisa
    const filteredClients = clients.filter((client) =>
        client.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="col-md-9 main-content">
            {content === 'Recuperação tributária' && (
                <div className="card text-center">
                    <div className="card-body">
                        {/* Título para a seção de Recuperação de Crédito */}
                        <h3 className="card-title mb-4 mt-3 recup-title">Recuperação de Crédito</h3> 
                        {/* Subtítulo para a seção de Recuperação de Crédito */}
                        <h5 className="card-subtitle mb-4">Comece uma recuperação de crédito</h5> 
                        {/* Campo de pesquisa e botão de busca */}
                        <div className="input-group d-flex justify-content-center">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Pesquisar..."
                                aria-label="Pesquisar"
                                aria-describedby="button-addon2"
                                onChange={handleSearch} />
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClientMenuClick}>
                                <FontAwesomeIcon icon={faSearch} className="mr-2" />
                            </button>
                            
                        </div>
                        {/* Texto clicável para exibir o menu de clientes */}
                        <p className={`mt-3 ${showClientMenu ? 'clickable-text-active' : 'clickable-text'}`} onClick={handleClientMenuClick}>Ver lista de clientes</p>
                        <img src={people} alt="pessoas" className="svg-image" />
                    </div>
                    
                </div>
            )}
            {/* Renderiza o conteúdo para 'Ativos tributários' */}
            {content === 'Ativos tributários' && (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Ativos Tributários</h5>
                        <p className="card-text">Conteúdo de ativos tributários.</p>
                    </div>
                </div>
            )}
            {/* Renderiza o conteúdo para 'Ressarcimento' */}
            {content === 'Ressarcimento' && (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Ressarcimento</h5>
                        <p className="card-text">Conteúdo de ressarcimento.</p>
                    </div>
                </div>
            )}
            {/* Renderiza o conteúdo para 'Configurações' */}
            {content === 'Configurações' && (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Configurações</h5>
                        <p className="card-text">Conteúdo de configurações.</p>
                    </div>
                </div>
            )}
            {/* Renderiza o menu de clientes se showClientMenu for verdadeiro */}
            {showClientMenu && <ClientMenu clients={filteredClients} closeClientMenu={handleClientMenuClick} />}
        </div>
    );
};

export default MainContent;
