import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Icon,
  ListItem,
  Card,
  CardItem,
  Left,
  Right
} from "native-base";
import { Image } from "react-native";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class MenuPage extends Component {
  state = {
    quantity: 1
  };

  handleAddClick = () => {
    this.props.addToCart(
      this.props.orderId,
      this.props.menu.name,
      this.state.quantity
    );
  };

  render() {
    let { menu } = this.props;
    console.log("TCL: MenuPage -> render -> menu", menu);
    const order = this.props.order;
    console.log("TCL: MenuPage -> render -> order", order);

    return (
      <Card style={{ width: "25%", flex: 0 }}>
        <CardItem>
          <Image
            source={{ uri: menu.image }}
            style={{ height: 200, width: null, flex: 1 }}
            resizeMode="contain"
          />
        </CardItem>
        <CardItem>
          <Left>
            <Text style={{ fontSize: 20, color: "rgb(105, 2, 2)" }}>
              {menu.price}
            </Text>
          </Left>
          <Text style={{ fontSize: 15, textAlign: "center" }}>{menu.name}</Text>
          <Right>
            <Icon
              name="pluscircle"
              type="AntDesign"
              danger
              style={{ color: "rgb(155, 166, 87)", fontSize: 25 }}
              onPress={this.handleAddClick}
            />
          </Right>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  order: state.order,
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  addToCart: (orderId, itemObj, quantity) =>
    dispatch(actionCreators.addToCart(orderId, itemObj, quantity))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuPage);
