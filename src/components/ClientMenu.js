import React from 'react';
import { clients } from '../data/ClientData';
import './ClientMenu.css'; // Importe o arquivo CSS para aplicar os estilos

const ClientMenu = ({ closeClientMenu }) => {
  return (
    <div className="col-md-3 col-sm-12 client-menu-container d-flex flex-column justify-content-start align-items-end">
      <div className="client-menu-header d-flex justify-content-between align-items-center mb-3 w-100">
        <h5>Clientes</h5>
        <button type="button" className="close" aria-label="Fechar" onClick={closeClientMenu}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="client-list w-100">
        <ul className="list-group">
          {clients.map((client) => (
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


