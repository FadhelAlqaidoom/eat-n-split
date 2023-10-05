import React, { useState } from 'react';
import Button from './components/Button';
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import FormSplit from './components/FormSplit';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [splitOpen, setSplitOpen] = useState(false);
  const [idSplitOpen, setIdSplitOpen] = useState(0);
  const [initialFriends, setInitialFriends] = useState([
    {
      id: 118836,
      name: 'Clark',
      image: 'https://i.pravatar.cc/48?u=118836',
      balance: -7,
    },
    {
      id: 933372,
      name: 'Sarah',
      image: 'https://i.pravatar.cc/48?u=933372',
      balance: 20,
    },
    {
      id: 499476,
      name: 'Anthony',
      image: 'https://i.pravatar.cc/48?u=499476',
      balance: 0,
    },
  ]);

  const handleOnClickSplitBill = (id) => {
    if (id === idSplitOpen) setSplitOpen(!splitOpen);
    else if (idSplitOpen === 0) setSplitOpen(!splitOpen);

    setIdSplitOpen(id);
  };
  const handleOnClickAddFriend = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          initialFriends={initialFriends}
          handleOnClickSplitBill={handleOnClickSplitBill}
          splitOpen={splitOpen}
          idSplitOpen={idSplitOpen}
        />
        {isOpen ? (
          <FormAddFriend
            setInitialFriends={setInitialFriends}
            initialFriends={initialFriends}
          />
        ) : (
          ''
        )}

        <Button onClick={handleOnClickAddFriend}>
          {!isOpen ? 'Add Friend' : 'close'}
        </Button>
      </div>
      <div>
        {splitOpen ? (
          <FormSplit
            initialFriends={initialFriends}
            setInitialFriends={setInitialFriends}
            idSplitOpen={idSplitOpen}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default App;
