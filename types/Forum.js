// @flow
import type { AssetType } from './Asset';
import type { StimulusType } from './Question';
import type { UserType } from './User';

export type PostType = {|
  id: number,
  author: UserType,
  selectedAt: string,
  text: string,
  parentId: ?number,
  media: ?AssetType,
|};

export type HierarchicalPostType = {
  id: number,
  author: UserType,
  selectedAt: string,
  text: string,
  parentId: ?number,
  media: ?AssetType,
  children: Array<HierarchicalPostType | PostType>,
};

export type ForumType = {
  id: number,
  type: string,
  title: string,
  description: string,
  stimuli: Array<StimulusType>,
  posts: Array<PostType>,
};
