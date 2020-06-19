// @flow

export type PageType = {
  key: string,
  title: string | React$Element<any>,
  content: React$Element<any>,
  isPageValid: boolean,
  onBeforeNextPage?: () => Promise<any>,
};
