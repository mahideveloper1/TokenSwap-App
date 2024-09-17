import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

//import internal
import Style from "./NavBar.module.css";
import images from "../../assets";
import { Model, TokenList } from "../index";
import { ST } from "next/dist/shared/lib/utils";

const NavBar = () => {
  const menuItems = [
    {
      name: "swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/",
    },
    {
      name: "Pools",
      link: "/",
    },
  ];

  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);

  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        {/* LEFT SECTION */}
        <div className={Style.NavBar_box_left}>
          {/* logo */}
          <div className={Style.NavBar_box_left_img}>
            <Image src={images.uniswap} alt="logo" width={50} height={50} />
          </div>
          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link
                key={i + 1}
                href={{ pathname: `${el.name}`, query: `${el.link}` }}
              >
                <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_img}>
              <Image src={images.search} width={20} height={20} />
            </div>
            <input type="text" placeholder="search tokens" />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className={Style.NavBar_box_right}>right</div>
      </div>
    </div>
  );
};

export default NavBar;
