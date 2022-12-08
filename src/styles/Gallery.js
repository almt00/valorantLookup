import styled from "styled-components";

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
  align-items: flex-start;
  flex-wrap: wrap;
  align-self: flex-end;
  margin-top: 1rem;
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
