import React, { Component } from "react";
import { ListItem, List, Text, Button, Icon, View, Card, Col, Right, Left, Body } from "native-base";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
class ItemRow extends Component {
  render() {
    return (
      <Col style={{width:"100%"}}>
        <Card style={{borderRadius:16}}>
            <View style={{flexDirection: "row"}}>
              <Left>
                <Text style={{ textAlign: "right", marginLeft:10}}>
                  {this.props.item.quantity}
                </Text>
              </Left>
              <Body>
                <Text style={{ textAlign: "right",}}>
                  {` ${this.props.item.item.name} `}
                </Text>
              </Body>
              <Right>
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
              </Right>
            </View>
        </Card>
      </Col>
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
