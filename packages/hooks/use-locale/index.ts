import { computed, inject, isRef, ref, unref } from 'vue';
// @ts-ignore
import { get } from 'lodash-unified';
import English from '@tu-view-plus/locale/lang/en';
import Zh from '@tu-view-plus/locale/lang/zh-cn';

import type { MaybeRef } from '@vueuse/core';
import type { InjectionKey, Ref } from 'vue';
import type { Language } from '@tu-view-plus/locale';

export type TranslatorOption = Record<string, string | number>;
export type Translator = (path: string, option?: TranslatorOption) => string;
export type LocaleContext = {
  locale: Ref<Language>;
  lang: Ref<string>;
  t: Translator;
};

export const buildTranslator =
  (locale: MaybeRef<Language>): Translator =>
  (path, option) =>
    translate(path, option, unref(locale));

export const translate = (
  path: string,
  option: undefined | TranslatorOption,
  locale: Language
): string =>
  (get(locale, path, path) as string).replace(
    /\{(\w+)\}/g,
    (_, key) => `${option?.[key] ?? `{${key}}`}`
  );

export const buildLocaleContext = (
  locale: MaybeRef<Language>
): LocaleContext => {
  const lang = computed(() => unref(locale).name);
  const localeRef = isRef(locale) ? locale : ref(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};

export const localeContextKey: InjectionKey<Ref<Language | undefined>> =
  Symbol('localeContextKey');

export const useLocale = (localeOverrides?: Ref<Language | undefined>) => {
  const locale = localeOverrides || inject(localeContextKey, ref())!;
  return buildLocaleContext(computed(() => locale.value || Zh));
};
