import React, { useState } from 'react';
import Button from './Button';

const FormAddFriend = ({ setInitialFriends, initialFriends }) => {
  const [newName, setNewName] = useState('');
  const [newImage, setNewImage] = useState(
    `https://i.pravatar.cc/48?u=${Math.floor(
      100000 + Math.random() * 900000
    )}`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFriend = {
      id: Date.now(), // generate a unique id based on the current time
      name: newName,
      image: newImage,
      balance: 0,
    };
    setInitialFriends([...initialFriends, newFriend]);
    setNewName('');
    setNewImage(
      `https://i.pravatar.cc/48?u=${Math.floor(
        100000 + Math.random() * 900000
      )}`
    );
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨🏼‍🦰 Friend name</label>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <label>🌅 Image URL</label>
      <input
        type="text"
        value={newImage}
        onChange={(e) => setNewImage(e.target.value)}
      />
      <Button type="submit">Add Friend</Button>
    </form>
  );
};

export default FormAddFriend;
