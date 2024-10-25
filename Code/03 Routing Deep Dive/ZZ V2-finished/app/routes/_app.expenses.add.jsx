// /expenses/add

import { useNavigate } from '@remix-run/react';

import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';

export default function AddExpensesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    // navigate programmatically
    navigate('..');
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}
