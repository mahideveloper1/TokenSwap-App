import React, { useState, useEffect } from "react";
import Image from "next/image";
import Style from "./HeroSection.module.css";
import images from "../../assets";
import { Token, SearchToken } from "../index";

const HeroSection = (accounts, tokenData) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setOpenTokensTwo] = useState(false);

  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "",
  });
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
  });

  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
        <div className={Style.HeroSection_box_heading}>
          <p>Swap</p>
          <div className={Style.HeroSection_box_heading_img}>
            <Image
              src={images.close}
              width={50}
              height={50}
              onClick={() => setOpenSetting(true)}
            />
          </div>
        </div>

        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <button onClick={() => openToken(true)}>
            <Image
              src={images.image || images.etherlogo}
              height={20}
              width={20}
            />
            {tokenOne.name || "ETH"}
            <small>1000</small>
          </button>
        </div>

        <div className={Style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <button onClick={() => openToken(true)}>
            <Image
              src={tokenTwo.image || images.etherlogo}
              height={20}
              width={20}
            />
            {tokenTwo.name || "ETH"}
            <small>1000</small>
          </button>
        </div>

        {accounts ? (
          <button className={Style.HeroSection_box_btn}>Connect Wallet</button>
        ) : (
          <button className={Style.HeroSection_box_btn}>Swap</button>
        )}
      </div>

      {openSetting && <Token openSetting={openSetting} />}
      {openToken && (
        <SearchToken
          openToken={setOpenToken}
          tokens={setTokenOne}
          tokenData={tokenData}
        />
      )}
      {openToken && (
        <SearchToken
          openToken={setOpenTokensTwo}
          tokens={setTokenTwo}
          tokenData={tokenData}
        />
      )}
    </div>
  );
};

export default HeroSection;
