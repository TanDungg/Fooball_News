import { Menu } from 'antd';

const MenuCustom = ({ items, selectedKey, onClick }) => {
  return (
    <Menu
      className="menu-navigate"
      selectedKeys={[selectedKey]}
      mode="horizontal"
      items={
        items &&
        items.map((menu) => ({
          ...menu,
          key: menu.maMenu,
          label: menu.tenMenu,
        }))
      }
      onClick={onClick}
    />
  );
};

export default MenuCustom;
