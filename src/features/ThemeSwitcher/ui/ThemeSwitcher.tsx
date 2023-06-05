import { memo, useCallback } from 'react';

import { saveJsonSettings } from '@/entities/User';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import OrangeIcon from '@/shared/assets/icons/theme-orange.svg';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}
export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme(newTheme => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  let newIcon;
  switch (theme) {
    case Theme.DARK:
      newIcon = <DarkIcon />;
      break;
    case Theme.LIGHT:
      newIcon = <LightIcon />;
      break;
    case Theme.ORANGE:
      newIcon = <OrangeIcon />;
      break;
    default:
      newIcon = <DarkIcon />;
  }

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames('', {}, [className])}
      onClick={onToggleHandler}
    >
      {newIcon}
    </Button>
  );
});
