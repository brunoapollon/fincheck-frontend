import { Logo } from '../../components/Logo';
import { UserMenu } from '../../components/UserMenu';
import { Accounts } from './components/Accounts';
import { Transactions } from './components/Transactions';

export function Dashboard() {
  return <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
    <header className="h-12 w-full flex items-center justify-between">
      <Logo className="text-teal-900 h-6" />
      <UserMenu />
    </header>
    <main className='flex-1 flex gap-4 flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <Accounts />
      </div>
      <div className='w-full md:w-1/2'>
        <Transactions />
      </div>
    </main>
  </div>;
}
