import React, { Component } from "react";
import { Text, View, Button, Icon, ListItem } from "native-base";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

class MenuPage extends Component {
  render() {
    let { category } = this.props;
    console.log("TCL: MenuPage -> render -> category", category);
    return (
      <View style={{ marginHorizontal: 2, marginVertical: 2 }}>
        <Button onPress={() => this.props.filterItems(category.name)}>
          <Text style={{ fontSize: 25 }}>{category.name}</Text>
        </Button>
      </View>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  filterItems: category => dispatch(actionCreators.filterItems(category))
});

export default connect(
  null,
  mapDispatchToProps
)(MenuPage);

// menu ==>  Object {
//   "category": Object {
//     "id": 1,
//     "name": "Drink",
//   },
//   "description": "good",
//   "id": 19,
//   "image": "http://127.0.0.1:8000/media/item_image/IMG_0584_Vik5z5U.jpg",
//   "name": "Khalee",
//   "price": "5.00",
//   "school": 2,
//   "stock": 998,
// }
