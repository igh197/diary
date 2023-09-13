import SettingContainer from '../containers/settings/SettingContainer';

export default function SettingsPage({ onChangeTheme, currentTheme }) {
  return <SettingContainer onChangeTheme={onChangeTheme} />;
}
