import React, { useState, useEffect } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Model.module.css";
import images from "./../../assets";

const Model = ({ setOpenModel, connectWallet }) => {
  const walletMenu = ["MetaMask", "Coionbase", "Wallet", "WalletConnect"];

  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
        <div className={Style.Model_box_heading}>
          <p>Connect a Wallet</p>
          <div className={Style.Model_box_heading_img}>
            <Image
              src={images.close}
              width={50}
              height={50}
              onClick={() => setOpenModel(false)}
            />
          </div>
        </div>

        <div className={Style.Model_box_wallet}>
          {walletMenu.map((e, i) => (
            <p key={i + 1} onClick={() => connectWallet()}>
              {e}
            </p>
          ))}
        </div>

        <p className={Style.Model_box_para}>
          By connecting a wallet, you agree to Mahiswap
          <br />
          Terms of service and consent to its privacy policy.
        </p>
      </div>
    </div>
  );
};

export default Model;
