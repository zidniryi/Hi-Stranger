import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Title } from 'native-base';
import PropTypes from "prop-types";

export default class PeopleList extends Component {
  _keyExtractor = item => item.email;

  _renderItem = ({ item }) => {
    const { name, picture, cell, email } = item;

    return (
      <View>
             <Card>
            <CardItem style={styles.cardContainerStyle}>
              <View style={{flexDirection: 'column'}}>
                  <Text style={styles.cardTextStyle}>
                    {name.first} {name.last}           
                  </Text>
                  <Text style={styles.textCell}>
                  {cell}
                  </Text>
                  <Text style={styles.textCell}>                  
                  {email}
                  </Text>
              </View>
          <Image
            style={styles.faceImageStyle}
            source={{ uri: picture.medium }}
          />
      </CardItem>
      </Card>
      </View>
    );
  };

  render() {
    return (
      <Container>
      <FlatList
        data={this.props.people}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      </Container>
    );
  }
}

PeopleList.propTypes = {
  people: PropTypes.array
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  },
  cardContainerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  faceImageStyle: {
    width: 65,
    height: 65,
    borderRadius: 50
  },
  cardTextStyle: {
    color: "#000000",
    textAlign: "left",
    fontWeight: '600',
    fontSize:16
    
  },
  textCell:{
    fontSize:12,
    color:'grey'
  },
});
