import React, { Component } from "react";
import { ListItem, List } from "native-base";
class ItemRow extends Component {
  render() {
    return (
      <List>
        <ListItem>{this.props.item.name}</ListItem>
        <ListItem>{this.props.item.price}</ListItem>
      </List>
    );
  }
}

export default ItemRow;
