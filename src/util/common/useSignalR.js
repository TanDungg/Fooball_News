import { useEffect, useState } from 'react';
import { getSignalRConnection } from './signalRServive';
import { BASE_URL_API } from '../../constants/config';

const useSignalR = (eventName) => {
  const [message, setMessage] = useState({ event: eventName, data: null });

  useEffect(() => {
    let connection;

    const setupSignalR = async () => {
      connection = await getSignalRConnection(`${BASE_URL_API}/chatHub`);
      const handleMessage = (data) => setMessage({ event: eventName, data });
      connection.on(eventName, handleMessage);
    };

    setupSignalR();

    return () => {
      if (connection) connection.off(eventName);
    };
  }, [eventName]);

  return message;
};

export default useSignalR;
