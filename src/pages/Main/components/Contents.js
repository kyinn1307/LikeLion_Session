import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const GridContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;

  img {
    width: 320px;
    height: 320px;
    object-fit: cover; /* 이미지를 컨테이너에 맞게 잘라내기 */
    cursor: pointer; /* 포인터 커서로 변경하여 클릭 가능하게 만듦 */
  }

  @media all and (min-width: 768px) and (max-width: 1023px) {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
  }

  @media all and (max-width: 767px) {
    padding: 20px;
  }
`;

const Contents = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const memberId = localStorage.getItem("id");

    const fetchImages = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8080/insta/${memberId}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setImages(data); // 수정: data.images 대신 data 사용
      } catch (error) {
        console.error("이미지를 불러오는 중 오류가 발생했습니다.", error);
        setError("이미지를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (postId) => {
    // postId를 이용하여 게시물 페이지로 이동
    const memberId = localStorage.getItem("id");
    navigate(`/insta/${memberId}/${postId}`);
  };

  return (
    <GridContainer>
      {loading && <p>이미지를 로드 중입니다...</p>}
      {error && <p>{error}</p>}
      {images &&
        images.length > 0 &&
        images.map((image) => (
          <img
            key={image.id}
            src={`data:image/jpeg;base64,${image.image}`} // Base64 접두어와 이미지 데이터 결합
            alt="인스타 피드 이미지"
            onClick={() => handleImageClick(image.id)}
          />
        ))}
      {!loading && images && images.length === 0 && (
        <p>표시할 이미지가 없습니다.</p>
      )}
    </GridContainer>
  );
};

export default Contents;
