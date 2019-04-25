import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  Icon,
  List,
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Row,
  Col
} from "native-base";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";
import Category from "./Category";
import Order from "../Order";
import MenuRow from "./MenuRow";
import StudentDetail from "../StudentDetail";
class MenuPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "المقصف"
  });

  // state = {
  //   allowedItems: []
  // };
  async componentDidMount() {
    await this.props.fetchItems(this.props.student);
    await this.props.fetchCategories();
    // await this.ItemsAllowed();
  }
  // ItemsAllowed = () => {
  //   student = this.props.student;
  //   xItems = student.not_allowed;
  //   IdXitems = xItems.map(item => item.id);
  //   console.log("xItems ==> ", xItems);

  //   let filterItems = this.props.itemsL.filterItems;
  //   let allowedItemList = filterItems.filter(
  //     item => !IdXitems.includes(item.id)
  //   );

  //   console.log("allowedItemList ==> ", allowedItemList);
  //   this.setState({ allowedItems: allowedItemList });
  // };

  render() {
    let { filterItems, loading, categories } = this.props.itemsL;
    if (loading) {
      return <></>;
    } else {
      let MenuRowL;
      if (filterItems) {
        console.log("Treger");
        MenuRowL = filterItems.map(item => (
          <MenuRow menu={item} key={item.id} />
        ));
      }

      let categoriRow = categories.map(category => (
        <Category category={category} key={category.id} />
      ));
      return (
        <Content>
          <Row>
            <Col>
              <StudentDetail />
            </Col>
            <Col>
              <Order />
            </Col>
          </Row>

          <View
            style={{
              alignContent: "flex-start",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 20
            }}
          >
            {categoriRow}
            <View style={{ marginHorizontal: 2, marginVertical: 2 }}>
              <Button transparent onPress={() => this.props.filterItems("All")}>
                <Text style={{ fontSize: 10, color: "rgb(196, 77, 88)" }}>
                  الكل
                </Text>
              </Button>
            </View>
          </View>

          <View
            style={{
              alignContent: "flex-start",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: 15
            }}
          >
            {MenuRowL}
          </View>
        </Content>
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
