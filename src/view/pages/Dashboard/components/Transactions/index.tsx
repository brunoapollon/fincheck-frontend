import { FilterIcon } from '../../../../components/icons/FilterIcon';
import { SwiperSlide, Swiper } from 'swiper/react';
import { MONTHS } from '../../../../../app/config/constants';
import { SliderOption } from './SliderOption';
import { TransactionsliderNavigation } from './SliderNavigation';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';
import { useTransactionController } from './useTransactionController';
import { useClassNames } from '../../../../../app/hooks/useClassNames';
import { Spinner } from '../../../../components/Spinner';
import emptyStateImage from '../../../../../assets/empty-state.svg';
import { TransactiontypeDropdown } from './TransactiontypeDropdown';

export function Transactions() {
  const { areValuesVisible, isInitialLoading, isLoaing, transactions } = useTransactionController();

  const hasTransactions = transactions.length > 0;

  return <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
    {isInitialLoading && <div className='w-full h-full flex items-center justify-center'>
      <Spinner className='w-10 h-10' />
    </div>}
    {!isInitialLoading && <>
      <header>
        <div className='flex items-center justify-between'>
          <TransactiontypeDropdown />
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
        {isLoaing && <div className='flex flex-col items-center justify-center h-full'>
          <Spinner className='w-10 h-10' />
        </div>}
        {(!hasTransactions && !isLoaing) && <div className='flex flex-col items-center justify-center h-full'>
          {!hasTransactions && <>
            <img src={emptyStateImage} alt="empty-state" />
            <p className='text-gray-700'>Não encontramos nenhuma transação!</p>
          </>}
        </div>}
        {(hasTransactions && !isLoaing) && <>
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

            <span className={useClassNames(
              'text-red-500 font-medium tracking-[-0.5px]',
              !areValuesVisible && 'blur-sm'
            )}>
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
            <span className={useClassNames(
              'text-green-800 font-medium tracking-[-0.5px]',
              !areValuesVisible && 'blur-sm'
            )}>
              + {formatCurrency(123)}
            </span>
          </div></>}
      </div>
    </>}
  </div>;
}
