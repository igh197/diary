import styled from 'styled-components';
import { emojiList } from '../../lib/styles/constants';

const EmojiBlock = styled.div`
  width: 100%;
  background: none;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 0.9rem;
  font-weight: 800;

  .emoji-content {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  .checked-emoji-block {
    padding: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    .checked-emoji {
      width: 90px;
      height: 90px;
    }
  }

  .explain {
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      height: 42px;
      background: #f0f0f0;
      padding: 0 20px;
      margin: 5px 0;
      border-radius: 20px;
      color: #5c5c5c;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .row {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

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
  }
`;

const EmojiName = styled.div`
  height: 26px;
  border-radius: 26px;
  padding: 2px 10px 0 10px;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);

  text-align: center;
  text-weight: 1000;
  color: white;
`;

export default function Emoji({ tempEmoji, onClick }) {
  // 배열로 저장
  const checkedEmoji = emojiList.filter((name) => name.emojiId === tempEmoji);

  const others = emojiList.map((name) => {
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
  });

  return (
    <EmojiBlock>
      <div className="emoji-content">
        <div className="checked-emoji-block">
          <div
            className="checked-emoji"
            style={{
              backgroundImage: `url(${checkedEmoji[0].url})`,
              backgroundSize: 'cover',
            }}
          />
          <EmojiName style={{ background: checkedEmoji[0].color }}>
            {checkedEmoji[0].name}
          </EmojiName>
        </div>

        <div className="explain">
          <span>{checkedEmoji[0].text}</span>
          <span>{checkedEmoji[0].tags}</span>
        </div>
      </div>
      <div className="row">{others}</div>
    </EmojiBlock>
  );
}
