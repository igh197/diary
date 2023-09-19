import {
  useSelector,
  useDispatch,
} from '../../node_modules/react-redux/es/exports';
import Header from '../components/common/header/Header';
import { logout } from '../modules/user';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
