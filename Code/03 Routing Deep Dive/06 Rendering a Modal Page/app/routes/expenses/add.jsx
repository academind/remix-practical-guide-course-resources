// /expenses/add

import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';

export default function AddExpensesPage() {
  return (
    <Modal>
      <ExpenseForm />
    </Modal>
  );
}
