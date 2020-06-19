// @flow
import type { AssetType } from 'types/Asset';
import type { TargetType, OptionType } from 'types/Question';
import PersistedFile from '../client/src/FilePersistence/PersistedFile';

export type MediaFile = {|
  file: File,
|};

export type MediaSelection = {|
  file: File | PersistedFile,
|};

export type DartboardCardSelection = TargetType & {|
  left: number,
  top: number,
  targetSize: {
    width: number,
    height: number,
  },
|};

export type SelectionValue =
  | string
  | number
  | boolean
  | MediaSelection
  | MediaFile
  | DartboardCardSelection;

type SelectedOptionsTypeType =
  | string
  | number
  | boolean
  | MediaSelection
  | DartboardCardSelection;

export type SelectedOptionsType = {
  [number]: SelectedOptionsTypeType,
};

export type SelectedQuestionOptionsType = {
  [number]: SelectedOptionsType,
};

export type QuestionValidationsType = {
  [number]: boolean,
};

export type SelectionType = {
  id: number,
  selected: boolean,
  selectedAt: string,
  option: OptionType,
  mediaState: string,
  text: ?string,
  type: string,
  media: AssetType,
  point: number,
  target: TargetType,
  coordY: number,
  coordX: number,
};

export type QuickSelectionType = {
  id: number,
  text: ?string,
  optionId: number,
};
