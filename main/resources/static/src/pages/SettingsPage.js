import { Outlet } from 'react-router-dom';
import HeaderContainer from '../containers/header/HeaderContainer';

export default function SettingsPage() {
  return (
    <>
      <HeaderContainer />
      <Outlet />
    </>
  );
}
