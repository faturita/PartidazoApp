/**
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CommentBox from './CommentBox';
//import ListExampleDivided from './ListExampleDivided';
import registerServiceWorker from './registerServiceWorker';

import { List } from 'semantic-ui-react'

const ListExampleDivided = () => (
    <List divided relaxed>
      <List.Item>
        <List.Icon name='github' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
          <List.Description as='a'>Updated 10 mins ago</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='github' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
          <List.Description as='a'>Updated 22 mins ago</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name='github' size='large' verticalAlign='middle' />
        <List.Content>
          <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
          <List.Description as='a'>Updated 34 mins ago</List.Description>
        </List.Content>
      </List.Item>
    </List>
  )

ReactDOM.render(ListExampleDivided,document.getElementById('root'));
**/

//const element = <h1>Hello, world</h1>;
//ReactDOM.render(element, document.getElementById('root'));

/* ReactDOM.render(
 <CommentBox
 url='/api/comments'
 pollInterval={2000} />,
 document.getElementById('root')
);*/

//ReactDOM.render(<App />, document.getElementById('root'));

//registerServiceWorker();


import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";

import ListExampleDivided from "./ListExampleDivided";
import ImageCard from "./ImageCard";

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h1">😊 Centro de Inteligencia Computacional 😊</Header>
    <Header as="h2">Proyectos de Investigación</Header>
    <List bulleted>
    <List.Item
        as="a"
        content="🛰 Radares de Apertura Sintética"
        href="PAPER"
        target="_blank"
      />
      <List.Item
        as="a"
        content="🛠 Desarrollo de Robots autónomos"
        href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
        target="_blank"
      />
      <List.Item
        as="a"
        content="💡 Inteligencia Artificial"
        href="https://stackoverflow.com/questions/tagged/semantic-ui-react?sort=frequent"
        target="_blank"
      />
      <List.Item
        as="a"
        content="🧠 Interfaces Cerebro Computadora y Rehabilitación"
        href="https://faturita.github.io/portfolio/"
        target=""
      />
    </List>

    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


ReactDOM.render(
  <App>
    <Header as="h2">Materias</Header>
    <ListExampleDivided />
    <Header as="h2">Quienes somos</Header>
    <table>
        <tr>
            <td>
            <ImageCard 
    url='https://www.itba.edu.ar/wp-content/uploads/docentes/juan-miguel-santos_750x563.jpg'
    header='Juan Miguel Santos, PI' 
    meta='Desde 2009' 
    extra='Robótica, IA'
    description='Desde 2009 me desempeño como Director del Centro de Inteligencia Computacional (CIC) donde llevo adelante 3 líneas de trabajo: Desarrollo de robots, aprendizaje por refuerzo en robótica e Interfaces cerebro-computadora (BCI). En las dos primeras líneas vengo trabajando desde 1993 las cuales me han llevado al desarrollo de diversos robots, presentaciones a congresos nacionales e internacionales como así también en revistas científicas internacionales. Adicionalmente, estoy incorporando una nueva línea que es Autolocalización y mapeo (SLAM) en robots autónomos.' />
     </td>
    <td>
    <ImageCard 
    url='https://www.itba.edu.ar/wp-content/uploads/docentes/maria-juliana-gambini_750x563.jpg' 
    header='Juliana Gambini' 
    meta='Desde 2009' 
    extra='SAR, Computer Vision, Machine Learning'
    description='Recibida de Licenciada en Ciencias Matemáticas y Doctora en Ciencias de la Computación, ambos por la Facultad de Ciencias Exactas y Naturales, Universidad de Buenos Aires (UBA), Argentina.
    Actualmente es Profesora Titular en el Departamento de Ingeniería Informática, Instituto Tecnológico de Buenos Aires (ITBA), Buenos Aires, Argentina e integrante del Centro de Inteligencia Computacional en el mismo departamento.
    Los temas de investigación en los que trabaja incluyen Procesamiento de Imágenes SAR, análisis de video y reconocimiento de objetos en imágenes.' />
       </td>
       </tr>
       <tr>
            <td>
    <ImageCard 
    url='https://www.itba.edu.ar/wp-content/uploads/docentes/rodrigo-ezequiel-ramele_750x563.jpg'
    header='Rodrigo Ramele' 
    meta='Desde 2013' 
    extra='BCI, Robótica Asistiva, IA'
    description='Ingeniero en Informática, con un posgrado en criptografía en el Instituto de Enseñanza Superior del Ejército Argentino y un posgrado en Investigación en Robótica y Bioingeniería en la Universidad de Tohoku, en Sendai, Japón. Rodrigo es Doctor en Ingeniería Informática del ITBA. Cuenta con experiencia en empresas del sector financiero, industria y software. Actualmente trabaja sobre Interfaces Cerebro-Computadora (BCI) y Robótica Asistiva en el Centro de Inteligencia Computacional del Departamento de Informática, en donde se desempeña como Profesor en materias afines.' />
            </td>
            <td> 
    <ImageCard 
    url='/alan.jpeg'
    header='Alan Pierri' 
    meta='Desde 2020' 
    extra='IA, SaaS, Cloud, Consulting'
    description='Recibido como Ingeniero    Informático con orientación en Inteligencia Computacional en el Instituto Tecnológico de Buenos Aires (ITBA). Profesor de Sistemas de Inteligencia Artificial y previamente también Sistemas Multiagentes. Fuerte entusiasta e Investigador en el Centro de Inteligencia Computacional sobre AI, en areas que incluyen Algoritmos Genéticos, Random Forests, Sistemas Multiagentes, Redes Adversariales Generativas y Filtros Colaborativos. Actualmente da clases a tiempo parcial, es consultor y emprende  brindando  servicios  de   plataforma Software As a Service (SaaS).' />
        </td>
        <td> 
    <ImageCard 
    url='/alan.jpeg'
    header='Esteban Buniak' 
    meta='Desde 2015' 
    extra='Instrumentación, Diseño CAD, Torneado, Programación'
    description='Recibido como Ingeniero    Informático con orientación en Inteligencia Computacional en el Instituto Tecnológico de Buenos Aires (ITBA). Profesor de Sistemas de Inteligencia Artificial y previamente también Sistemas Multiagentes. Fuerte entusiasta e Investigador en el Centro de Inteligencia Computacional sobre AI, en areas que incluyen Algoritmos Genéticos, Random Forests, Sistemas Multiagentes, Redes Adversariales Generativas y Filtros Colaborativos. Actualmente da clases a tiempo parcial, es consultor y emprende  brindando  servicios  de   plataforma Software As a Service (SaaS).' />
        </td>
        </tr>
    </table> 
 </App>,
  document.getElementById("root")
);

