import { useClassNames } from '../../../../../app/hooks/useClassNames';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { BankAccountTypeicon } from '../../../../components/icons/BankAccountTypeicon';
import { useDashboard } from '../DashboardContext/useDashboard';

interface AccountCardProps {
  borderColor: string;
  name: string;
  balance: number;
  type: 'CASH' | 'CHECKING'  | 'INVESTMENT'
}

export function AccountCard({ borderColor, name, balance, type }: AccountCardProps) {
  const { areValuesVisible } = useDashboard();
  return <div className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between border-b-4 border-b-teal-950" style={{ borderColor }}>
    <div>
      <BankAccountTypeicon type={type} />

      <span className='text-gray-800 font-medium tracking-[-0.5px] mt-4 block'>
        {name}
      </span>
    </div>
    <div>
      <span className={useClassNames(
        'text-gray-800 font-medium tracking-[-0.5px] mt-4 block',
        !areValuesVisible && 'blur-sm'
      )}>
        {formatCurrency(balance)}
      </span>
      <small className='text-gray-600 text-sm'>
        Saldo atual
      </small>
    </div>
  </div>;
}
