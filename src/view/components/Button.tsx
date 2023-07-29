import { ButtonHTMLAttributes } from 'react';
import { useClassNames } from '../../app/hooks/useClassNames';

interface ButtonProips extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({className, ...props}: ButtonProips) {
  return <button
    {...props}
    className={useClassNames(
      'bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all',
      className
    )}
  />;
}
