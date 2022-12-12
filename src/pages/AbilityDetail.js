/* eslint-disable */

import React from "react";
//import React, { useState, useEffect } from 'react';

import {
  DisplayGalleryItem,
  Gallery,
  GalleryItem,
  GalleryItemTitle,
  ItemImage,
  ItemImageBig,
} from "../styles/Gallery";

export default function AbilityDetail({
  ability,
  index,
  setClickedAbility,
  clickedAbility,
}) {
  let clicked = function (e) {
    console.log("clicked: ", e.target.id);
    setClickedAbility([e.target.id, ability.description]);
    document.getElementById(e.target.id).style.backgroundColor = "#FF4655";
    document.getElementById(clickedAbility[0]).style.backgroundColor =
      "#525252";
  };

  return (
    <GalleryItem
      key={index}
      id={ability.displayName}
      onClick={clicked}
      style={{ cursor: "pointer" }}
    >
      <div>{ability.slot}</div>
      <p>{ability.displayName}</p>
      <ItemImage src={ability.displayIcon}></ItemImage>
    </GalleryItem>
  );
}
