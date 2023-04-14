import { Option } from './types';

export const getValidatedParam = (
  value: string | undefined,
  options: Option[],
) => {
  const option = options.find((option) => option.value === value);

  return (option ?? options[0]).value;
};
