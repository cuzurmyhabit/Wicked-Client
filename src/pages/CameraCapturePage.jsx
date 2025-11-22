import React, { useState, useCallback, useRef, useMemo } from 'react';
import Webcam from 'react-webcam';
import CircularTimer from '../components/CircularTimer';
import * as S from './CameraCapturePage.styled';

import SpeechBubbleSVG from '../assets/SpeechBubble.svg'; 
import CameraIcon1SVG from '../assets/1take_logo.svg'; 
import CameraIcon2SVG from '../assets/2take_logo.svg';
import CameraIcon3SVG from '../assets/3take_logo.svg';
import CameraIcon4SVG from '../assets/4take_logo.svg';

const TOTAL_ROUNDS = 4;

const videoConstraints = {
  width: S.CAMERA_WIDTH,
  height: S.CAMERA_HEIGHT,
  facingMode: "user"
};

const CameraCapturePage = () => {
  const [round, setRound] = useState(1);
  const [capturedImages, setCapturedImages] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const webcamRef = useRef(null);

  const characterLogos = useMemo(() => [
    CameraIcon1SVG,
    CameraIcon2SVG,
    CameraIcon3SVG,
    CameraIcon4SVG
  ], []);

  const handleTimerComplete = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      console.log(`Round ${round} 캡처된 이미지:`, imageSrc);
      setCapturedImages(prev => [...prev, imageSrc]);
      
      if (round < TOTAL_ROUNDS) {
        setRound(prevRound => prevRound + 1);
      } else {
        setIsComplete(true);
      }
    }
  }, [round]);
  
  const timerKey = useMemo(() => round, [round]);

  const handleReset = () => {
    setRound(1);
    setCapturedImages([]);
    setIsComplete(false);
  };

  const handleDownload = (imageUrl, index) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `photo_${index + 1}.jpg`;
    link.click();
  };
{/* 디버깅 코드 */}
  // 촬영 완료 후 결과 화면
  if (isComplete) {
    return (
      <S.PageContainer>
        <S.Title>촬영 완료!</S.Title>
        <S.Subtitle>총 {capturedImages.length}장의 사진이 촬영되었습니다.</S.Subtitle>
        
        <S.ImageGallery>
          {capturedImages.map((img, index) => (
            <S.ImageCard key={index}>
              <S.ImageNumber>{index + 1}</S.ImageNumber>
              <S.CapturedImage src={img} alt={`촬영 ${index + 1}`} />
              <S.DownloadButton onClick={() => handleDownload(img, index)}>
                다운로드
              </S.DownloadButton>
            </S.ImageCard>
          ))}
        </S.ImageGallery>

        <S.ResetButton onClick={handleReset}>
          다시 촬영하기
        </S.ResetButton>
      </S.PageContainer>
    );
  }
//   여기까지

  // 촬영 진행 중 화면
  return (
    <S.PageContainer>
      <S.RoundDisplayTop>
        {round} / {TOTAL_ROUNDS}
      </S.RoundDisplayTop>
      
      <S.Title>카메라를 바라보세요!</S.Title>
      <S.Subtitle>(말풍선의 자리는 비워주세요)</S.Subtitle>

      <S.CameraContainer>
        <S.StyledWebcam>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={S.CAMERA_WIDTH}
            height={S.CAMERA_HEIGHT}
            videoConstraints={videoConstraints}
          />
        </S.StyledWebcam>

        <S.SpeechBubbleOverlay 
          src={SpeechBubbleSVG} 
          alt="말풍선"
        />
      </S.CameraContainer>

      <S.FooterArea>
        <S.CartoonCameraIcon $iconPath={characterLogos[round - 1]}>
        </S.CartoonCameraIcon>

        <S.TimerWrapper>
          <CircularTimer 
            key={timerKey}
            onComplete={handleTimerComplete} 
          />
        </S.TimerWrapper>
      </S.FooterArea>


      {capturedImages.length > 0 && (
        <S.ThumbnailContainer>
          <S.ThumbnailTitle>촬영된 사진: {capturedImages.length}장</S.ThumbnailTitle>
          <S.ThumbnailGrid>
            {capturedImages.map((img, index) => (
              <S.Thumbnail key={index} src={img} alt={`촬영 ${index + 1}`} />
            ))}
          </S.ThumbnailGrid>
        </S.ThumbnailContainer>
      )}
    </S.PageContainer>
  );
};

export default CameraCapturePage;