// @flow
import type { TaskListType } from 'types/TaskList';
import type { TaskWithResponsesType } from 'types/Task';
import type { ResponseType } from 'types/Response';

export type ProjectStatusType = 'closed' | 'deleting' | 'draft' | 'live';

export type ProjectType = {
  id: number,
  title: string,
  status: ProjectStatusType,
  description: string,
  privacyUrl: string,
  updatedAt: Date,
  createdAt: Date,
  taskLists: Array<TaskListType>,
};

export type ProjectWithResponse = {
  ...ProjectType,
  responses: Array<ResponseType>,
};

export type ProjectWithTasksResponses = {
  ...ProjectType,
  id: number,
  tasks: Array<TaskWithResponsesType>,
};
