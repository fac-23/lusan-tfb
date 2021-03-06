import styled from "styled-components";

const StyledGridTile = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 1;
  justify-content: center;
  font-family: var(--raj-font);
  font-size: 1.5rem;
  font-weight: bold;

  a {
    text-align: center;
    box-shadow: inset 0 0 0 0 var(--dark-secondary-color);
    color: var(--light-color);
    margin: 0 -0.25rem;
    padding: 0 0.25rem;
    transition: color 0.4s ease-in-out, box-shadow 0.4s ease-in-out;
    filter: brightness(120%);
  }

  a:hover {
    box-shadow: inset 200px 0 0 0 var(--second-mid-color);
    color: black;
    cursor: pointer;
    padding: 1rem;
    border-radius: 5px;
  }

  @media screen and (min-width: 639px) {
    font-size: 1.8rem;
  }
`;

export default StyledGridTile;
