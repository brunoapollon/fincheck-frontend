import { useState } from 'react';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionController() {
  const { areValuesVisible } = useDashboard();

  const [isFiltersModalOpen, setIsFiltersModal] = useState(false);

  function handleCloseFiltersModal() {
    setIsFiltersModal(false);
  }

  function handleOpenFiltersModal() {
    setIsFiltersModal(true);
  }

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoaing: false,
    transactions: [],
    isFiltersModalOpen,
    handleCloseFiltersModal,
    handleOpenFiltersModal
  };
}
