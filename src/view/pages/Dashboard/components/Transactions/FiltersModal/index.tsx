import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { Modal } from '../../../../../components/Modal';
import { Button } from '../../../../../components/Button';
import { useFiltersModal } from './useFiltersModal';
import { useClassNames } from '../../../../../../app/hooks/useClassNames';

interface FiltersModalProps {
  open: boolean;
  onClose(): void;
}

const mockedAccounts = [
  {
    id: '123',
    name: 'Nubank'
  },
  {
    id: '456',
    name: 'XP'
  },
  {
    id: '789',
    name: 'Dinheiro'
  }
];

export function FiltersModal({ onClose, open }: FiltersModalProps) {
  const { handleSelectedBankAccount, selectedBankAccountId, selectedYear, handleChangeYear } = useFiltersModal();

  return <Modal open={open} title='Filtros' onClose={onClose}>
    <div>
      <span className='text-lg tracking-[-1px] font-bold mt-2 text-gray-800'>
        Conta
      </span>
      <div className='space-y-2'>
        {mockedAccounts.map(account => <button
          key={account.id}
          onClick={() => handleSelectedBankAccount(account.id)}
          className={
            useClassNames(
              'p-2 rounded-2xl w-full text-left text-gray-800 hover:bg-gray-50 transition-colors',
              account.id === selectedBankAccountId && '!bg-gray-200'
            )
          }>
          {account.name}
        </button>)}
      </div>
    </div>
    <div className='mt-10 text-gray-800'>
      <span className='text-lg tracking-[-1px] font-bold mt-2 text-gray-800'>
        Ano
      </span>
      <div className='mt-2 w-52 flex items-center justify-between'>
        <button
          onClick={() => handleChangeYear(-1)}
          className='w-12 h-12 flex items-center justify-center'
        >
          <ChevronLeftIcon className='w-6 h-6 ' />
        </button>
        <div className='flex-1 text-center text-sm font-medium tracking-[-0.5px]'>
          <span>
            {selectedYear}
          </span>
        </div>
        <button
          onClick={() => handleChangeYear(1)}
          className='w-12 h-12 flex items-center justify-center'
        >
          <ChevronRightIcon className='w-6 h-6 ' />
        </button>
      </div>
    </div>
    <Button className='w-full mt-10'>
      Aplicar Filtros
    </Button>
  </Modal>;
}
