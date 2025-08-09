import * as LucideIcons from 'lucide-react';
import * as FaIcons from 'react-icons/fa'; // FontAwesome Icons
import * as AiIcons from 'react-icons/ai'; // Ant Design Icons
import * as MdIcons from 'react-icons/md'; // Material Design Icons
import * as GiIcons from 'react-icons/gi'; // Game Icons
import * as TiIcons from 'react-icons/ti'; // Typicons
import * as BiIcons from 'react-icons/bi'; // Boxicons
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';

const Icons = {
  ...LucideIcons,
  ...FaIcons,
  ...AiIcons,
  ...MdIcons,
  ...GiIcons,
  ...TiIcons,
  ...BiIcons,
};

const dataMenu = [
  {
    key: 'HOME',
    label: 'Trang chủ',
    icon: 'MdHome',
    link: '/home',
  },
  {
    key: 'MATCH',
    label: 'Trận đấu',
    icon: 'FaFutbol',
    link: '/matches',
  },
  {
    key: 'TEAMS',
    label: 'Đội bóng',
    icon: 'GiSoccerKick',
    link: '/teams',
  },
  {
    key: 'TABLE',
    label: 'Bảng xếp hạng',
    icon: 'AiOutlineTable',
    link: '/standings',
  },
  {
    key: 'SCORERS',
    label: 'Vua phá lưới',
    icon: 'MdEmojiEvents',
    link: '/top-scorers',
  },
];

const Navigate = () => {
  const navigate = useNavigate();
  const [listMenu, setListMenu] = useState([]);
  const [keyMenu, setKeyMenu] = useState(null);

  useEffect(() => {
    const newData = dataMenu.map((item) => {
      const IconComponent = Icons[item.icon.trim()];
      return {
        ...item,
        key: item.key.toLowerCase(),
        icon: IconComponent ? <IconComponent size={14} /> : null,
      };
    });
    setListMenu(newData);
    setKeyMenu('home');
  }, []);

  const handleMenuClick = (data) => {
    const find_menu = listMenu
      .flatMap((item) => (item.children ? [item, ...item.children] : item))
      .find((i) => i.key === data.key);

    if (find_menu && find_menu.link) {
      setKeyMenu(find_menu.key);
      localStorage.setItem('key_menu', find_menu.key);
      navigate(find_menu.link);
    }
  };

  return (
    <Menu
      className="menu-navigate"
      selectedKeys={[keyMenu]}
      mode="horizontal"
      items={listMenu}
      onClick={handleMenuClick}
    />
  );
};

export default Navigate;
