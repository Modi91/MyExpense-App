import React, { Component , Fragment} from "react";
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
  Right,
  Badge,
  Toast,
  Root
} from "native-base";
import ItemRow from "./ItemRow";
import { withNavigation } from "react-navigation";
import {Image} from "react-native"
import Overlay from "react-native-modal-overlay";

class index extends Component {
  state = {
    modalVisible: false,
  }

  onClose = () => this.setState({ modalVisible: false });
  render() {
    const orderId = this.props.order.id;
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
          <Body>
            <View>
              {itemRow.length ? 
                  itemRow.length > 3 ?
                  <View style={{alignContent:"flex-start",flexDirection:"row", flexWrap: "wrap", justifyContent: "center",}}>
                      {itemRow[0]}
                      {itemRow[1]}
                      {itemRow[2]}
                      <Text style={{fontSize:30}} onPress={() => this.setState({ modalVisible: true })}> OOO </Text> 
                  </View> 
                  :        
                  <View style={{alignContent:"flex-start",flexDirection:"row", flexWrap: "wrap", justifyContent: "center",}}>
                      {itemRow} 
                  </View>
                :
                <View style={{justifyContent: "center",alignContent: "flex-start",flexDirection: "row",flexWrap: "wrap", marginTop:8}}>
                  <Image source={require("../../assets/emptycart.png")} 
                      style={{width:90, height:90}}/>
                </View> 
              }
            </View>
          </Body>
          <Right>
              <Text style={{marginRight: "5%", textAlign: "right", marginTop:"3%",fontSize:25}}>الفاتورة</Text>
          </Right>
        </View>
        <View style={{justifyContent: "center",alignContent: "flex-start",flexDirection: "row",flexWrap: "wrap", marginTop:10, marginBottom:50}}>
          {this.props.order.total === "0.00" ? <Text style={{fontSize:30, marginLeft:8, marginTop:8, marginBottom:8}}>قم بالشراء</Text> 
              : this.props.student.limit >= this.props.order.total ? (
              
                <Icon
                  name="check"
                  type="Entypo"
                  style={{ color: "green",}}
                  onPress={() =>
                    this.props.checkout(orderId, this.props.navigation)
                  }
                />
              
            ) : (
              
                <Icon
                  name="x"
                  type="Feather"
                  style={{ color: "rgb(163, 0, 0)",
                  }}
                  
                />
              
            )}
        </View>
        <Overlay
              visible={this.state.modalVisible}
              onClose={this.onClose}
              closeOnTouchOutside
              animationType="zoomIn"
              containerStyle={{ backgroundColor: "rgba(114, 183, 226,0.78)" }}
              childrenWrapperStyle={{ backgroundColor: "#eee" }}
              animationDuration={500}
            >
              {(hideModal, overlayState) => (
                <Fragment>
                    <View style={{alignContent:"flex-start",flexDirection:"row", flexWrap: "wrap", justifyContent: "center",}}>
                      {itemRow}
                    </View>
                    <View style={{justifyContent: "center",alignContent: "flex-start",flexDirection: "row",flexWrap: "wrap",}}>
                    {
                      this.props.student.limit >= this.props.order.total ? (
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
                      )
                    }
                    </View>
                </Fragment>
              )}
            </Overlay>
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
