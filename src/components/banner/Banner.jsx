import React from "react";
import { BANNER_DATA, productItem } from "../static/Static";
import "./banner.scss";

const Banner = ({
  id,
  title,
  bg,
  items,
  img,
  price,
  color,
  text,
  btnColor,
}) => {
  return (
    <section className="products container">
      {BANNER_DATA.map((banner) => {
        return (
          <div
            className="product"
            key={banner.id}
            style={{
              background: `url(${banner.img} ) no-repeat center/cover `,
              color: banner.color,
            }}
          >
            <h2 className="product__title">{banner.title}</h2>
            <ul className="product__list">
              {banner.items.map((item, indx) => {
                return (
                  <li className="product__item" key={indx}>
                    <a href="">{item}</a>
                  </li>
                );
              })}
            </ul>

            <h3 className="product__info">{banner.price}</h3>
            <p className="product__desc">{banner.text}</p>
            <button
              className="product__btn"
              style={{ background: banner.color, color: banner.btnColor }}
            >
              Buy now
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Banner;
