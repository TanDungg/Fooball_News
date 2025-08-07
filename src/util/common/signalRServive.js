import * as signalR from '@microsoft/signalr';

let connection = null;
let connectionPromise = null;

export const getSignalRConnection = async (hubUrl) => {
  const token = localStorage.getItem('token');

  if (!connection) {
    connection = new signalR.HubConnectionBuilder()
      .withUrl(hubUrl, {
        accessTokenFactory: () => token,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .withAutomaticReconnect()
      .build();

    connectionPromise = connection
      .start()
      .then(() => console.log('SignalR connected'))
      .catch((error) => {
        console.error('SignalR Error: ', error);
        connection = null;
        connectionPromise = null;
      });
  }

  // Đảm bảo đợi kết nối xong
  if (connectionPromise) await connectionPromise;

  return connection;
};
