import React, { Component } from "react";
import PropTypes from "prop-types";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Puff } from "react-loader-spinner";
import HeroDataView from "../HeroDataView/HeroDataView";
import fetchPokemon from "../../services/pokemon-api";
import s from "./HeroInfo.module.css";
console.log(fetchPokemon);
// 'idle'
// 'pending'
// 'resolved'
// 'rejected'

class HeroInfo extends Component {
  state = {
    hero: [],
    icon: "",
    error: null,
    status: "idle",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.heroName;
    const nextName = this.props.heroName;

    if (prevName !== nextName) {
      this.setState({
        status: "pending",
      });
      // fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
      //   .then(res => {
      //     if (res.ok) {
      //       return res.json()
      //     }
      //     return Promise.reject(new Error(`Все пропало покемона с именем ${nextName} нет`))
      //   })
      fetchPokemon(nextName)
        .then((hero) =>
          this.setState({
            icon: hero.sprites.other["official-artwork"],
            hero,
            status: "resolved",
          })
        )
        .catch((error) =>
          this.setState({
            error,
            status: "rejected",
          })
        );
    }
  }

  render() {
    const { hero, icon, error, status } = this.state;

    if (status === "idle") {
      return <div className={s.wrap}> Введите имя покемона</div>;
    }
    if (status === "pending") {
      return (
        <div className={s.wrap}>
          <Puff color="#da370e" height={80} width={80} ariaLabel="loading" />
        </div>
      );
    }
    if (status === "resolved") {
      return (
        <div className={s.wrap}>
          <HeroDataView
            name={hero.name}
            icon={icon.front_default}
            stats={hero.stats}
          />
        </div>
      );
    }
    if (status === "rejected") {
      return (
        <div className={s.wrap}>
          <h2>{error.message}</h2>
        </div>
      );
    }

    // return (
    //   <div>
    //     {error && <h2>{error.message}</h2>}
    //     {hero && <><h2>{hero.name}</h2>
    //     <img src={icon.front_default} alt={hero.name} width="200px" /></>}
    //     {/* <p>{ }</p> */}

    //   </div>
    // )
  }
}

HeroInfo.propTypes = {};

export default HeroInfo;
