import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import LocaleSwitcher from '@/components/LocaleSwitcher';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index(props: { params: { locale: string } }) {
  const t = useTranslations('BaseTemplate');
  unstable_setRequestLocale(props.params.locale);

  return (
    <div>
      <p>{t('description')}</p>
      <LocaleSwitcher />
    </div>
  );
}
