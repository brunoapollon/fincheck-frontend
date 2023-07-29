import { CrossCircledIcon } from '@radix-ui/react-icons';
import { InputHTMLAttributes, forwardRef } from 'react';
import { useClassNames } from '../../app/hooks/useClassNames';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ placeholder, name, id, error, className, ...props }, ref) => {
  const inputId = id ?? name;

  return <div className='relative'>
    <input
      ref={ref}
      {...props}
      name={name}
      id={inputId}
      className={useClassNames(
        'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800  pt-4 placeholder-shown:pt-0 peer focus:border-gray-800 transition-all outline-none',
        error && '!border-red-900',
        className
      )}
      placeholder=' '
    />
    <label
      htmlFor={inputId}
      className='absolute text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all'
    >
      {placeholder}
    </label>
    {error && <div className='flex gap-2 items-center mt-2 text-red-900'>
      <CrossCircledIcon />
      <span className='text-xs'>
        {error}
      </span>
    </div>}
  </div>;
});

Input.displayName = 'Input';
