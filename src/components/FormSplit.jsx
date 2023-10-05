import React, { useState } from 'react';
import Button from './Button';

const FormSplit = ({
  initialFriends,
  idSplitOpen,
  setInitialFriends,
}) => {
  const [bill, setBill] = useState(0);
  const [yourBill, setYourBill] = useState(0);
  const [friendBill, setFriendBill] = useState(0);
  const [pay, setPay] = useState('you');

  let name = '';
  initialFriends.forEach((friend) => {
    if (friend.id === idSplitOpen) name = friend.name;
  });

  const handleOnClick = () => {
    const totalExpense = Number(yourBill) + Number(friendBill);
    if (totalExpense !== Number(bill)) {
      alert(
        'The sum of your expense and friend expense must equal the total bill.'
      );
      return;
    }

    // Existing code for updating the balance
    const updatedFriends = initialFriends.map((friend) => {
      if (friend.id === idSplitOpen) {
        const updatedFriend = { ...friend };
        if (pay === 'you') {
          updatedFriend.balance += Number(friendBill);
        } else if (pay === 'friend') {
          updatedFriend.balance -= Number(yourBill);
        }
        return updatedFriend;
      }
      return friend;
    });
    setInitialFriends(updatedFriends);
  };

  return (
    <form className="form-split-bill">
      <h2>SPLIT BILL WITH {name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill === 0 ? '' : { bill }}
        onChange={(e) => setBill(e.target.value)}
      />
      <label>🕴🏻 Your expense</label>
      <input
        type="text"
        value={yourBill === 0 ? '' : { yourBill }}
        onChange={(e) => {
          const youBill = e.target.value;
          setYourBill(youBill);
          setFriendBill(Number(bill) - Number(youBill));
        }}
      />
      <label>🕴🏻 {name}'s expense</label>
      <input
        type="text"
        value={friendBill === 0 ? '' : { friendBill }}
        disabled={true}
      />
      <label>🤑 Who is paying the bill?</label>
      <select value={pay} onChange={(e) => setPay(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{name}</option>
      </select>
      <Button onClick={handleOnClick}>Split bill</Button>
    </form>
  );
};

export default FormSplit;
