import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function useClassNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
