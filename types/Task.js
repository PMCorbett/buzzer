// @flow
import type { TaskListType } from './TaskList';
import type { AssetType } from './Asset';
import type { QuestionType, OptionTypeType } from './Question';
import type { ConditionType } from './Condition';
import type { ResponseType } from './Response';

export type TaskType = {
  id: number,
  description: string,
  position: number,
  title: string,
  icon: string,
  type: 'survey' | 'discussion',
  taskList: TaskListType,
  iconAsset: ?AssetType,
  isPreview?: boolean,
  questions: Array<QuestionType>,
  condition: ?ConditionType,
  followonTaskId: ?number,
  participantsCount: number,
  responsesCount: number,
};

export type TaskWithResponsesType = {
  ...TaskType,
  id: number,
  description: string,
  title: string,

  responses: Array<ResponseType>,
};

type QuickOptionType = {
  id: number,
  type: OptionTypeType,
  conditionId: ?number,
};

type QuickQuestionType = {
  id: number,
  conditionId: ?number,
  options: Array<QuickOptionType>,
};

export type QuickTaskType = {
  id: number,
  conditionId: ?number,
  title: string,
  description: string,
  type: 'survey' | 'discussion',
  iconAsset: ?AssetType,
  questions: Array<QuickQuestionType>,
};
