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
import { Image } from "react-native";
import * as actionCreators from "../../store/actions";
import Category from "./Category";
import Order from "../Order";
import MenuRow from "./MenuRow";
import StudentDetail from "../StudentDetail";
import * as Animatable from "react-native-animatable";

class MenuPage extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "المقصف"
  });
  async componentDidMount() {
    await this.props.fetchItems();
    await this.props.fetchCategories();
  }
  render() {
    let { filterItems, loading, categories } = this.props.itemsL;
    if (loading) {
      return <></>;
    } else {
      let MenuRowL = filterItems.map(item => (
        <MenuRow menu={item} key={item.id} />
      ));
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
            <Animatable.View
              animation="rubberBand"
              iterationCount="infinite"
              style={{ marginHorizontal: 2, marginVertical: 2 }}
            >
              <Button transparent onPress={() => this.props.filterItems("All")}>
                <Text
                  style={{
                    fontSize: 10,
                    color: "rgb(196, 77, 88)",
                    fontWeight: "bold"
                  }}
                >
                  الكل
                </Text>
              </Button>
            </Animatable.View>
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
    itemsL: state.items
  };
};

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(actionCreators.fetchItems()),
  fetchCategories: () => dispatch(actionCreators.fetchCategories()),
  filterItems: category => dispatch(actionCreators.filterItems(category))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuPage);
