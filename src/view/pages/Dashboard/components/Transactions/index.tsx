import { ChevronDownIcon } from '@radix-ui/react-icons';
import { TransactionsIcon } from '../../../../components/icons/TransactionsIcon';
import { FilterIcon } from '../../../../components/icons/FilterIcon';
import { SwiperSlide, Swiper } from 'swiper/react';
import { MONTHS } from '../../../../../app/config/constants';
import { SliderOption } from './SliderOption';
import { TransactionsliderNavigation } from './SliderNavigation';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';

export function Transactions() {
  return <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
    <header>
      <div className='flex items-center justify-between'>
        <button className='flex items-center gap-2'>
          <TransactionsIcon />
          <span className='text-sm text-gray-800 font-medium tracking-[-0.5px]'>Transações</span>
          <ChevronDownIcon className='text-gray-900' />
        </button>
        <button>
          <FilterIcon />
        </button>
      </div>

      <div className='mt-6 relative'>
        <Swiper
          slidesPerView={3}
          centeredSlides
        >
          <TransactionsliderNavigation />
          {MONTHS.map((month, idx) => <SwiperSlide key={`${month}-${idx}`}>
            {({ isActive }) => (
              <SliderOption
                isActive={isActive}
                month={month}
                posiiton={idx}
              />
            )}
          </SwiperSlide>)}
        </Swiper>
      </div>

    </header>

    <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
      <div className='bg-white p-4 rounded-2xl flex items-center justify-between gap-4'>
        <div className='flex-1 flex items-center gap-3'>
          <CategoryIcon type='expense' />
          <div className=''>
            <strong className='font-bold tracking-[-0.5px] block'>
              Almoço
            </strong>
            <span className='text-sm text-gray-600'>
              10/12/2023
            </span>
          </div>
        </div>

        <span className='text-red-500 font-medium tracking-[-0.5px]'>
          - {formatCurrency(123)}
        </span>
      </div>

      <div className='bg-white p-4 rounded-2xl flex items-center justify-between gap-4'>
        <div className='flex-1 flex items-center gap-3'>
          <CategoryIcon type='income' />
          <div className=''>
            <strong className='font-bold tracking-[-0.5px] block'>
              Almoço
            </strong>
            <span className='text-sm text-gray-600'>
              10/12/2023
            </span>
          </div>
        </div>

        <span className='text-green-800 font-medium tracking-[-0.5px]'>
          + {formatCurrency(123)}
        </span>
      </div>
    </div>
  </div>;
}
