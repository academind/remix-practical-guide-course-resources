// /expenses/add

import expensesStyles from '~/styles/expenses.css';

import { Outlet } from '@remix-run/react';

export default function ExpensesAppLayout() {
  return <Outlet />;
}

export function links() {
  return [{ rel: 'stylesheet', href: expensesStyles }];
}
