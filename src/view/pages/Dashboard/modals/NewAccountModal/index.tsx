import { ColorsDropdownInput } from '../../../../components/ColorsDropdownInput';
import { Input } from '../../../../components/Input';
import { InputCurrency } from '../../../../components/InputCurrency';
import { Modal } from '../../../../components/Modal';
import { Select } from '../../../../components/Select';
import { useNewAccountModalController } from './useNewAccountModalController';

export function NewAccountModal() {
  const { closeNewAccountModal, isNewAccountModalOpen } = useNewAccountModalController();

  return <Modal title="Nova conta" open={isNewAccountModalOpen} onClose={closeNewAccountModal}>
    <form>
      <div>
        <span className='text-gray-600 tracking-[-0.5px] text-xs'>Saldo</span>
        <div className='flex items-center gap-2'>
          <span className='text-gray-600 tracking-[-0.5px] text-lg'>R$</span>
          <InputCurrency />
        </div>
      </div>

      <div className='mt-10 flex flex-col gap-4'>
        <Input
          type='text'
          name='name'
          placeholder='Nome da conta'
        />
        <Select
          placeholder='Tipo de conta'
          options={[
            { label: 'Investimentos', value: 'INVESTMENT ' },
            { label: 'Conta corrente', value: 'CHECKING ' },
            { label: 'Dinheiro físico', value: 'CASH ' },
          ]}
        />
        <ColorsDropdownInput
          placeholder='Cor da conta'
        />
      </div>
    </form>
  </Modal>;
}
