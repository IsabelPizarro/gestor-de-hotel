import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contactos: state.contactos.filter(c => c.id !== action.payload)
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contactos: [action.payload, ...state.contactos]
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        contactos: state.contactos.map(
          c => (c.id === action.payload.id ? (c = action.payload) : c)
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contactos: [],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  async componentDidMount() {
    let res = await axios.get("http://my-json-server.typicode.com/IsabelPizarro/jsonmockHotels/db");
    this.setState({ contactos: res.data });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
