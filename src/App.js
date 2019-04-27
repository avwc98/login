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
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <span><b>VIDEO</b>JUEGOS</span>
                    </div>
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src={logo_user} className="rounded-circle" alt=""/>
                        </div>
                        <div className="pull-left info">
                            <p></p>
                            <a href=""><i className="fa fa-circle text-success"/> Online</a>
                        </div>
                    </div>
                    <div className="header"> OPCIONES</div>
                    <ul className="list-unstyled components" id="">
                        <a href="#" aria-expanded="false" className="dropdown-toggle">
                            <li>COSA1</li>
                        </a>
                        <ul className="list-unstyled collapse">
                            <li>SUBCOSA1<i className="fa fa-circle-o"/></li>
                            <li>SUBCOSA2</li>
                        </ul>
                        <li>COSA2</li>
                        <li>COSA3</li>
                        <li className="close_sesion_mobile">
                            <a className="nav-link" href="">CERRAR SESSION</a>
                        </li>
                    </ul>
                </nav>

                <div id="content" className="p-0">
                    <nav className="navbar navbar-expand-lg navbar-main">
                        <div className="container-fluid">
                            <button type="button" id="sidebarCollapse" className="navbar-btn">
                                <span/>
                                <span/>
                                <span/>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportContent">
                                <ul className="nav navbar-nav ml-auto">
                                    <li className="nav-item close_sesion">
                                        <a className="nav-link" href="">CERRAR SESSION</a>
                                    </li>
                                </ul>
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
                            <h3 className="box-title p-3">Listado de CONTRATOS</h3>
                            <ul className="nav nav-pills ml-auto p-2">
                                <li className="nav-item">
                                    <Button className="btn btn-primary pull-righ"
                                            onClick={this.modalPrueba.bind(this)}>
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
