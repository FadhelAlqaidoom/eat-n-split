import React from 'react';
import '../index.css';
import Button from './Button';

const Friend = ({
  friend,
  index,
  handleOnClickSplitBill,
  splitOpen,
  idSplitOpen,
}) => {
  return (
    <li key={index}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance === 0 ? (
        <p>{`${friend.name} not owe you anything`}</p>
      ) : friend.balance < 0 ? (
        <p className="red">{`you owe ${friend.name} $${(
          friend.balance * -1
        ).toFixed(2)}`}</p>
      ) : (
        <p className="green">
          {`${friend.name} owe you $${friend.balance.toFixed(2)}`}
        </p>
      )}
      <Button onClick={() => handleOnClickSplitBill(friend.id)}>
        {splitOpen && idSplitOpen === friend.id ? 'Close' : 'Select'}
      </Button>
    </li>
  );
};

export default Friend;
