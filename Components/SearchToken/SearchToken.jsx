import React, { useState } from "react";
import Image from "next/image";
import Style from "./SearchToken.module.css";
import images from "../../assets";

const SearchToken = ({ openToken, tokens, tokenData }) => {
  const [active, setActive] = useState(1);
  const coin = [
    {
      img: images.ether,
      name: "ETH",
    },
    {
      img: images.ether,
      name: "DAI",
    },
    {
      img: images.ether,
      name: "DOG",
    },
    {
      img: images.ether,
      name: "FUN",
    },
    {
      img: images.ether,
      name: "UNI",
    },
    {
      img: images.ether,
      name: "TIME",
    },
    {
      img: images.ether,
      name: "BTC",
    },
  ];

  return (
    <div className={Style.SearchToken}>
      <div className={Style.SearchToken_box}>
        <div className={Style.SearchToken_box_heading}>
          <h4>Select a token</h4>
          <Image
            src={images.close}
            width={50}
            height={50}
            onClick={() => openToken(false)}
          />
        </div>

        <div className={Style.SearchToken_box_search}>
          <div className={Style.Search_box_search_img}>
            <Image src={images.search} width={20} height={20} />
          </div>
          <input type="text" placeholder="Search name and past the address" />
        </div>

        <div className={Style.SearchToken_box_tokens}>
          {coin.map((e, i) => (
            <span
              key={i + 1}
              className={active == i + 1 ? `${Style.active}` : ""}
              onClick={() => (
                setActive(i + 1), tokens({ name: e.name, image: e.img })
              )}
            >
              <Image src={e.img || images.ether} width={30} height={30} />
              {e.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchToken;
