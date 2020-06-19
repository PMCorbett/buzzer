// @flow
import type { TaskType, QuickTaskType } from './Task';

export type TaskListType = {
  id: number,
  label: string,
  position: number,
  tasks: Array<TaskType>,
};

export type QuickTaskListType = {
  id: number,
  label: string,
  tasks: Array<QuickTaskType>,
};
