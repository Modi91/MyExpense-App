import React, { Component } from "react";
import { ListItem, List, Text, Button, Icon, View, Badge } from "native-base";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
class ItemRow extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row" }}>
        <Badge success style={{ marginTop: 10 }}>
          <Text>{this.props.item.quantity}</Text>
        </Badge>
        <Text style={{ textAlign: "right", marginTop: 10 }}>
          {` ${this.props.item.item.name} `}
        </Text>
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
      </View>
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
