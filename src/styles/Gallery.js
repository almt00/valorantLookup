import styled from "styled-components/macro";

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 1rem;
  align-items: flex-start;
  flex-wrap: wrap;
  align-self: flex-end;
  margin-top: 1rem;
  @media screen and (max-width: 650px) {
    justify-content: center;
  }
`;

const GalleryItem = styled.div`
  background-color: #525252;
  color: #ffffff;
  padding: 1rem;
  height: 10rem;
  width: 10rem;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  pointer-events: all;
  div,
  p,
  img {
    pointer-events: none;
  }
  @media screen and (max-width: 650px) {
    height: auto;
    width: auto;
  }
`;

const ItemImage = styled.img`
  height: 40%;
  width: auto;
  position: absolute;
  //margin: auto;
  bottom: 0.5rem;
  right: 1rem;
`;

const ItemImageBig = styled(ItemImage)`
  height: 100%;
  width: auto;
  position: relative;
  margin-left: 3rem;
  margin-top: 2rem;
  bottom: auto;
  right: auto;
`;

const GalleryItemBig = styled(GalleryItem)`
  height: 15rem;
  width: 15rem;
  background-image: url(${(prop) => prop.bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const DisplayGalleryItem = styled(GalleryItemBig)`
  height: 17rem;
  width: 40%;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
const GalleryItemTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
`;
export {
  Gallery,
  GalleryItem,
  ItemImage,
  ItemImageBig,
  GalleryItemBig,
  DisplayGalleryItem,
  GalleryItemTitle,
};
