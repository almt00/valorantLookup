import styled from "styled-components";

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  align-items: flex-start;
  flex-wrap: wrap;
  align-self: flex-end;
`;

const GalleryItem = styled.div`
  background-color: #636363;
  color: #ffffff;
  padding: 1rem;
  height: 10rem;
  width: 10rem;
  border-radius: 10px;
  overflow: hidden;
`;

const ItemImage = styled.img`
  height: 23rem;
  width: auto;
`;

const GalleryItemBig = styled(GalleryItem)`
  height: 20rem;
  width: 20rem;
  background-image: url(${(prop) => prop.bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export { Gallery, GalleryItem, ItemImage, GalleryItemBig };
