import React, { Component } from "react";
import { Text, View, Button, Icon, ListItem } from "native-base";


class MenuPage extends Component {
  render() {
    let { category } = this.props
    console.log("menu ==> ", category)
    return (
        <View style={{marginHorizontal:2, marginVertical:2}}>
            <Button>
                <Text>
                    {category.name}
                </Text>
            </Button>
        </View>
    );
  }
}

export default MenuPage;

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

