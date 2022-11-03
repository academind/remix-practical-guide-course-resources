// /expenses/raw

import { getExpenses } from '~/data/expenses.server';

export function loader() {
  return getExpenses();
}
