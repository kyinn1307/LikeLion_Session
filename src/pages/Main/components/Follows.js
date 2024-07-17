import styled from "styled-components";

const Follows = () => {
  return (
    <Followcontainer>
      <Contentwrapper>
        <span className="numbers">
          <b>3</b>
          posts
        </span>
        <span className="numbers">
          <b>30</b>
          followers
        </span>
        <span className="numbers">
          <b>56</b>
          following
        </span>
      </Contentwrapper>
    </Followcontainer>
  );
};
export default Follows;

const Followcontainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Contentwrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  align-items: center;
  border-bottom: 1px solid gray;

  @media all and (max-width: 767px) {
    padding: 10px;
  }
`;
