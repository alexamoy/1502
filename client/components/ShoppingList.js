import React from 'react';
import { ListGroup, Form } from 'react-bootstrap';

export default class ShoppingList extends React.Component {
  constructor(){
    super();
    this.state = {
      list: [
        {name: 'Item 1'},
        {name: 'Item 2'},
        {name: 'Item 3'}
      ]
    };
  }

  render() {
    return (
      <div id="shopping-list-container" className="vw-100">
        <ListGroup className="w-75">
          {
            this.state.list.map((item, key) => {
              return (
                <ListGroup.Item key={key}>
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
