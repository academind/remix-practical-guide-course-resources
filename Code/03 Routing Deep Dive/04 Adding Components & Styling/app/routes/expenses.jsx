// /expenses => shared layout

import { Outlet } from '@remix-run/react';
import expensesStyles from '~/styles/expenses.css';

export default function ExpensesLayout() {
  return (
    <main>
      <p>Shared element!</p>
      <Outlet />
    </main>
  );
}

export function links() {
  return [{ rel: 'stylesheet', href: expensesStyles }];
}
