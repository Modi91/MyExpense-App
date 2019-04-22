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

class index extends Component {
  render() {
    return (
      <Card>
        <Text>الفاتورة</Text>
        <Text>Item List</Text>
        <Row>
          <Icon
            name="closecircle"
            type="AntDesign"
            style={{ color: "rgb(155, 166, 87)", fontSize: 25 }}
          />
          <Icon
            name="minuscircle"
            type="AntDesign"
            style={{ color: "rgb(155, 166, 87)", fontSize: 25 }}
          />
        </Row>
        <Icon
          name="checkcircle"
          type="AntDesign"
          style={{ color: "rgb(155, 166, 87)", fontSize: 25 }}
        />
        <Footer>
          <FooterTab>
            <Text>المجموع:</Text>
          </FooterTab>
        </Footer>
      </Card>
    );
  }
}

export default index;
