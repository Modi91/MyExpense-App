import React, { Component } from "react";
import { ListItem, List, Text, Button, Icon } from "native-base";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
class ItemRow extends Component {
  render() {
    return (
      <List>
        <ListItem>
          <Text style={{ textAlign: "right" }}>
            {this.props.item.item.name}
          </Text>
          <ListItem>
            <Text style={{ textAlign: "right" }}>
              {this.props.item.quantity} الكمية:{" "}
            </Text>
          </ListItem>
          <Button transparent>
            <Icon
              name="x"
              type="Feather"
              style={{ color: "red" }}
              onPress={() =>
                this.props.removeItemFromCart(
                  this.props.item.id,
                  this.props.orderId
                )
              }
            />
          </Button>
        </ListItem>
      </List>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  removeItemFromCart: (itemId, orderId) =>
    dispatch(actionCreators.removeItemFromCart(itemId, orderId))
});
export default connect(
  null,
  mapDispatchToProps
)(ItemRow);
