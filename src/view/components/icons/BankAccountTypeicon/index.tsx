import { iconsMap } from './iconsMap';

interface BankAccountTypeiconProps {
  type: keyof typeof iconsMap
}

export function BankAccountTypeicon({ type }: BankAccountTypeiconProps) {
  const Icon = iconsMap[type];

  return <Icon/>;
}