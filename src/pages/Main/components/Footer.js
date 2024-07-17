import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Footer = () => {
  return (
    <Footercontainer>
      <div>
        <img src="/img/home.png" alt="home icon" width="40px" height="40px" />
        <StyledLink to="/imagePost">
          <img
            src="/img/upload.png"
            alt="upload icon"
            width="35px"
            height="35px"
          />
        </StyledLink>

        <img
          src="/img/search.png"
          alt="search icon"
          width="40px"
          height="40px"
        />
      </div>
    </Footercontainer>
  );
};

export default Footer;

const Footercontainer = styled.footer`
  position: fixed;
  bottom: 0px;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-top: 1px solid gray;
  }
  width: calc(100% - 400px);

  @media all and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }

  @media all and (max-width: 767px) {
    width: 100%;
  }
`;
