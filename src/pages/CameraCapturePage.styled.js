import styled from 'styled-components';

export const CAMERA_WIDTH = 900;
export const CAMERA_HEIGHT = 600;

//전체 레이아웃
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
`;

//사진 촬영 정보
export const RoundDisplayTop = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

// 제목
export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

// 부제목
export const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
`;

// 카메라 뷰
export const CameraContainer = styled.div`
  position: relative;
  width: ${CAMERA_WIDTH}px;
  height: ${CAMERA_HEIGHT}px;
  background-color: #444;
  border-radius: 8px;
  overflow: hidden;
`;

// ReactWebcam 
export const StyledWebcam = styled.div`
  width: 100%;
  height: 100%;
  
  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// 말풍선
export const SpeechBubbleOverlay = styled.img`
  position: absolute;
  top: 20px;
  left: 80px;
  width: 240px;
  height: 170px;
  z-index: 10;
`;

// 하단
export const FooterArea = styled.div`
  position: relative; 
  width: ${CAMERA_WIDTH}px; 
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

// 아이콘
export const CartoonCameraIcon = styled.div`
  width: 120px; 
  height: 120px;
  background-color: transparent;
  background: url(${props => props.$iconPath}) no-repeat center center / contain;
`;

// 타이머
export const TimerWrapper = styled.div`
`;


//여기에서ㅓ부터는 디버깅 코드라 삭제하세용

// 이미지 갤러리
export const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 30px 0;
  max-width: 900px;
`;

// 이미지 카드
export const ImageCard = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 15px;
`;

// 이미지 번호
export const ImageNumber = styled.div`
  position: absolute;
  top: 25px;
  left: 25px;
  background: #4A90E2;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 16px;
  z-index: 1;
`;

// 캡처된 이미지
export const CapturedImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

// 다운로드 버튼
export const DownloadButton = styled.button`
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background-color: #4A90E2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #357ABD;
  }
`;

// 다시 촬영 버튼
export const ResetButton = styled.button`
  padding: 15px 40px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: #555;
  }
`;

// 썸네일 컨테이너 (촬영 중 미리보기)
export const ThumbnailContainer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const ThumbnailTitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

export const ThumbnailGrid = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  border: 2px solid #4A90E2;
`;