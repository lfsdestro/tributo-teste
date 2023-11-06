import React from 'react';
import { clients } from '../data/ClientData'; // Importa array de objetos
import './ClientMenu.css'; 
const ClientMenu = ({ closeClientMenu }) => {
  return (
    // Container para o menu do cliente com base nas classes de estilo fornecidas
    <div className="col-md-3 col-sm-12 client-menu-container d-flex flex-column justify-content-start align-items-end">
      {/* Cabeçalho do menu do cliente com botão de fechar */}
      <div className="client-menu-header d-flex justify-content-between align-items-center mb-3 w-100">
        <h5>Clientes</h5>
        <button type="button" className="close" aria-label="Fechar" onClick={closeClientMenu}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {/* Lista de clientes */}
      <div className="client-list w-100">
        <ul className="list-group">
          {clients.map((client) => (
            // Item da lista para cada cliente com nome da empresa e CNPJ
            <li key={client.id} className="list-group-item">
              <p>
                <strong>Nome da Empresa:</strong> {client.nome}
              </p>
              <p>
                <strong>CNPJ:</strong> {client.cnpj}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientMenu;



