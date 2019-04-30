import React, { Component } from "react";
import {
  Text,
  View,
  Button, 
  Content,
  Tab, Tabs, ScrollableTab, Container,Root
} from "native-base";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";
import Category from "./Category";
import Order from "../Order";
import MenuRow from "./MenuRow";
import StudentDetail from "../StudentDetail";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo";

class MenuPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "المقصف"
  });
  async componentDidMount() {
    await this.props.fetchItems(this.props.student);
    await this.props.fetchCategories();
  }
  render() {
    let { filterItems, loading, categories } = this.props.itemsL;
    if (loading) {
      return <></>;
    } else {
      let MenuRowL;
      let Tap;
      if (filterItems) {
        MenuRowL = filterItems.map(item => (
          <MenuRow menu={item} key={item.id} />
          ))
           Tap = categories.map(category => 
            <Tab heading={category.name} key={`${category.id}`}> 
              <View 
                    style={{
                      alignContent: "flex-start",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      marginTop: 15
                    }}>
                   {filterItems.filter(item => item.category.name === category.name).map(item => (
                      <MenuRow menu={item} key={item.id} />
                    ))}   
              </View>
            </Tab>
          )
      }
      return (
        <Root>
        <LinearGradient
          colors={["#72B7E2", "#AE8BF1", "#3DDDD5"]}
          style={{ width: "100%", height: "100%" }}
        >
          <View>
            <View>
              <View sstyle={{borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da',}}>
                <StudentDetail />
              </View>
              <View style={{borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da',}} >
                <Order />
              </View>
            </View>
            <View style={{height:928}}>
              <Tabs transparent renderTabBar={()=> <ScrollableTab />}>
                <Tab heading={"الكل"}>
                <Content>
                  <View
                    style={{
                      alignContent: "flex-start",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      marginTop: 15
                    }}>
                        {MenuRowL}
                    </View>
                  </Content>
                </Tab>
                {Tap}
              </Tabs>
            </View>
          </View>
        </LinearGradient>
        </Root>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    itemsL: state.itemReducer,
    student: state.studentReducer.student
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems: student => dispatch(actionCreators.fetchItems(student)),
  fetchCategories: () => dispatch(actionCreators.fetchCategories()),
  filterItems: category => dispatch(actionCreators.filterItems(category))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuPage);
