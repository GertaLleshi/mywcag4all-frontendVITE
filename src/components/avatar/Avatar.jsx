import React, { useState } from 'react';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';

const AvatarSelection = () => {
  // Available avatars for selection
  const avatars = [
    { id: 1, name: 'Avatar 1', src: '/accessibility-dev/src/img/IMG_6157.jpg' },
    { id: 2, name: 'Avatar 2', src: '/accessibility-dev/src/img/IMG_6037.jpg' },
    { id: 3, name: 'Avatar 3', src: '/accessibility-dev/src/img/IMG_6039.png' },
    { id: 4, name: 'Avatar 4', src: '/accessibility-dev/src/img/IMG_6038.jpg' }
  ];

  const [selectedAvatar, setSelectedAvatar] = useState(avatars[0]); // Default avatar

  // Handle avatar selection
  const handleSelectAvatar = (avatarId) => {
    const avatar = avatars.find((item) => item.id === avatarId);
    setSelectedAvatar(avatar);
  };

  return (
    <div className="avatar-selection">
      <h3>Modifica il tuo Avatar</h3>

      {/* Avatar Display */}
      <div className="avatar-display">
        <img 
          src={selectedAvatar.src} 
          class="rounded-circle border border-info"
          alt={selectedAvatar.name} 
          className="avatar-img"
          width={100}
          height={100}
          roundedCircle
        />
        <p>{selectedAvatar.name}</p>
      </div>

      {/* Dropdown for selecting avatar */}
      <DropdownButton
        as={ButtonGroup}
        variant="success"
        title="Scegli Avatar"
        onSelect={(e) => handleSelectAvatar(Number(e))}
      >
        {avatars.map((avatar) => (
          <Dropdown.Item key={avatar.id} eventKey={avatar.id}>
            {avatar.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default AvatarSelection;





