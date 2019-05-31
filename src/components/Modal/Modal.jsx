import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.css'

export default ({ status, acaoSucesso, acaoErro, txtSucesso, txtErro }) =>
    <div className="background f-c-c"
        style={{
            display: status === null ? 'none' : 'flex'
        }}>
        <div className="modal-card">
            <div className="m-c-header f-c-c">
                <FontAwesomeIcon
                    icon={status === 'sucesso' ? "check" : "exclamation-circle"}
                    style={{
                        fontSize: 36,
                        color: status === 'sucesso' ?
                            '#4CAF50' : '#EF5350'
                    }}
                />
            </div>
            <div className="m-c-body f-c-c">
                <h1>{status === 'sucesso' ? 'Sucesso!' : 'Ops!'}</h1>
                <h3>{status === 'sucesso' ? txtSucesso : txtErro}</h3>
                {status === 'sucesso' ?
                        <button
                        onClick={acaoSucesso}
                            className="m-c-button f-c-c"
                            style={{ backgroundColor: '#4CAF50' }}>
                            <p>Ok</p>
                        </button>
                    :
                    <button
                        onClick={acaoErro}
                        className="m-c-button f-c-c"
                        style={{ backgroundColor: '#EF5350' }}
                    >
                        <p>TENTAR NOVAMENTE</p>
                    </button>
                }
            </div>
        </div>
    </div>