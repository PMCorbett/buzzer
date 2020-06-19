// @flow
import type { AnswerType, QuickAnswerType } from './Answer';
import type { ParticipantType } from './User';

export type ResponseType = {
  id: number,
  iteration: number,
  taskId: number,
  answers: Array<AnswerType>,
  createdAt: string,
  completedAt: string,
  startedAt: string,
  participant: ParticipantType,
};

export type QuickResponseType = {
  id: number,
  iteration: number,
  taskId: number,
  answers: Array<QuickAnswerType>,
};

export type GroupedResponsesType = {
  participantId: number,
  responses: Array<ResponseType>,
};
