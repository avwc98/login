

import React, {Component} from 'react';
import logo from './img/logo.jpg'
import '../src/assets/css/form-validation.css';
import '../src/assets/dist/css/bootstrap.min.css';
import '../src/assets/font-awesome/css/font-awesome.min.css';
import '../src/assets/css/dataTables.bootstrap4.min.css'
import '../src/index.css';
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
        this.setState({modalPrueba2: !this.state.modalPrueba2});
    };

    modalPrueba() {
        this.setState({modalPrueba: !this.state.modalPrueba})
    };

    modalPrueba2() {
        this.setState({modalPrueba2: !this.state.modalPrueba2})
    };

    render() {
        const {str_prueba} = this.state;
        return (
            <div className="wrapper">

                <div id="content" className="p-0">

                    <Container-fluid className="">
                        <Row>
                            <Col md="12" sm="12">
                                <div className="my-login-page h-100">
                                    <section className="h-100">
                                        <div className="container h-100">
                                            <div className="row justify-content-center align-items-center h-100">
                                                <div className="card-wrapper">
                                                    <center>
                                                        <div className="-center" style={{width: "auto", heigth: "auto", align:"center"} }>
                                                            <img alt="logo" src={logo}/>
                                                        </div>
                                                    </center>
                                                    <br></br><br></br>
                                                    <div className="card fat">
                                                        <div className="card-body">
                                                            <h4 className="card-title">Iniciar sesión</h4>
                                                            <form >
                                                                <div className="form-group">
                                                                    <label>Usuario</label>
                                                                    <input id="email" type="email" className="form-control" style={{ fontSize: 14 }} required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label>Contraseña</label>
                                                                    <input id="password" type="password" className="form-control data-eye" style={{ fontSize: 14 }}
                                                                           name="password" required />
                                                                </div>

                                                                <div className="form-group no-margin">

                                                                    <FormGroup className="cent">
                                                                        <Button>Iniciar sesion</Button>
                                                                    </FormGroup>

                                                                    <FormGroup>
                                                                        <Button className="btn btn-primary pull-righ"
                                                                                onClick={this.modalPrueba.bind(this)}>
                                                                            Registrar</Button>
                                                                    </FormGroup>

                                                                    <FormGroup>
                                                                        <Button className="btn btn-primary pull-righ"
                                                                                onClick={this.modalPrueba2.bind(this)}>
                                                                            Recuperar contraseña</Button>
                                                                    </FormGroup>


                                                                    {/*<button type="submit" className="btn btn-primary btn-block" id="btnIngresar">*/}
                                                                    {/*Login*/}
                                                                    {/*</button>*/}
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                    <div className="footer">
                                                        Copyright &copy; VF CONSULTING S.A.C. 2018
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </Col>
                        </Row>
                    </Container-fluid>

                    <div className="box box-primary">

                        <Modal isOpen={this.state.modalPrueba} toggle={() => this.modalPrueba()}>
                            <ModalHeader>
                                <h1>REGISTRO DE USUARIO</h1>
                            </ModalHeader>

                            <ModalBody>
                                <FormGroup>
                                    <Label>Nombre</Label>
                                    <Input className="Select-control" placeholder="Ingresa tu nombre..."/>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Apellido</Label>
                                    <Input className="Select-control" placeholder="Ingresa tu apellido..."/>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Dni</Label>
                                    <Input className="Select-control" placeholder="Ingresa tu dni..."/>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input className="Select-control" placeholder="Ingresa tu correo..."/>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Teléfono</Label>
                                    <Input className="Select-control" placeholder="Ingresa tu telefono..."/>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Usuario</Label>
                                    <Input className="Select-control" placeholder="Ingresa un nombre de usuario..."/>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Contraseña</Label>
                                    <Input className="Select-control" placeholder="Ingresa una contraseña..."/>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Confirmar contraseña</Label>
                                    <Input className="Select-control" placeholder="Ingresa una nueva contraseña..."/>
                                </FormGroup>
                            </ModalBody>

                            <ModalFooter>
                                <Button color="primary" width={100} height={40}>REGISTRAR</Button>
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.state.modalPrueba2} toggle={() => this.modalPrueba2()}>
                            <ModalHeader>
                                <h1>RECUPERAR CONTRASEÑA</h1>
                            </ModalHeader>

                            <ModalBody>
                                <FormGroup>
                                    <Label>INGRESA TU CORREO</Label>
                                    <Input className="Select-control" placeholder="Ingresa tu correo..."/>
                                </FormGroup>

                            </ModalBody>

                            <ModalFooter>
                                <Button color="primary" width={100} height={40}>RECUPERAR CONTRASEÑA</Button>
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
