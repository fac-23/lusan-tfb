import styled from "styled-components";

const StyledLink = styled.a`
  font-family: var(--sora-font);
  font-size: 1.2rem;
  background: var(--light-color);
  border: 1px solid var(--dark-color);
  color: var(--dark-color);
  padding: 5px 12px;
  cursor: pointer;
  text-align: center;
  transition: all 400ms;
  border: 2px solid var(--dark-color);
  display: flex;
  flex-direction: column;
  flex-direction: space-between;

  :hover {
    background: var(--dark-color);
    color: var(--light-color);
  }
`;

export default StyledLink;
