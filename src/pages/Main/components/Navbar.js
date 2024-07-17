import styled from "styled-components";

const Navbar = () => {
  return (
    <Navcontainer>
      <Navigation>
        <Logo>
          <img src="/img/icon.png" alt="icon" />
        </Logo>
        <Title>
          <h1>LIKELION'S GRAM</h1>
        </Title>
        <Logout>
          <img src="/img/logout.png" alt="logout icon" id="icon2" />
        </Logout>
      </Navigation>
    </Navcontainer>
  );
};

export default Navbar;

const Navcontainer = styled.nav`
  width: 100%;
  border-bottom: 3px solid black;
`;

const Navigation = styled.div`
  margin: 10px 30px;
  display: flex;

  @media all and (min-width: 768px) and (max-width: 1023px) {
    margin: 10px auto;
    width: 90%;
  }

  @media all and (max-width: 767px) {
    margin: 10px 30px;
    width: 85%;
  }
`;

const Logo = styled.span`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;

    @media all and (max-width: 767px) {
      width: 32px;
      height: 32px;
    }
  }
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  padding-left: 20px;
  flex: 2;

  @media all and (max-width: 767px) {
    text-align: center;
    font-size: 80%;
  }
`;

const Logout = styled.span`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    flex: 1;
    justify-content: flex-end;

    @media all and (max-width: 767px) {
      width: 32px;
      height: 32px;
    }
  }
`;
