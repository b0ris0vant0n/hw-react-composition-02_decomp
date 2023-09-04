import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";


/* отвечает за отображение заголовков виджетов */

export default function WidgetHref(props) {
  const { items } = props;

  return (
    <React.Fragment>
      <h2>
        {items.map((item) => (
          <a key={shortid.generate()} href={item.href}>
            {item.text}
          </a>
        ))}
      </h2>
      {props.children}
    </React.Fragment>
  );
}

WidgetHref.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.array,
};
