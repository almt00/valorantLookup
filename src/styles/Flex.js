import styled from "styled-components/macro";

const Flex = styled.div`
  display: flex;
  gap: 2rem;
  margin: ${(props) => props.margin};
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1400px) {
    flex-direction: column;
  }
`;

export default Flex;
