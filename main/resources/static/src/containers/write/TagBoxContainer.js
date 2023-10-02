import TagBox from '../../components/write/TagBox';
import { writeTagState } from '../../State/writeState';
import { useRecoilState } from 'recoil';

export default function TagBoxContainer() {
  const [tags, setTags] = useRecoilState(writeTagState);

  const onChangeTags = (nextTags) => {
    setTags(nextTags);
  };

  return <TagBox onChangeTags={onChangeTags} tags={tags} />;
}
