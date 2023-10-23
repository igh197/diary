import styled from 'styled-components';
import { emojiList } from '../../lib/styles/constants';

const EmojiBlock = styled.div`
  width: 100%;
  margin: 0 0 0 70px;
  padding: 30px 10px;
  background: none;

  display: flex;
  flex-direction: row;
  align-items: center;

  .checked-emoji {
    width: 60px;
    height: 60px;
  }

  .explain {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  button {
    width: 24px;
    height: 24px;
    border: none;
    border-radius: 100%;
    margin: 2px;

    :hover {
      cursor: pointer;
    }
  }

  .row {
    margin: 0 0 0 10px;

    display: flex;
    flex-direction: row;
  }

  .span-block {
    width: auto;
    background: white;
    padding: 0 10px;
    border-radius: 20px;

    font-size: 1rem;
    font-weight: 800;
  }
`;

export default function Emoji({ tempEmoji, onClick }) {
  // 배열로 저장
  const checkedEmoji = emojiList.filter((name) => name.emojiId === tempEmoji);

  const others = emojiList.map((name) => {
    if (checkedEmoji[0].emojiId !== name.emojiId) {
      return (
        <button
          key={name.emojiId}
          value={name.emojiId}
          style={{
            backgroundImage: `url(${name.url})`,
            backgroundSize: 'cover',
          }}
          onClick={onClick}
        />
      );
    }
    return null;
  });

  return (
    <EmojiBlock>
      <div
        className="checked-emoji"
        style={{
          backgroundImage: `url(${checkedEmoji[0].url})`,
          backgroundSize: 'cover',
        }}
      />
      <div className="explain">
        <div className="span-block">{checkedEmoji[0].text1}</div>
        <div className="span-block">{checkedEmoji[0].text2}</div>
        <div className="row">{others}</div>
      </div>
    </EmojiBlock>
  );
}
