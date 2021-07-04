import React from 'react';
import { useSelector } from 'react-redux';
import { BankElement, Account } from './styles';
import Chip from '../Chip';
import { selectAccount } from '../../gameSlice';

function Bank() {
  const chips = [
    { value: 5, color: '#B22222' },
    { value: 25, color: '#006400' },
    { value: 50, color: '#6495ED' },
    { value: 100, color: '#DA70D6' },
  ];

  const account = useSelector(selectAccount);

  return (
    <BankElement className="d-flex flex-column align-self-center position-fixed">
      <Account className="text-center text-uppercase font-weight-bold p-2 text-secondary">
        Bank: $
        {account}
      </Account>
      <div className="d-flex justify-content-between">
        {
          chips.map((chip) => <Chip key={chip.value} value={chip.value} color={chip.color} />)
        }
      </div>
    </BankElement>
  );
}

export default Bank;
