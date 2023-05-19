import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleView } from '../../model/consts/articlesConsts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

import cls from './ArticleList.module.scss';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => {
      return (
        <ArticleListItemSkeleton className={cls.card} view={view} key={index} />
      );
    });
};

export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation('articles');
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
  } = props;

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('articlesNotFound')} />
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.articleList, {}, [className, cls[view]])}
      data-testid={'ArticleList'}
    >
      {articles.map(item => (
        <ArticleListItem
          article={item}
          view={view}
          target={target}
          className={cls.card}
          key={item.id}
        />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
