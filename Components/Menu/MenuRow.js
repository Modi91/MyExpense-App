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
  Right,
  Row,
  Footer,
  Col
} from "native-base";
import { Image } from "react-native";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import NumericInput from "react-native-numeric-input";

class MenuPage extends Component {
  state = {
    quantity: 0
  };

  handleAddClick = () => {
    this.setState({ quantity: this.state.quantity++ });
  };
  // handleMinusClick = () => {
  //   this.setState({ quantity: this.state.quantity-- });
  // };

  render() {
    let orderId;
    if (this.props.orderReducer.loading) {
      return <View />;
    } else {
      orderId = this.props.orderReducer.order.id;
      console.log("TCL: MenuPage -> render -> orderId", orderId);
    }
    let { menu } = this.props;
    console.log("TCL: MenuPage -> render -> menu", menu);

    return (
      <Card style={{ width: "25%", flex: 0 }}>
        <CardItem>
          <Image
            source={{ uri: menu.image }}
            style={{ height: 150, width: null, flex: 1 }}
            resizeMode="contain"
          />
        </CardItem>
        <CardItem>
          <CardItem>
            <Text style={{ fontSize: 10, color: "rgb(105, 2, 2)" }}>
              {menu.price} ر.س
            </Text>
          </CardItem>
          <CardItem>
            <Text
              style={{
                fontSize: 13,
                textAlign: "center",
                color: "rgb(84, 97, 112)"
              }}
            >
              {menu.name}
            </Text>
          </CardItem>

          {/* <Row>
              <NumericInput
                initValue={this.state.quantity}
                value={this.state.quantity}
                onChange={value => this.setState({ quantity: value })}
                totalWidth={70}
                totalHeight={30}
                iconSize={20}
                minValue={0}
                maxValue={150}
                step={1}
                rounded
                textColor="rgb(78, 205, 196)"
                iconStyle={{ color: "rgb(196, 77, 88)" }}
                rightButtonBackgroundColor="rgb(242, 242, 242)"
                leftButtonBackgroundColor="rgb(242, 242, 242)"
              />
            </Row> */}

          <Button transparent>
            <Icon
              name="pluscircleo"
              type="AntDesign"
              style={{ color: "rgb(155, 166, 87)", fontSize: 20 }}
              onPress={() => this.handleAddClick}
            />
          </Button>

          {/* <Button transparent>
            <Icon
              name="minuscircleo"
              type="AntDesign"
              style={{ color: "rgb(155, 166, 87)", fontSize: 20 }}
              onPress={() => this.handleMinusClick}
            />
          </Button> */}
        </CardItem>
        <CardItem>
          <Button transparent>
            <Icon
              name="add-shopping-cart"
              type="MaterialIcons"
              danger
              style={{
                color: "rgb(155, 166, 87)"
              }}
              onPress={() =>
                this.props.addToCart(orderId, menu, this.state.quantity)
              }
            />
          </Button>
        </CardItem>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart,
  orderReducer: state.orderReducer,
  student: state.studentReducer.student
});

const mapDispatchToProps = dispatch => ({
  addToCart: (orderId, itemObj, quantity) =>
    dispatch(actionCreators.addToCart(orderId, itemObj, quantity))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuPage);
