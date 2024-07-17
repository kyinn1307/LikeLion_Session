import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const ProfileContent = () => {
  const [profile, setProfile] = useState({
    name: "",
    nickname: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const memberId = localStorage.getItem("id");

    const fetchProfileInfo = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8080/insta/user/${memberId}/info`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProfile({
          name: data.name,
          nickname: data.nickname,
        });
      } catch (error) {
        console.error("프로필을 불러오는 데에 오류가 발생했습니다.", error);
      } finally {
        setLoading(false); // 성공 여부에 상관없이 로딩 상태 변경
      }
    };

    fetchProfileInfo();
  }, []);

  return (
    <Profilecontentcontainer>
      <div>
        <div className="nickname">
          <b>{loading ? "Loading..." : profile.nickname}</b>
        </div>
        <div className="name">{loading ? "Loading..." : profile.name}</div>
      </div>
      <div className="editBtn">
        <StyledLink to="/profileEdit">Edit Profile</StyledLink>
      </div>
      <Userinfo>
        <ul>
          <li>서울과학기술대학교</li>
          <li>멋쟁이사자처럼 12기</li>
          <li>
            <a
              href="https://www.instagram.com/likelion_st/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.instagram.com/likelion_st/
            </a>
          </li>
        </ul>
      </Userinfo>
    </Profilecontentcontainer>
  );
};

export default ProfileContent;

const Profilecontentcontainer = styled.div`
  @media all and (max-width: 767px) {
    font-size: 80%;
  }
  .nickname {
    font-size: 22px;
  }
  .name {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .editBtn {
    width: 100px;
    padding: 5px;
    text-align: center;
    background-color: lightgray;
    border-radius: 5px;
  }
  .editBtn:hover {
    cursor: pointer;
  }
`;

const Userinfo = styled.div`
  ul {
    list-style: none;
    padding-left: 0px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: blue;
  }
`;
  