
import { SwiperSlide, Swiper } from 'swiper/react';

import 'swiper/css';
import { EyeIcon } from '../../../../components/icons/EyeIcon';
import { AccountsSliderNavigation } from './SliderNavigation';
import { AccountCard } from './Card';
import { useAccountsController } from './useAccountsController';


export function Accounts() {
  const { sliderState, setSliderState, windowWidth } = useAccountsController();

  return <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
    <div>
      <span className="tracking-[-0.5px] text-white block">
        Saldo Total
      </span>
      <div className='flex items-center gap-2'>
        <strong className="text-2xl tracking-[-1px] text-white">
          R$ 1.000,00
        </strong>
        <button className='flex items-center justify-center w-8 h-8'>
          <EyeIcon open />
        </button>
      </div>
    </div>

    <div className='flex-1 flex flex-col justify-end mt-10 md:mt-0'>
      <div>
        <Swiper
          spaceBetween={16}
          slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
          onSlideChange={swiper => setSliderState({
            isBeginning: swiper.isBeginning,
            isEnd: swiper.isEnd,
          })}
        >
          <div className='flex items-center justify-between mb-4' slot='container-start'>
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
      </div>
    </div>
  </div>;
}
