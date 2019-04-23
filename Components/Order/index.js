import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import {
  Container,
  Header,
  Content,
  List,
  FooterTab,
  Footer,
  ListItem,
  Text,
  View,
  Body,
  Button,
  Card,
  Icon,
  Row
} from "native-base";
import ItemRow from "./ItemRow";

class index extends Component {
  componentDidMount() {
    this.props.retrieveOrder(this.props.order.id);
  }
  render() {
    const orderId = this.props.order.id;
    console.log("order index -> render -> orderId", orderId);
    let itemRow = [];
    if (this.props.order.cart_items !== undefined) {
      itemRow = this.props.order.cart_items.map(item => (
        <ItemRow key={item.id} item={item} />
      ));
    }
    return (
      <Card>
        <Text>الفاتورة</Text>
        <View>{itemRow}</View>
        <Button transparent>
          <Icon
            name="checkcircle"
            type="AntDesign"
            style={{ color: "blue" }}
            onPress={() => this.props.retrieveOrder(orderId)}
          />
        </Button>
        <Button transparent>
          <Icon
            name="checkcircle"
            type="AntDesign"
            style={{ color: "rgb(78, 205, 196)" }}
          />
        </Button>
        <Footer>
          <FooterTab>
            <Text>المجموع:</Text>
          </FooterTab>
        </Footer>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.orderReducer.loading,
    order: state.orderReducer.order,
    cart: state.orderReducer.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    retrieveOrder: orderId => dispatch(actionCreators.retrieveOrder(orderId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
