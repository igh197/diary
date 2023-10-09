import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const ProfileImage = styled.div`
width:80%;
height:80%;
background: ${palette.gray[0]};
}`;

// 파일 업로드
export default function UploadFile() {
  return (
    <>
      <ProfileImage></ProfileImage>
      <Link to="/settings" className="a">
        Upload..
      </Link>
    </>
  );
}
