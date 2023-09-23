import SettingContainer from '../components/settings/Setting';

export default function SettingsPage({ onChangeTheme, currentTheme }) {
  return (
    <SettingContainer
      onChangeTheme={onChangeTheme}
      currentTheme={currentTheme}
    />
  );
}
