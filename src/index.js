import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css'
//import Badge from './components/Badge';
//import BadgeNew from './pages/BadgeNew'; 
//import Badges from './pages/Badges';
import App from './components/App';

const container = document.getElementById('app');


ReactDOM.render(<App />, container);

//const  element = React.createElement('a', {href:'https://platzi.com'}, 'Ir a platzi');
//const jsx = <h1>Hello, Platzi Badges</h1>;

//const name = 'Jesus';

/*const element = React.createElement(
    'h1',
    {},
    `Hola, soy ${name}`

);*/

//const jsx = <h1>Hola, soy {undefined}</h1> 

//Vamos a escribir siempre jsx
/*const jsx = (
    <div>
        <h1>Hola, soy Pablo</h1>
        <p>Soy desarollador web</p>
    </div>
);

const elemet = React.createElement(
    'div',
    {},
    React.createElement('h1',{}, 'Hola, soy Pablo'),
    React.createElement('p',{}, 'Soy desarollador web y diseñador')
)*/

/*ReactDOM.render(
<Badge 
firstName="Pedro" 
lastName="Ortiz"
avatarUrl= "https:/www.gravatar.com/avatar?d=identicon" 
jobTitle="Fronted developer" 
twitter="dresitos@" 
/>, container);*/


