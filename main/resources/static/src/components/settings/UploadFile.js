import { useCallback, useRef, React } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 116px;
  margin: 10px 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  span {
    transform: translate(0, -78%);
  }

  input {
    display: none;
  }
`;

const ProfileImage = styled.img`
width:110px;
height:110px;
border-radius: 100%;
z-index: 1;
}`;

const FileBlock = styled(Link)`
  img {
    width: 38px;
    height: 38px;
    border-radius: 100%;
    object-fit: cover;

    position: relative;
    z-index: 2;
    transform: translate(118%, -78%);

    &:hover {
      cursor: pointer;
    }
  }
`;

// 파일 업로드
export default function UploadFile({ profile, onUpload }) {
  const inputRef = useRef(null);
  const { account, userImage } = profile;

  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.click();
  }, []);

  return (
    <Wrapper>
      <ProfileImage src={userImage} alt="" />
      <input type="file" accept="image/*" ref={inputRef} onChange={onUpload} />
      <FileBlock onClick={onUploadImageButtonClick}>
        <img src="/images/User/Edit.svg" alt="edit" />
      </FileBlock>
      <span>{account}</span>
    </Wrapper>
  );
}
