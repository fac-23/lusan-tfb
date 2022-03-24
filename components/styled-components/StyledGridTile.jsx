import styled from "styled-components";

const StyledGridTile = styled.div`
  a {
    text-align: center;
    box-shadow: inset 0 0 0 0 #54b3d6;
    color: #54b3d6;
    margin: 0 -0.25rem;
    padding: 0 0.25rem;
    transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  }

  a:hover {
    box-shadow: inset 100px 0 0 0 #54b3d6;
    color: white;
    cursor: pointer;
  }
`;

export default StyledGridTile;
