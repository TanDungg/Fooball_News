import { BASE_URL_API } from '../../constants/config';
import helpers from '../../helpers';

export const fetchStart = (
  url,
  method = 'GET',
  data = null,
  type,
  token = '',
  resolve,
  reject,
  isUpload = false,
  isExternal = false // ✅ Phân biệt API ngoài
) => {
  return async (dispatch) => {
    const tokenFromStorage = localStorage.getItem('token');

    const headers = {};

    // Gắn Content-Type nếu không upload
    if (!isUpload) {
      headers['Content-Type'] = 'application/json';
    }

    // Xử lý token
    if (isExternal) {
      // ✅ Gọi API ngoài (Football-Data)
      if (token) headers['X-Auth-Token'] = token;
    } else {
      // ✅ Gọi API nội bộ
      if (token || tokenFromStorage) {
        headers['Authorization'] = `Bearer ${token || tokenFromStorage}`;
      }
    }

    // Xử lý body
    const body =
      method === 'GET'
        ? null
        : isUpload
        ? data // FormData
        : JSON.stringify(data);

    // Xác định URL
    const fullUrl = isExternal ? url : `${BASE_URL_API}/api/${url}`;

    try {
      const response = await fetch(fullUrl, {
        method,
        headers,
        body,
      });

      const contentType = response.headers.get('content-type');
      const responseData = contentType?.includes('application/json')
        ? await response.json()
        : await response.text();

      const result = {
        status: response.status,
        ok: response.ok,
        data: responseData,
      };

      if (result.ok) {
        if (typeof type === 'function') {
          dispatch(type(result.data));
        } else if (typeof type === 'string') {
          dispatch({ type, payload: result.data });
        }

        if (typeof resolve === 'function') {
          resolve(result);
        }
      } else {
        const msg =
          result.status === 500
            ? 'Lỗi Server!'
            : typeof result.data === 'string'
            ? result.data
            : 'Lỗi Front-end!';
        helpers.error(msg);

        if (typeof reject === 'function') {
          reject({ ...result, isUpload });
        }
      }
    } catch (error) {
      console.error('fetchStart error:', error);
      helpers.error('Không kết nối được server!');
      if (typeof reject === 'function') {
        reject({ error, isUpload });
      }
    }
  };
};
