// @flow
import type { UserType } from './User';
import type { ProjectType } from './Project';
import type { TaskType } from './Task';
import type { AssetType } from './Asset';

export type MessageType = {
  id: number,
  sender: UserType,
  receiver: UserType,
  text: string,
  media: AssetType,
  sentAt: string,
};

export type ConversationContextType = {
  id: number,
  project: ProjectType,
  task: TaskType,
  iteration: number,
  completedAt: string,
  selectedAt: string,
};

export type ConversationType = {
  id: number,
  participant: UserType,
  context: ConversationContextType,
  messages: Array<MessageType>,
  read: boolean,
  createdAt: string,
  updatedAt: string,
};

export type NotificationType = {
  id: number,
  conversation: ConversationType,
  context: ConversationContextType,
  message: MessageType,
  read: boolean,
};
