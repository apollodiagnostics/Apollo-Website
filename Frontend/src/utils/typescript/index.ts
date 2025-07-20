export type {
  ForceAny,
  Nullable,
  ObjectUnknown,
  Noop,
  Primitive,
  ArrayValue,
  NullableProperties,
  PathArray,
  DefaultAllType,
  SuggestionString,
  PartialRecord,
  ExclusiveProperty,
  DefinedProperties,
  NoTrailingSegment,
} from './model/utility.types'

export {
  isNumber,
  asConst,
  isNotEmptyString,
  objectAsValueOptions,
  arraysAsValueObject,
  modifyRecord,
  addDefaultEmptyValue,
  isNonEmptyArray,
  aliasKeys,
  isNonEmptyObject,
} from './model/checks.types'
