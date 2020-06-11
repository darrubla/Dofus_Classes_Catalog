import React, { Component } from "react";
import ApiUrl from "../components/ApiUrl";
import "./styles/Clase.css";

export default class Clase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    const children = this.props.children;
    fetch(ApiUrl(children))
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded } = this.state;
    const { name, femaleImg, roles } = this.state.data;
    if (error) {
      console.log(error.message);
      return <h1>Oops, data no disponible</h1>;
    } else if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      const listRoles = roles.map((rol) => <li key={rol}>{rol}</li>);
      console.log(this.state.data);
      return (
        <div className="class-item">
          <h1 className="class-item__title">{name}</h1>
          <img
            className="class-item__image"
            src={femaleImg}
            alt="class image"
          />
          <ul className="class-item__details">{listRoles}</ul>
        </div>
      );
    }
  }
}
