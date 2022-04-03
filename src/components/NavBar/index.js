import { useRecoilState } from 'recoil';

import NavItem from './NavItem';
import { navMenus } from '../../constants';
import { currentMenuNo } from '../../atoms';
import './styles.scss';

const NavBar = () => {
  const [selectedMenu, setSelectedMenu] = useRecoilState(currentMenuNo);

  const handleMenuClick = (menuNo) => {
    setSelectedMenu(menuNo);
  };

  return (
    <ul className="menu-list">
      {navMenus.map(({ title, sub }, i) => (
        <NavItem key={i} title={title} sub={sub} selected={selectedMenu === i} onClick={handleMenuClick.bind(null, i)} />
      ))}
    </ul>
  );
};

export default NavBar;
