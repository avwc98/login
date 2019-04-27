import React, {Component} from 'react';
import '../src/assets/css/form-validation.css';
import {
    Button,
    Row,
    Modal,
    ModalHeader,
    ModalBody,
    Input,
    FormGroup,
    InputGroupText,
    InputGroupAddon,
    InputGroup,
    Col,
    Label, FormFeedback
} from 'reactstrap';
import './index.css';
import "react-table/react-table.css";
import ReactTable from "react-table";
import swal from 'sweetalert'
import './App.css';

// ARREGLO PARA LA DATA DE ALGUNOS COMBOBOX
const options = [
    {value: 'valor a retornar', label: 'text que se ve'}
];

class index extends Component {


    componentDidMount() {
        swal('Se cargo correctamente la página', 'success');
        console.log("Funcion que inicia todos los datos desde que carga una página");
    }

    handleRegister() {
        console.log("Funciona para registrar data");
    }

    handleUpdate() {
        console.log("Funcion para actualizar data");
    }

    OpenModal() {
        this.setState({modalPrueba: !this.state.modalPrueba});
    };

    render() {
        return (
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <span><b>VIDEO</b>JUEGOS</span>
                    </div>
                    <div className="user-panel">
                        <div className="pull-left image">
                        <img src="" className="rounded-circle" />
                        </div>
                    </div>
                    <div className="header"> </div>
                </nav>
                <div className="box box-primary">
                    <div className="box-header with-border d-flex p-0">
                        <h3 className="box-title p-3">Listado de CONTRATOS</h3>
                        <ul className="nav nav-pills ml-auto p-2">
                            <li className="nav-item">
                                <Button className="btn btn-primary pull-righ">
                                    <i className="fa fa-plus"/> Registrar</Button>

                            </li>
                        </ul>
                    </div>

                    <div className="box-body">

                        <ReactTable
                            //data={}
                            noDataText="Oh, no hay data"
                            filterable
                            columns={
                                [
                                    {
                                        Header: "PRUEBA",
                                        columns: [
                                            {
                                                Header: 'ATRIBUTO 1',
                                                id: "attribute01"
                                            },
                                            {
                                                Header: 'ATRIBUTO 2',
                                                id: "attribute02"
                                            },
                                            {
                                                Header: 'ATRIBUTO 3',
                                                id: "attribute03"
                                            },
                                            {
                                                Header: 'ATRIBUTO 4',
                                                id: "attribute04"
                                            },
                                            {
                                                Header: 'ATRIBUTO 5',
                                                id: "attribute05"
                                            }

                                        ],
                                    },
                                ]
                            }/>
                    </div>
                </div>
            </div>
        )
    };
}

export default index;
