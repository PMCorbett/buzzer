// @flow
import type { AssetType } from './Asset';

export type UserType = {
  id: number,
  email: string,
  bornOn: string,
  language: string,
  gender: 'male' | 'female',
  name: string,
  nickname: string,
  type: 'staff' | 'participant',
  avatar: ?AssetType,
};

export type ParticipantType = UserType;
