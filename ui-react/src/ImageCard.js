
import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


class ImageCard extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Card>
        <Image src={this.props.url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.header}</Card.Header>
          <Card.Meta>{this.props.meta}</Card.Meta>
          <Card.Description>
              {this.props.description}
         </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            10 Friends
          </a>
        </Card.Content>
      </Card>
      )
    }
  }


export default ImageCard;
