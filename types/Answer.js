// @flow
import type { SelectionType, QuickSelectionType } from './Selection';
import type { QuestionType } from './Question';

export type AnswerType = {
  id: number,
  answeredAt: string,
  selections: Array<SelectionType>,
  question: QuestionType,
};

export type QuickAnswerType = {
  id: number,
  selections: Array<QuickSelectionType>,
  questionId: number,
};
