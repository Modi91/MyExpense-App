import React, { Component } from "react";
import { Text, View, Button, Icon, List, Content, Card, CardItem } from "native-base";
import { connect } from "react-redux";
import { Image } from 'react-native';
import * as actionCreators from "../../store/actions";
import Category from "./Category";
import MenuRow from "./MenuRow";
class MenuPage extends Component {
  static navigationOptions = {
    title: "المقصف"
  };
  async componentDidMount() {
    await this.props.fetchItems()
    await this.props.fetchCategories()
  }
  render() {
    let { filterItems , loading , categories} = this.props.itemsL
    if (loading){
      return(
        <></>
      )
    }else{
      let MenuRowL = filterItems.map(item => <MenuRow menu={item} key={item.id}/>)
      let categoriRow = categories.map(category => <Category category={category} key={category.id}/>)
      return (
        <Content>
          <View>
            <View style={{alignContent:"flex-start",flexDirection:"row", flexWrap:"wrap", justifyContent:"center", marginTop:20}}>
              {categoriRow}
              <View style={{marginHorizontal:2, marginVertical:2}}>
                <Button onPress={() => this.props.filterItems("All")}>
                    <Text style={{fontSize:25}}>
                        الكل
                    </Text>
                </Button>
              </View>
            </View>
            <View style={{alignContent:"flex-start",flexDirection:"row", flexWrap:"wrap", justifyContent:"center", marginTop:15}}>
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
  fetchCategories: () => dispatch(actionCreators.fetchCategories()),
  filterItems: (category) =>
    dispatch(actionCreators.filterItems(category)),

});
export default connect(mapStateToProps,mapDispatchToProps)(MenuPage);
