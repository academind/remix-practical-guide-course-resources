// /expenses/add

import { Outlet } from '@remix-run/react';

import expensesStyles from '~/styles/expenses.css';
import ExpensesHeader from '~/components/navigation/ExpensesHeader';

export default function ExpensesAppLayout() {
  return (
    <>
      <ExpensesHeader />
      <Outlet />
    </>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: expensesStyles }];
}
