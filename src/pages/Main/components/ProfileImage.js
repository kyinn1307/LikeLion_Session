import styled from "styled-components";

const profileImg = () => {
  return (
    <Profileimgcontainer>
      <Imgcontainer>
        <img src="/img/profile.png" alt="profile_image" />
      </Imgcontainer>
    </Profileimgcontainer>
  );
};

export default profileImg;

const Profileimgcontainer = styled.div`
  display: flex;
  align-items: center;
`;

const Imgcontainer = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 767px) {
    width: 100px;
    height: 100px;
  }

  img {
    max-width: 80%;
    max-height: 80%;
    object-fit: cover;
  }
`;
