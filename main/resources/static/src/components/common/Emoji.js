import { useState } from 'react';
import styled from 'styled-components';

const EmojiBlock = styled.div`
  width: 100%;
  padding: 60px;

  display: flex;
  flex-direction: row;
  align-items: center;

  .checked-emoji {
    width: 100px;
    height: 100px;
  }

  .others {
    width: 50px;
    height: 50px;
  }
`;

const emojiSrcList = [
  {
    emojiId: 0,
    angry: {
      url: 'images/Emoji/Angry.svg',
      text1: '화난 구슬이에요',
      text2: '오늘은 너무 화가 나요!',
    },
  },
  {
    emojiId: 1,
    fear: {
      url: 'images/Emoji/Fear.svg',
      text1: '공포 구슬이에요',
      text2: '저는 공포에 떨고있어요',
    },
  },
  {
    emojiId: 2,
    happy: {
      url: 'images/Emoji/Happy.svg',
      text1: '행복한 구슬이에요',
      text2: '저는 신날 때 나타나요!',
    },
  },
  {
    emojiId: 3,
    love: {
      url: 'images/Emoji/Love.svg',
      text1: '사랑 구슬이에요',
      text2: '저는 사랑에 빠졌어요!',
    },
  },
  {
    emojiId: 4,
    sad: {
      url: 'images/Emoji/Sad.svg',
      text1: '슬픈 구슬이에요',
      text2: '저는 슬퍼요',
    },
  },
  {
    emojiId: 5,
    pokerface: {
      url: 'images/Emoji/PokerFace.svg',
      text1: '무표정 구슬이에요',
      text2: '저는 아무 생각이 없어요',
    },
  },
];

export default function Emoji({ tempEmoji }) {
  const [checkedEmoji, setCheckedEmoji] = useState(tempEmoji);

  const onFocus = (e) => {
    setCheckedEmoji(e.target.style.backgroundImage);
  };

  const others = emojiSrcList.map((emojiId, name) => {
    if (checkedEmoji !== name) {
      return (
        <div
          key={emojiId}
          className="others"
          style={{
            backgroundImage: `url(${name.url})`,
            backgroundSize: 'cover',
          }}
        />
      );
    }
    return null;
  });

  return (
    <EmojiBlock>
      <div
        className="checked-emoji"
        style={{ backgroundImage: `url(${checkedEmoji})` }}
      />
      <div className="others">{others}</div>
    </EmojiBlock>
  );
}
