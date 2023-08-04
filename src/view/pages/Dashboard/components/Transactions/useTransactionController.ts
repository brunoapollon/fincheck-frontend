import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionController() {
  const { areValuesVisible } = useDashboard();

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoaing: false,
    transactions: []
  };
}
