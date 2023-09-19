import styled from 'styled-components';

const CatagoriesBlock = styled.div`
  display: inline-block;
  justify-content: column;
  background: ${(props) => props.theme.content};
  width: 30%;
  height: 80rem;
  padding-left: 1rem;

  p {
    color: ${(props) => props.theme.text2};
  }
`;

export default function Catagories() {
  return (
    <CatagoriesBlock>
      <p>Catagories</p>
    </CatagoriesBlock>
  );
}
