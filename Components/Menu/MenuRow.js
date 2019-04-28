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
  Col,
  Body
} from "native-base";
import * as Animatable from "react-native-animatable";
import { Image } from "react-native";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import NumericInput from "react-native-numeric-input";

class MenuPage extends Component {
  state = {
    quantity: 0
  };
  render() {
    let orderId;
    if (this.props.orderReducer.loading) {
      return <View />;
    } else {
      orderId = this.props.orderReducer.order.id;
    }
    let { menu } = this.props;
    return (
      <Card
        style={{ width: "25%", flex: 0 }}
        className="animated infinite rubberBand delay-2s"
      >
      <CardItem>
          <Image
            source={{ uri: menu.image }}
            style={{ height: 150, width: null, flex: 1 }}
            resizeMode="contain"
          />
      </CardItem>
      <CardItem>
        <CardItem>
          <Text style={{ fontSize: 20, color: "rgb(105, 2, 2)" }}>
            {menu.price} ر.س
          </Text>
        </CardItem>
        <CardItem style={{marginRight:8,}}>
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "rgb(84, 97, 112)"
            }}
          >
            {menu.name}
          </Text>
        </CardItem>
      </CardItem>
      <View style={{flexDirection: "row",}}>
            <Left>
              <Button transparent>
                <Icon
                  name="add-shopping-cart"
                  type="MaterialIcons"
                  danger
                  style={{
                    color: "rgb(155, 166, 87)",
                    fontSize:30
                  }}
                  onPress={() =>
                    this.props.addToCart(orderId, menu, this.state.quantity)
                  }
                />
              
              </Button>       
            </Left>
            <Body/>
            <Right style={{marginRight:10}}>
            <NumericInput
              initValue={this.state.quantity}
              value={this.state.quantity}
              onChange={value => this.setState({ quantity: value })}
              totalWidth={80}
              totalHeight={40}
              iconSize={20}
              minValue={1}
              maxValue={150}
              step={1}
              rounded
              textColor="rgb(78, 205, 196)"
              iconStyle={{ color: "rgb(196, 77, 88)" }}
              rightButtonBackgroundColor="rgb(242, 242, 242)"
              leftButtonBackgroundColor="rgb(242, 242, 242)"
            />
            </Right>
      </View>
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
