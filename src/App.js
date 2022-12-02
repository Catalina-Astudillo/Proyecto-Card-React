import React from "react";
import Section from './components/Section';
import './App.css'

const data = [
    {
        id: 1,
        img: './img/cafetera.jpg',
        precio: '141.290',
        cuotas: '6x $23.548 sin interes',
        envio: 'Envio gratis',
        descripcion: 'Cafetera Genio S Plus Black + Cápsulas StarBucks X6 Cajas'
    },
    {
        id: 2,
        img: './img/silla_amarilla.jpg',
        precio: '39.990',
        cuotas: '6x $6.665 sin interes',
        envio: 'Consultar envio',
        descripcion: 'Silla Eames Dsw Réplica Niño Acasa'
    },
    {
        id: 3,
        img: './img/audifonos.jpg',
        precio: '179.000',
        cuotas: '6x $29.833 sin interes',
        envio: 'Envio gratis',
        descripcion: 'Apple AirPods con estuche de carga'
    },
    {
        id: 4,
        img: './img/soldadora.jpg',
        precio: '212.000',
        cuotas: '6x $17.667 sin interes',
        envio: 'Envio gratis',
        descripcion: 'Soldadora Krafter Megatec Mig Arco Tig + 2 Rollos Alambre'
    },
    {
        id: 5,
        img: './img/ipad.jpg',
        precio: ' 899.990',
        cuotas: '6x $149.998 sin interes',
        envio: 'Envio gratis',
        descripcion: 'IPad Pro M2 Sellado 11 Pulgadas'
    },
    {
        id: 6,
        img: './img/figura_goku.jpg',
        precio: '39.990',
        cuotas: '6x $6.665 sin interes',
        envio: 'Envio gratis',
        descripcion: 'Figura Dragon Ball Super Son Goku Ss Blue Original Bandai'
    },
    {
        id: 7,
        img: './img/funck_pop_batman.jpg',
        precio: '20.990',
        cuotas: '6x $3.498 sin interes',
        envio: 'Envio gratis',
        descripcion: 'Funko Pop! Movies The Batman #1187, Batman Original Nuevo'
    },
    {
        id: 8,
        img: './img/encimera.jpg',
        precio: '123.900',
        cuotas: '6x $20.650 sin interes',
        envio: 'Envio gratis',
        descripcion: 'Encimera Fensa Fce 2hf Gl T 2 Platos Gas Licuado'
    },
    {
        id: 9,
        img: './img/cama.jpg',
        precio: '189.191',
        cuotas: '6x $31.532 sin interes',
        envio: 'Consultar envio',
        descripcion: 'Cama 1 1/2 Plaza Apolo Black Celta + Set Castilla'
    },
    {
        id: 10,
        img: './img/cobertor.jpg',
        precio: '23.900',
        cuotas: '12x $1.992 sin intere',
        envio: 'Envio gratis',
        descripcion: 'Cobertor De Verano 2p Quilt De Verano'
    }
]

function App() {
    return (
        <>
            
            <Section data={data}/>
        </>
    );
}

export default App;
