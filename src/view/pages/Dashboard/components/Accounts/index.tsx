
import { SwiperSlide, Swiper } from 'swiper/react';

import 'swiper/css';
import { EyeIcon } from '../../../../components/icons/EyeIcon';
import { AccountsSliderNavigation } from './SliderNavigation';
import { AccountCard } from './Card';
import { useAccountsController } from './useAccountsController';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { useClassNames } from '../../../../../app/hooks/useClassNames';
import { Spinner } from '../../../../components/Spinner';
import { PlusIcon } from '@radix-ui/react-icons';


export function Accounts() {
  const { 
    sliderState, 
    setSliderState,
    windowWidth, 
    areValuesVisible, 
    toogleValuesVisibility,
    isLoading,
    accounts
  } = useAccountsController();

  return <div className='bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col'>
    {isLoading && <div className='w-full h-full flex items-center justify-center'>
      <Spinner className='text-teal-950/50 fill-white w-10 h-10' />
    </div>}
    
    {!isLoading && <>
      <div>
        <span className='tracking-[-0.5px] text-white block'>
        Saldo Total
        </span>
        <div className='flex items-center gap-2'>
          <strong 
            className={useClassNames(
              'text-2xl tracking-[-1px] text-white',
              !areValuesVisible && 'blur-md'
            )}
          >
            {formatCurrency(1000)}
          </strong>
          <button className='flex items-center justify-center w-8 h-8' onClick={toogleValuesVisibility}>
            <EyeIcon open={!areValuesVisible} />
          </button>
        </div>
      </div>

      <div className='flex-1 flex flex-col justify-end mt-10 md:mt-0'>
        {accounts.length === 0 && <>
          <div className='flex items-center justify-between mb-4' slot='container-start'>
            <strong className='text-white tracking-[-1px] text-lg font-bold'>
              Minhas contas
            </strong>
          </div>
          <button className='mt-4 h-52 rounded-2xl border-2 border-dashed border-teal-600 flex flex-col items-center justify-center gap-4 text-white hover:bg-teal-950/10 transition-colors'>
            <div className='w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center'>
              <PlusIcon className='h-6 w-6' />
            </div>
            <span className='font-medium tracking-[-0.5px] block w-32 text-center'>
              Cadastre uma nova conta!
            </span>
          </button>
        </>}
        {accounts.length > 0 && <div>
          <Swiper
            spaceBetween={16}
            slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
            onSlideChange={swiper => setSliderState({
              isBeginning: swiper.isBeginning,
              isEnd: swiper.isEnd,
            })}
          >
            <div className='mb-4'>
              <strong className='text-white tracking-[-1px] text-lg font-bold'>
                Minhas contas
              </strong>
              <AccountsSliderNavigation isBeginning={sliderState.isBeginning} isEnd={sliderState.isEnd} />
            </div>

            <SwiperSlide>
              <AccountCard
                borderColor='#7950F2'
                name='Nubank'
                balance={123}
                type='CASH'
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountCard 
                borderColor='#333'
                name='XP'
                balance={123}
                type='CASH'
              />
            </SwiperSlide>
            <SwiperSlide>
              <AccountCard 
                borderColor='#0f0'
                name='Carteira'
                balance={123}
                type='CASH'
              />
            </SwiperSlide>
          </Swiper>
        </div>}
      </div>

      
    </>}
  </div>;
}
