import { useState } from 'react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useAccountsController() {
  const { areValuesVisible, toogleValuesVisibility, openNewAccountModal } = useDashboard();

  const windowWidth = useWindowWidth();
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false
  });

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toogleValuesVisibility,
    isLoading: false,
    accounts: [],
    openNewAccountModal
  };
}
