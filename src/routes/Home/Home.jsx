import { useEffect } from 'react';
import './HomeStyles.scss';

const Home = () => {
  useEffect(() => {}, []);

  // const getListMessage = () => {
  //   new Promise((resolve, reject) => {
  //     dispatch(fetchStart('Chat/list-message', 'GET', null, '', '', resolve, reject));
  //   })
  //     .then((res) => {
  //       if (res && res.status === 200) {
  //         setListMessage(res.data);
  //         // const groupItems = res.data.filter((item) => item.isNhom);
  //         // groupItems.forEach((group) => {
  //         //   connection
  //         //     .invoke('JoinGroup', group.id.toString())
  //         //     .catch((err) => console.error(`JoinGroup ${group.id} error:`, err));
  //         // });
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // };

  return (
    <div className="home-container">
      <h1 style={{ color: 'red', fontWeight: 600 }}>Trang tin tức bóng đá</h1>
    </div>
  );
};

export default Home;
