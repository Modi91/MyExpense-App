import React, { Component } from "react";
import { Text, View, Button, Icon, List, Content, Card, CardItem } from "native-base";
import { connect } from "react-redux";
import { Image } from 'react-native';
import * as actionCreators from "../../store/actions";
import Category from "./Category";
import MenuRow from "./MenuRow";
class MenuPage extends Component {
  static navigationOptions = {
    title: "Menu"
  };
  async componentDidMount() {
    await this.props.fetchItems()
    await this.props.fetchCategories()
  }
  render() {
    let { items , loading , categories} = this.props.itemsL
    if (loading){
      return(
        <></>
      )
    }else{
      let MenuRowL = items.items.map(item => <MenuRow menu={item} key={item.id}/>)
      let categoriRow = categories.map(category => <Category category={category} key={category.id}/>)
      return (
        <Content>
          <View>
            <View style={{flex: 1, flexDirection: 'row'}}>
              {categoriRow}
            </View>
            <View style={{alignContent:"flex-start",flexDirection:"row", flexWrap:"wrap", justifyContent:"center"}}>
              {MenuRowL}
            </View>
          </View>
        </Content>
      );
    }
  }
}



const mapStateToProps = state => {
  return {
    itemsL: state.items,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(actionCreators.fetchItems()),
  fetchCategories: () => dispatch(actionCreators.fetchCategories())

});
export default connect(mapStateToProps,mapDispatchToProps)(MenuPage);
