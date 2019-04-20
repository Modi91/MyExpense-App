import React, { Component } from "react";
import { Text, View, Button, Icon, ListItem, Card, CardItem } from "native-base";
import { Image } from 'react-native';

class MenuPage extends Component {
  render() {
    let { menu } = this.props
    console.log("menu ==> ", menu)
    return (
      <Card style={{width:"20%",flex: 0, }} >
        <CardItem>
          <Image source={{uri: menu.image}} style={{ height: 200, width: null, flex: 1}} resizeMode="contain"/>
        </CardItem>
      </Card>
    );
  }
}

export default MenuPage;



