import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Modal.css'

export default ({ modalIcon, modalColor, modalFuncao, modalText, btnText, cancel }) =>
    <div className="background f-c-c"
        style={{ display: 'flex' }}>

        <div className="modal-card">
            <div className="m-c-header f-c-c">
                <FontAwesomeIcon
                    icon={modalIcon}
                    style={{ fontSize: 36, color: modalColor }}
                />
            </div>
            <div className="m-c-body f-c-c">
                <h1>Atenção!</h1>
                <h3>{modalText}</h3>


                <button
                    onClick={cancel}
                    className="m-c-button f-c-c cancel"
                    style={{ background: 'transparent' }}
                >
                    <p>Cancelar</p>
                </button>

                <button
                    onClick={modalFuncao}
                    className="m-c-button f-c-c"
                    style={{ backgroundColor: modalColor }}
                >
                    <p>Excluir</p>
                </button>
                {/* <button></button> */}
            </div>
        </div>
    </div>
