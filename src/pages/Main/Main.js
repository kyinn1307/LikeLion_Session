import styled from "styled-components";

import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Follows from "./components/Follows";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

const Main = () => {
  return (
    <Maincontainer>
      <Navbar />
      <Profile />
      <Follows />
      <Contents />
      <Footer />
    </Maincontainer>
  );
};
export default Main;

const Maincontainer = styled.div`
  width: 100%;
`;
