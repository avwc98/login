import React, {Component} from 'react';
import '../src/assets/css/form-validation.css';
import '../src/assets/dist/css/bootstrap.min.css';
import '../src/assets/font-awesome/css/font-awesome.min.css';
import '../src/assets/css/dataTables.bootstrap4.min.css'
import '../src/index.css';
import Select from 'react-select';

import logo_user from '../src/img/user-icon.jpg';
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
import ModalFooter from "reactstrap/es/ModalFooter";
import Table from "reactstrap/es/Table";

// ARREGLO PARA LA DATA DE ALGUNOS COMBOBOX
const arr_prueba = [
    {value: '0', label: 'texto1'},
    {value: '1', label: 'texto2'},
    {value: '2', label: 'texto3'}
];

class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            subTitle: "",
            str_prueba: ""
        }
    }

    componentDidMount() {
        swal("Aviso", 'Se cargo correctamente la página', 'success');
        console.log("Funcion que inicia todos los datos desde que carga una página");
    }

    handleRegister() {
        console.log("Funciona para registrar data");
    }

    handleUpdate() {
        console.log("Funcion para actualizar data");
    }

    handleInputSelect = (name, newValue) => {
        this.setState({[name]: (newValue ? newValue.value : '')});
    };

    OpenModal() {
        this.setState({modalPrueba: !this.state.modalPrueba});
    };

    modalPrueba() {
        this.setState({modalPrueba: !this.state.modalPrueba})
    };

    render() {
        const {str_prueba} = this.state;
        return (
            <div className="wrapper">

                <div id="content" className="p-0">
                    <nav className="navbar navbar-expand-lg navbar-main">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarSupportContent">
                            </div>
                        </div>

                    </nav>
                    <section className="content-header">
                        <h1>
                            {this.state.title}
                            <small>{this.state.subTitle}</small>
                        </h1>
                    </section>

                    <div className="box box-primary">
                        <div className="box-header with-border d-flex p-0">
                            <h3 className="box-title p-3"><b><em>SHOPPING HISTORY</em></b></h3>
                            <ul className="nav nav-pills ml-auto p-2">

                            </ul>
                        </div>

                        <div className="box-body">
                            <div className="container">
                                <div className="container-fluid">

                                    <div className="container h-100">
                                        <div className="card-wrapper">
                                            <div className="card fat">
                                                <div className="card-body">
                                                    <Table>
                                                        <tbody>
                                                        <tr>
                                                            <th>ID</th>
                                                            <td></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Productos</th>
                                                            <td></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Cantidad</th>
                                                            <td></td>
                                                        </tr>

                                                        <tr>
                                                            <th>Precio</th>
                                                            <td></td>
                                                        </tr>

                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-body">

                                        <ReactTable
                                            //data={}
                                            noDataText="Oh, no hay data"
                                            filterable
                                            columns={
                                                [
                                                    {
                                                        Header: "HISTORY",
                                                        columns: [
                                                            {
                                                                Header: '',
                                                                id: "accion"
                                                            },
                                                            {
                                                                Header: 'ID',
                                                                id: "attribute01"
                                                            },
                                                            {
                                                                Header: 'DESCRIPCION',
                                                                id: "attribute02"
                                                            },
                                                            {
                                                                Header: 'PRICE',
                                                                id: "attribute03"
                                                            },
                                                            {
                                                                Header: 'STOCK',
                                                                id: "attribute01"
                                                            },
                                                            {
                                                                Header: 'STATUS',
                                                                id: "attribute01"
                                                            },

                                                        ],
                                                    },
                                                ]
                                            }/>
                                    </div>
                                    <Modal isOpen={this.state.modalPrueba} toggle={() => this.modalPrueba()}>
                                        <ModalHeader>
                                            <h1>Modal de prueba</h1>
                                        </ModalHeader>

                                        <ModalBody>
                                            <FormGroup>
                                                <Label>Atributo 1</Label>
                                                <Input className="Select-control"/>
                                            </FormGroup>

                                            <FormGroup>
                                                <Label>Atributo 2</Label>
                                                <Select className="Select-control"
                                                        placeholder='Seleccionar valor'
                                                        value={arr_prueba.filter(options => options.value === str_prueba)}
                                                        onChange={this.handleInputSelect.bind(this, 'str_prueba')}
                                                        options={arr_prueba}/>
                                            </FormGroup>
                                        </ModalBody>

                                        <ModalFooter>
                                            <Button color="primary" width={100} height={40}> REGISTRAR </Button>
                                        </ModalFooter>
                                    </Modal>


                                </div>
                            </div>
                        </div>

                        <Modal isOpen={this.state.modalPrueba} toggle={() => this.modalPrueba()}>
                            <ModalHeader>
                                <h1>Modal de prueba</h1>
                            </ModalHeader>

                            <ModalBody>
                                <FormGroup>
                                    <Label>Atributo 1</Label>
                                    <Input className="Select-control"/>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Atributo 2</Label>
                                    <Select className="Select-control"
                                            placeholder='Seleccionar valor'
                                            value={arr_prueba.filter(options => options.value === str_prueba)}
                                            onChange={this.handleInputSelect.bind(this, 'str_prueba')}
                                            options={arr_prueba}/>
                                </FormGroup>
                            </ModalBody>

                            <ModalFooter>
                                <Button color="primary" width={100} height={40}> REGISTRAR </Button>
                            </ModalFooter>
                        </Modal>
                    </div>


                    <section className="content">
                        <footer className="my-5 pt-5 text-muted text-center text-small">
                            <p className="mb-1">&copy; 2019-2020 CIBERTEC - PROY. DSW-II</p>
                        </footer>
                    </section>
                </div>

            </div>
        )
    };
}


export default index;

