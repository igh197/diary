import useModal from '../../hooks/useModal';
import styled from 'styled-components';
import Button from '../../common/Button';
import EmojiExplainModal from './EmojiExplainModal';

const Wrapper = styled.div`
  display: inline-block;
`;

const ExplainButton = styled(Button)`
  color: ${(props) => props.theme.text};
`;

export default function EmojiExplain() {
  const { isOpen, open, close } = useModal();

  return (
    <Wrapper>
      <ExplainButton onClick={open} onMouseOver={open}>
        기분구슬
      </ExplainButton>
      {isOpen && <EmojiExplainModal close={close} />}
    </Wrapper>
  );
}
