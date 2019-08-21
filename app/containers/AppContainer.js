import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator, StatusBar } from "react-native";
import PeopleList from "../components/PeopleList";
import {fecthPeople} from '../redux/actions/peopleActions'
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { Container, Header, Text, Title, Body, Left, Right } from "native-base";
 class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      errorMessage: "",
      isFetching: true
    };
  }

  async fetchRandomPeopleAPI() {
    try {
      let response = await fetch("https://randomuser.me/api/?results=15");
      let json = await response.json();
      this.setState({ people: json.results, isFetching: false });
    } catch (error) {
      this.setState({ errorMessage: error });
    }
  }

  componentDidMount() {
    this.props.fecthPeople()
  }

  render() {
    console.log(this.props.randomPeople.people)
    console.log(this.props.randomPeople.isFetching)
    let content = <PeopleList people={this.props.randomPeople.people} />;
    if (this.props.randomPeople.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return (
    <Container> 
      <Header style={{backgroundColor: '#18dcff'}} androidStatusBarColor="#17c0eb">
        <Left style={{flex:1}}/>
        <Body>
          <Title style={{fontSize:14}}>
            HI STRANGER
          </Title>
          </Body> 
          <Right style={{flex:1}}/>
      </Header>   
      <View style={styles.container}>
        {content}
      </View>
    </Container>
      );
  }
}

/**
 * Create proptypes to sending the function
 */
AppContainer.propTypes = {
  fecthPeople : PropTypes.func.isRequired,
  randomPeople: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  }
});

/**
 * 
 * @param {@global} state 
 */
const mapStateToProps = (state) => {
  return {
    randomPeople: state
  }
}

export default connect(mapStateToProps, {fecthPeople})(AppContainer)