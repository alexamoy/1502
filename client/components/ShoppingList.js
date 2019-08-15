import React, { Component } from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';

export default class ShoppingList extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    this.props.loadItems();
  }
  render() {
    const items = this.props.items ? this.props.items : [];
    return (
      <div id="shopping-list-container" className="vw-100">
        <ListGroup className="w-75">
          {
            items.map((item, key) => {
              return (
                <ListGroup.Item key={key} variant="dark">
                  <div className="d-flex flex-row justify-content-between">
                    <span>{item.name}</span>
                    <Form.Check />
                  </div>
                </ListGroup.Item>
              );
            })
          }
        </ListGroup>
      </div>
    );
  }
}
