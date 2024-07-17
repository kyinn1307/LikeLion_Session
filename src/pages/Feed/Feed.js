import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const FeedContainer = styled.div`
  @media all and (max-width: 767px) {
    font-size: 80%;
  }

  padding: 20px 15px;
  width: 100%;

  .feedHeader {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .left {
    display: flex;
    align-items: center;
  }
  .cancelBtn {
    width: 35px;
    height: 30px;
    margin-right: 70px;
  }
  .feedTitle {
    font-size: 30px;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .author {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .view {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
  .viewImage {
    width: 600px;
    height: 600px;
    object-fit: cover;
  }
  .icons {
    margin-bottom: 10px;
  }
  .userCaption {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  .heart,
  .reply,
  .dm {
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin-right: 15px;
  }
  .nickname {
    font-size: 20px;
    margin-right: 15px;
  }
  .caption {
    font-size: 20px;
  }
`;

const Imgcontainer = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 15px;

  @media all and (max-width: 767px) {
    width: 100px;
    height: 100px;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const Feed = () => {
  const { memberId, postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8080/insta/${memberId}/${postId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("게시물을 불러오는 중 오류가 발생했습니다.", error);
        setError("게시물을 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    const fetchNickname = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8080/insta/user/${memberId}/info`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNickname(data.nickname);
      } catch (error) {
        console.error("사용자 정보를 불러오는 중 오류가 발생했습니다.", error);
        setNickname("사용자 정보를 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchPost();
    fetchNickname();
  }, [memberId, postId]);

  const handleLikeToggle = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  if (loading) return <p>게시물을 로드 중입니다...</p>;
  if (error) return <p>{error}</p>;

  return (
    <FeedContainer>
      <div className="feedHeader">
        <div className="left">
          <span className="cancel">
            <StyledLink to="/">
              <img
                src="/img/arrow.png"
                alt="back button"
                className="cancelBtn"
              />
            </StyledLink>
          </span>
          <span className="feedTitle">
            <b>게시물</b>
          </span>
        </div>
      </div>
      <div className="content">
        <div className="author">
          <Imgcontainer>
            <img src="/img/profile.png" alt="profile_image" />
          </Imgcontainer>
          <div className="nickname">
            <b>{nickname}</b>
          </div>
        </div>
        <div className="view">
          <img
            src={`data:image/jpeg;base64,${post.image}`}
            alt="post_image"
            className="viewImage"
          />
        </div>
        <div className="icons">
          <img
            src={isLiked ? "/img/heart-full.png" : "/img/heart-empty.png"}
            alt="heart icon"
            className="heart"
            onClick={handleLikeToggle}
          />
          <img src="/img/reply.png" alt="reply icon" className="reply" />
          <img src="/img/dm.png" alt="dm icon" className="dm" />
        </div>
        <div className="userCaption">
          <div className="nickname">
            <b>{nickname}</b>
          </div>
          <div className="caption">{post.context}</div>
        </div>
      </div>
    </FeedContainer>
  );
};

export default Feed;
