import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./HeroForm.module.css";

class HeroForm extends Component {
  state = {
    heroName: "",
  };
  handlerChange = (e) => {
    const { value } = e.target;
    this.setState({ heroName: value });
  };
  handlerSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { heroName } = this.state;
    if (heroName.trim() === "") {
      return false;
    }
    onSubmit(heroName);

    this.reset();
  };

  reset = () => this.setState({ heroName: "" });

  render() {
    const { heroName } = this.state;
    return (
      <form className={s.form} onSubmit={this.handlerSubmit}>
        <input
          className={s.input}
          type="text"
          value={heroName}
          onChange={this.handlerChange}
          placeholder="Введите имя покемона ..."
        />
        <button className={s.btn} type="submit">
          Поиск
        </button>
      </form>
    );
  }
}

HeroForm.propTypes = {};

export default HeroForm;
