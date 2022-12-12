import styled from "styled-components/macro";

const FooterStyle = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #242424;
  height: auto;
  width: 100%;
  padding: 1rem 2rem;
  color: #e6e6e6;
  display: flex;

  justify-content: space-between;
  flex-direction: row;

  p {
    font-size: 0.75rem;
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    p {
      margin: 0;
    }
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

export default FooterStyle;
