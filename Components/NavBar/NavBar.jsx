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
  const [account, setAccount] = useState(false);

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
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
              <Image src={images.ether} height={30} width={30} />
            </div>
            <p>Network</p>
          </div>
          {account ? (
            <button onClick={() => setOpenModel(true)}>Connect</button>
          ) : (
            <button onClick={() => setOpenTokenBox(true)}>
              vndfjg89hr8unjvnu8
            </button>
          )}

          {openModel && (
            <Model setOpenModel={setOpenModel} connectWallet="Connect" />
          )}
        </div>
      </div>

      {/* TOKENLIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenDate="hey" setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  );
};

export default NavBar;
