import { ButtonHTMLAttributes } from 'react';
import { useClassNames } from '../../app/hooks/useClassNames';
import { Spinner } from './Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function Button({className, isLoading, disabled, children, ...props}: ButtonProps) {
  return <button
    {...props}
    disabled={disabled || isLoading}
    className={useClassNames(
      'bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed px-6 h-12 rounded-2xl font-medium text-white transition-all flex items-center justify-center',
      className
    )}
  >
    {isLoading ? <Spinner className='w-6 h-6'/> : children}

  </button>;
}
