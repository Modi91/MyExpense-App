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
  Row,
  CardItem
} from "native-base";
import ItemRow from "./ItemRow";
import { withNavigation } from "react-navigation";

class index extends Component {
  //   componentDidMount() {
  //     this.props.retrieveOrder(this.props.order.id);
  //   }
  render() {
    const orderId = this.props.order.id;

    console.log("order index -> render -> orderId", orderId);
    let itemRow = [];
    if (this.props.order.cart_items !== undefined) {
      itemRow = this.props.order.cart_items.map(item => (
        <ItemRow key={item.id} item={item} orderId={orderId} />
      ));
    }
    return (
      <Card>
        <Text style={{ textAlign: "right", marginRight: "2%" }}>الفاتورة</Text>
        <Row>
          <View>{itemRow}</View>
        </Row>

        <Text style={{ textAlign: "right", marginRight: "2%" }}>
          المجموع: {this.props.order.total}
        </Text>

        <CardItem>
          {this.props.student.limit >= this.props.order.total ? (
            <Button transparent>
              <Icon
                name="check"
                type="Entypo"
                style={{ color: "rgb(155, 166, 87)" }}
                onPress={() =>
                  this.props.checkout(orderId, this.props.navigation)
                }
              />
            </Button>
          ) : (
            <Button transparent>
              <Icon
                name="x"
                type="Feather"
                style={{ color: "rgb(163, 0, 0)" }}
                disabled={true}
              />
            </Button>
          )}
        </CardItem>

        {/* <Button transparent>
          <Icon
            name="check"
            type="Entypo"
            style={{ color: "rgb(155, 166, 87)" }}
            onPress={() => this.props.checkout(orderId, this.props.navigation)}
          />
        </Button> */}
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.orderReducer.loading,
    order: state.orderReducer.order,
    cart: state.orderReducer.cart,
    student: state.studentReducer.student
  };
};
const mapDispatchToProps = dispatch => {
  return {
    retrieveOrder: orderId => dispatch(actionCreators.retrieveOrder(orderId)),
    checkout: (orderId, navigation) =>
      dispatch(actionCreators.checkout(orderId, navigation))
  };
};

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(index)
);
