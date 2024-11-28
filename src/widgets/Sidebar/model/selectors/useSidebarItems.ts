import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { SidebarItemType } from '../types/sidebar';

import { getUserAuthData } from '@/entities/User';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import ArticleIconDeprecated from '@/shared/assets/icons/article.svg';
import ArticleIcon from '@/shared/assets/icons/articleRedesigned.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import MainIconDeprecated from '@/shared/assets/icons/home.svg';
import MainIcon from '@/shared/assets/icons/homeRedesigned.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile.svg';
import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';

export const useSidebarItems = () => {
  const userData = useSelector(getUserAuthData);
  const { t } = useTranslation('sidebar');

  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => MainIconDeprecated,
        on: () => MainIcon,
      }),
      text: t('mainLink'),
    },
    {
      path: getRouteAbout(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        off: () => AboutIconDeprecated,
        on: () => AboutIcon,
      }),
      text: t('aboutLink'),
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ProfileIconDeprecated,
          on: () => ProfileIcon,
        }),
        text: t('profileLink'),
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: toggleFeatures({
          name: 'isAppRedesigned',
          off: () => ArticleIconDeprecated,
          on: () => ArticleIcon,
        }),
        text: t('articlesLink'),
        authOnly: true,
      },
    );
  }

  return sidebarItemsList;
};
