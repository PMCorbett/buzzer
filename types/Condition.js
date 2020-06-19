// @flow
import type { SegmentType } from 'types/Segment';
import type { TaskType } from 'types/Task';

export type TaskCompletedType = {
  taskCompleted: ?number,
};

export type OptionIdType = {
  taskId: number,
  questionId: number,
  optionId: number,
};

export type OptionConditionType = {
  question: OptionIdType,
};

export type QuestionIdType = {
  taskId: number,
  questionId: number,
};

export type QuestionConditionType = {
  question: QuestionIdType,
};

export type StringConditionType = {
  string: string,
};

export type IntConditionType = {
  int: number,
};

type BooleanConditionType = {
  bool: boolean,
};

// goes with StringConditionType
type SegmentConditionType = {
  project: 'accesscode',
};

// goes with DateConditionType
type DeviceDateType = {
  device: 'date',
};
// goes with DeviceDateType
type DateConditionType = {
  date: number,
};

export type CurrenAgeConditionType = {
  user: 'current_age',
};

type GenderConditionType = {
  user: 'gender',
};

export type ComparatorType =
  | 'EQUAL'
  | 'NOT_EQUAL'
  | 'GREATER_THAN'
  | 'LESS_THAN'
  | '>='
  | '<=';

export type LogicBranchType = 'AND' | 'OR';

export type LeftTypes =
  | DeviceDateType
  | SegmentConditionType
  | CurrenAgeConditionType
  | GenderConditionType
  | OptionConditionType
  | QuestionConditionType
  | TaskCompletedType
  | BooleanConditionType;

export type RightTypes =
  | DateConditionType
  | StringConditionType
  | IntConditionType
  | BooleanConditionType
  | TaskCompletedType
  | OptionConditionType;

export type RightIntersectionTypes = DateConditionType &
  StringConditionType &
  IntConditionType &
  BooleanConditionType &
  TaskCompletedType &
  OptionConditionType;

export type LeftIntersectionTypes = DeviceDateType &
  SegmentConditionType &
  CurrenAgeConditionType &
  GenderConditionType &
  OptionConditionType &
  QuestionConditionType &
  TaskCompletedType &
  BooleanConditionType;

export type DateComparisonType = {
  left: DeviceDateType,
  operator: ComparatorType,
  right: DateConditionType,
};

export type SegmentComparisonType = {
  left: SegmentConditionType,
  operator: ComparatorType,
  right: StringConditionType,
};

export type CurrentAgeComparisonType = {
  left: CurrenAgeConditionType,
  operator: ComparatorType,
  right: IntConditionType,
};

type GenderComparisonType = {
  left: GenderConditionType,
  operator: ComparatorType,
  right: StringConditionType,
};

export type OptionAnsweredComparisonType = {
  left: OptionConditionType,
  operator: ComparatorType,
  right: BooleanConditionType,
};

export type OptionNumberComparisonType = {
  left: OptionConditionType,
  operator: ComparatorType,
  right: IntConditionType,
};

export type OptionTimesComparisonType = {
  left: OptionConditionType,
  operator: ComparatorType,
  right: IntConditionType,
};

export type QuestionAnsweredComparisonType = {
  left: QuestionConditionType,
  operator: ComparatorType,
  right: BooleanConditionType,
};

export type QuestionTimesComparisonType = {
  left: QuestionConditionType,
  operator: ComparatorType,
  right: IntConditionType,
};

export type TaskAnsweredComparisonType = {
  left: TaskCompletedType,
  operator: ComparatorType,
  right: BooleanConditionType,
};

export type EmptyRuleType = {
  left: TaskCompletedType,
  operator: ComparatorType,
  right: {},
};

export type TaskTimesComparisonType = {
  left: TaskCompletedType,
  operator: ComparatorType,
  right: IntConditionType,
};

export type TaskVsComparisonType = {
  left: TaskCompletedType,
  operator: ComparatorType,
  right: TaskCompletedType,
};

export type TaskVsOptionComparisonType = {
  left: TaskCompletedType,
  operator: ComparatorType,
  right: OptionConditionType,
};

export type ComparisonType = SegmentComparisonType &
  CurrentAgeComparisonType &
  GenderComparisonType &
  OptionTimesComparisonType &
  QuestionTimesComparisonType &
  TaskTimesComparisonType &
  OptionAnsweredComparisonType &
  QuestionAnsweredComparisonType &
  TaskAnsweredComparisonType &
  EmptyRuleType &
  DateComparisonType &
  TaskVsComparisonType &
  TaskVsOptionComparisonType &
  OptionNumberComparisonType;

export type ComparisonMixedType =
  | SegmentComparisonType
  | CurrentAgeComparisonType
  | GenderComparisonType
  | OptionTimesComparisonType
  | QuestionTimesComparisonType
  | TaskTimesComparisonType
  | OptionAnsweredComparisonType
  | QuestionAnsweredComparisonType
  | TaskAnsweredComparisonType
  | EmptyRuleType
  | DateComparisonType
  | TaskVsComparisonType
  | TaskVsOptionComparisonType
  | OptionNumberComparisonType;

export type BranchType = {
  left: BranchType & ComparisonType,
  operator: LogicBranchType,
  right: BranchType & ComparisonType,
};

export type BoolType = {
  operator: 'BOOL',
};

export type LogicType = BranchType & ComparisonMixedType & BoolType;
export type LogicMixedType = BranchType | ComparisonMixedType | BoolType;

export type FlatLogicType = {
  operator: LogicBranchType,
  rules: Array<FlatLogicType & ComparisonMixedType>,
};

export type FlatLogicMixedType = {
  operator: LogicBranchType,
  rules: Array<FlatLogicType | ComparisonMixedType>,
};

export type ResponsePipingConditionType = {
  id: number,
  position: number,
  logic: LogicType,
  whenTrue: OptionConditionType | QuestionConditionType | StringConditionType,
  whenFalse: StringConditionType,
};

export type ConditionType = {
  id: number,
  name: string,
  logic: LogicType,
};

export type UpdateLeftFunction = (
  value: LeftTypes,
  path: Array<string>
) => void;

export type UpdateRightFunction = (
  value: RightTypes,
  path: Array<string>
) => void;

export type UpdateOperatorFunction = (
  value: ComparatorType | LogicBranchType,
  path: Array<string>
) => void;

export type CreateGroupFunction = (path: Array<string>) => void;

export type CreateRuleFunction = (path: Array<string>) => void;

export type RemoveRuleFunction = (path: Array<string>) => void;

export type ProjectContextType = {
  segments: Array<SegmentType>,
  tasks: Array<TaskType>,
};

export type ValidationType = {
  path: Array<string | number>,
  isValid: boolean,
};
