import React, { Component } from "react";
import { Text, View, Button, Icon, ListItem, Card, CardItem, Left, Right } from "native-base";
import { Image } from 'react-native';

class MenuPage extends Component {
  render() {
    let { menu } = this.props
    console.log("menu ==> ", menu)
    return (
      <Card style={{width:"25%",flex: 0, }} >
        <CardItem>
          <Image source={{uri: menu.image}} style={{ height: 200, width: null, flex: 1}} resizeMode="contain"/>
        </CardItem>
        <CardItem>
          <Left>
            <Text style={{fontSize:25}}>{menu.price}</Text>
          </Left>
            <Text style={{fontSize:25}}>{menu.name}</Text>
        </CardItem>
      </Card>
    );
  }
}

export default MenuPage;



