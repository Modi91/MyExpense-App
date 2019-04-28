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
  CardItem,
  Left,
  Right
} from "native-base";
import ItemRow from "./ItemRow";
import { withNavigation } from "react-navigation";
import {Image} from "react-native"
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
      <View style={{}}>
        <View style={{flexDirection: "row",flexWrap: "wrap"}}>
          <Left>
            <Text style={{ textAlign: "right", marginLeft: "5%", marginTop:"3%",fontSize:25}}>
                {this.props.order.total}
            </Text>
          </Left>
          <Right>
              <Text style={{marginRight: "5%", textAlign: "right", marginTop:"3%",fontSize:25}}>الفاتورة</Text>
          </Right>
        </View>
          <View>
            {itemRow.length ?
              <Content>
                <View style={{flex: 1,
                  justifyContent: 'center', // Used to set Text Component Vertically Center
                  alignItems: 'center',
                  height:150
                  }}>
                    <List>
                      {itemRow} 
                    </List>
                </View>
              </Content>
              :
              <View style={{justifyContent: "center",alignContent: "flex-start",flexDirection: "row",flexWrap: "wrap",}}>
                <Image source={require("../../assets/emptycart.png")} 
                    style={{width:90, height:90}}/>
              </View> 
            }
          </View>
        <View style={{justifyContent: "center",alignContent: "flex-start",flexDirection: "row",flexWrap: "wrap",}}>
          {this.props.order.total === "0.00" ? <Text style={{fontSize:25, marginLeft:8, marginTop:8, marginBottom:8}}>قم بالشراء</Text> 
              : this.props.student.limit >= this.props.order.total ? (
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
        </View>

      </View>
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
