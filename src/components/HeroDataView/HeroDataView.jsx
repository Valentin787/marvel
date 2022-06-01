import React from "react";
import PropTypes from "prop-types";
import s from "./HeroDataView.module.css";

const HeroDataView = ({ name, icon, stats }) => {
  return (
    <div className={s.container}>
      <h2 className={s.name}>{name.toUpperCase()}</h2>
      <img src={icon} alt={name} width="240px" />
      <ul>
        {stats.map((entry) => {
          return (
            <li key={entry.stat.name} className={s.item}>
              {entry.stat.name} : {entry.base_stat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

HeroDataView.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
};

export default HeroDataView;
