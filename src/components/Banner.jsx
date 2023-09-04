import React from "react";
import PropTypes from "prop-types";

/* Данный компонент отвечает за рекламный баннер*/

export default function Banner(props) {
  const { img, href } = props;
  return (
    <React.Fragment>
      <a href={href}>
        <img src={img} alt="Banner" />
      </a>
    </React.Fragment>
  );
}

Banner.propTypes = {
  img: PropTypes.string,
  href: PropTypes.string,
};
