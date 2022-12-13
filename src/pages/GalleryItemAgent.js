/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";
import { GalleryItemBig } from "../styles/Gallery";
import { ItemImageBig } from "../styles/Gallery";

export default function GalleryItemAgent({ agent }) {
  //console.log("props:", agent);
  return (
    <Link to={`${agent.uuid}`}>
      <>
        <GalleryItemBig bgImg={agent.background}>
          <ItemImageBig src={agent.fullPortrait}></ItemImageBig>
        </GalleryItemBig>
      </>
    </Link>
  );
}
