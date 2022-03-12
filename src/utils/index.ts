export const classNames = (...classes: unknown[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * assert function
 * const array = [1, undefined, 0, 2];
 * const result = array.filter(typedBoolean)
 * result [1,2]
 */
type FalsyType = false | null | undefined | '' | 0;
export const typedBoolean = <ValueType>(
  value: ValueType,
): value is Exclude<ValueType, FalsyType> => {
  return Boolean(value);
};
