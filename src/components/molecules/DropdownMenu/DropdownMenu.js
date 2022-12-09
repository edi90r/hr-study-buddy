import { useState } from 'react';
import {
  Wrapper,
  DropdownButton,
  MenuList,
  ListItem,
} from './DropdownMenu.styles';

const DropdownMenu = ({ dropDownTitle, dropDownIcon, list = [] }) => {
  const [active, setActive] = useState(false);

  const handleStateActive = () => {
    setActive(!active);
  };

  return (
    <Wrapper>
      <DropdownButton icon={dropDownIcon} onClick={handleStateActive}>
        {dropDownTitle}
      </DropdownButton>
      <MenuList active={active}>
        {list.map((item, index) => (
          <ListItem to={`/group/${item}`} key={index}>
            {item}
          </ListItem>
        ))}
      </MenuList>
    </Wrapper>
  );
};

export default DropdownMenu;
