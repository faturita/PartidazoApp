import React from 'react';
import { List } from 'semantic-ui-react'

const ListExampleDivided = () => (
  <List divided relaxed>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Aprendizaje Automático</List.Header>
        <List.Description as='a'>Redes bayesianas, SVM, etc</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Análisis y Tratamiento de Imágenes</List.Header>
        <List.Description as='a'>Esta es la mejor materia para aprender como procsar imagenes bidimensionales</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Sistemas de Inteligencia Artificial</List.Header>
        <List.Description as='a'>Redes Neuronales sin humo</List.Description>
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleDivided