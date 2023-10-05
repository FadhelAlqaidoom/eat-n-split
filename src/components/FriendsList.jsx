import React from 'react';
import Friend from './Friend';

const FriendsList = ({
  initialFriends,
  handleOnClickSplitBill,
  splitOpen,
  idSplitOpen,
}) => {
  return (
    <div>
      <ul>
        {initialFriends.map((friend, index) => (
          <Friend
            friend={friend}
            index={index}
            handleOnClickSplitBill={handleOnClickSplitBill}
            splitOpen={splitOpen}
            idSplitOpen={idSplitOpen}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
