import React, { Component } from "react";
import ApiUrl from "../components/ApiUrl";
import "./styles/Clase.css";
import img_title from "../views/assets/dofus.png";

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
          <div className="class-item__title">
            <img src={img_title} alt="title" />
            <h1>{name}</h1>
          </div>
          <img className="class-item__image" src={femaleImg} alt="class img" />
          <div className="class-item__details">
            <button type="button" className="class-item__button__male"></button>
            <ul>{listRoles}</ul>
            <button
              type="button"
              className="class-item__button__female"
            ></button>
          </div>
        </div>
      );
    }
  }
}
