// @flow

import type { GraphQLType } from 'graphql';

export type UpdateOptionsTypeKeys =
  | 'addMessage'
  | 'syncResponse'
  | 'updateUser'
  | 'addPost';

export type UpdateOptionsType = {
  key: UpdateOptionsTypeKeys,
  context: Object,
};

export type RefetchQueryType = {
  query: GraphQLType,
  variables?: { [key: string]: any },
};

export type DependentMediaStorageType = {
  storageId: string,
  projectId: ?number,
  onCompleteMutation: GraphQLType,
  buildVariablesFuncRef: 'getSelectionId' | 'getUserId' | 'getPostId',
  partialVariables: Object,
  file: File | Blob,
  fetchData: Object,
};

export type CordovaDependentMediaType = {
  storageId: string,
  projectId: ?number,
  onCompleteMutation: GraphQLType,
  buildVariablesFuncRef: 'getSelectionId' | 'getUserId' | 'getPostId',
  partialVariables: Object,
  fileData: { name: string, type: string },
  fetchData: Object,
};

export type PersistedFileDependentMediaType = {
  storageId: string,
  projectId: ?number,
  onCompleteMutation: GraphQLType,
  buildVariablesFuncRef: 'getSelectionId' | 'getUserId' | 'getPostId',
  partialVariables: Object,
  persistedFile: { name: string, type: string },
  fetchData: Object,
};

export type DependentMediaType = {
  storageId: string,
  projectId: ?number,
  onCompleteMutation: GraphQLType,
  buildVariablesFuncRef: 'getSelectionId' | 'getUserId' | 'getPostId',
  partialVariables: Object,
  file: File,
};

export type DependentMediasType = Array<DependentMediaType>;

export type PersistedDependentMediaType = {
  storageId: string,
  projectId: ?number,
  onCompleteMutation: GraphQLType,
  buildVariablesFuncRef: 'getSelectionId' | 'getUserId' | 'getPostId',
  partialVariables: Object,
  contents: ArrayBuffer,
  name: string,
  type: string,
  size: number,
  fetchData: Object,
};

export type PersistedDependentMediasType = Array<PersistedDependentMediaType>;

export type PersistedMutationDataType = {
  optimisticResponse?: Object,
  mutation: GraphQLType,
  refetchQueries?: Array<RefetchQueryType>,
  updateOptions?: UpdateOptionsType,
  variables: Object,
  storageId: string,
  persistedDependentMedias?: PersistedDependentMediasType,
};

export type MutationDataType = {
  optimisticResponse?: Object,
  mutation: GraphQLType,
  refetchQueries?: Array<RefetchQueryType>,
  updateOptions?: UpdateOptionsType,
  variables: Object,
  storageId: string,
  dependentMedias?: DependentMediasType,
};

export type StoreReturnValue = Promise<{
  mutations: Array<MutationDataType>,
  medias: Array<DependentMediaStorageType>,
}>;
