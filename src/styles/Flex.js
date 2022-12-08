import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  gap: 2rem;
  margin: ${(props) => props.margin};
  justify-content: space-between;
  align-items: center;
`;

export default Flex;
