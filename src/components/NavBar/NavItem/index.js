const NavItem = ({ title, sub, selected, onClick }) => {
  return (
    <li className={`menu-btn${selected ? ' selected' : ''}`} onClick={onClick}>
      <p className="menu-title">{title}</p>
      <small>{sub}</small>
    </li>
  );
};

export default NavItem;
