// @flow
import type { AssetType } from './Asset';
import type { ConditionType } from './Condition';

export type QuestionTypeType =
  | 'blank'
  | 'horizontal_slider'
  | 'media'
  | 'multi_code'
  | 'open'
  | 'rank_order'
  | 'scale_dragdrop'
  | 'single_code'
  | 'vertical_slider';

type QuestionBriefType = {
  id: number,
  summary: string,
  type: QuestionTypeType,
  subType?: string,
  minSelected: ?number,
  maxSelected: ?number,
  optional: boolean,
  buttonText: ?string,
  shuffle?: boolean,
  optionSort: ?string,
};

export type ScalePointType = {
  id: number,
  label: string,
  score: number,
  code: number,
};

export type MediaOptionType = 'audio' | 'image' | 'video' | 'text';

export type TextOptionType = 'text' | 'string' | 'number';

export type OpenOptionType =
  | 'audio'
  | 'image'
  | 'video'
  | 'text'
  | 'string'
  | 'number';

export type CodedOptionType = 'single_code' | 'multi_code';

export type SliderOptionType = 'horizontal_slider' | 'vertical_slider';

export type DnDOptionType = 'card';

export type OptionTypeType =
  | OpenOptionType
  | CodedOptionType
  | SliderOptionType
  | DnDOptionType;

export type OptionType = {
  condition: ?ConditionType,
  id: number,
  label: string,
  type: OptionTypeType,
  image: ?string,
  imageAsset: ?AssetType,
  exclusive?: boolean,
  scalePoints?: Array<ScalePointType>,
  maxLength?: number,
  minLength?: number,
  positionLocked?: boolean,
};

export type CardType = {
  condition: ?ConditionType,
  id: number,
  label: string,
  imageAsset: ?AssetType,
  type: 'card',
  image: '',
  positionLocked: boolean,
};

export type TargetType = {
  id: number,
  label: string,
  type: string,
  image: ?string,
  imageAsset: ?AssetType,
  +question: QuestionBriefType,
};

export type StimulusTypeType = 'text' | 'image' | 'video' | 'audio';

export type StimulusType = {
  id: number,
  label: string,
  type: StimulusTypeType,
  image: ?string,
  asset: AssetType,
  +question: QuestionBriefType,
};

export type MediaStimulusType = {
  id: number,
  label: string,
  type: 'image' | 'video' | 'audio',
  image: ?string,
  asset: AssetType,
};

export type QuestionType = {
  alias: string,
  buttonText: ?string,
  condition: ?ConditionType,
  id: number,
  maxSelected: ?number,
  minSelected: ?number,
  optional: boolean,
  options: Array<OptionType>,
  optionSort: ?string,
  shuffle?: boolean,
  stimuli: Array<StimulusType>,
  subType?: string,
  summary: string,
  targets?: Array<TargetType>,
  type: QuestionTypeType,
};

export type ColumnQuestionType = {
  // eslint-disable-next-line flowtype/generic-spacing
  Cell?: React$Element<
    React$ComponentType<{ children: (value: any) => ?React$Node }>
  >,
  Header?: React$Element<any>,
  accessor: string,
  question?: QuestionType,
};
