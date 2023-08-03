import { useSwiper } from 'swiper/react';
import { useClassNames } from '../../../../../app/hooks/useClassNames';

interface SliderOptionProps {
  isActive: boolean;
  month: string;
  posiiton: number;
}

export function SliderOption({ isActive, month, posiiton }: SliderOptionProps) {
  const swiper = useSwiper();
  
  return  <button className={
    useClassNames(
      'w-full h-12 rounded-full text-sm text-gray-800 font-medium tracking-[-0.5px]',
      isActive && 'bg-white'
    )}
  onClick={() => swiper.slideTo(posiiton)}
  >
    {month}
  </button>;
}
