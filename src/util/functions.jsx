export const handleKiemTraToken = (token) => {
  if (!token) return true;

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp;
    const now = Math.floor(Date.now() / 1000);
    return exp < now;
  } catch (e) {
    console.error('', e);
    return true;
  }
};

export const convertToParams = (data) => {
  if (!data || typeof data !== 'object') return '';

  return Object.entries(data)
    .filter(([_, value]) => value !== undefined && value !== null && !Array.isArray(value))
    .map(([key, value]) => {
      let encodedValue;

      if (typeof value === 'object') {
        // Với object: stringify rồi encode
        encodedValue = encodeURIComponent(JSON.stringify(value));
      } else {
        // Với primitive
        encodedValue = encodeURIComponent(value);
      }

      return `${encodeURIComponent(key)}=${encodedValue}`;
    })
    .join('&');
};

export const handleTinhThoiGian = (thoiGianNhan) => {
  const [day, month, yearAndTime] = thoiGianNhan.split('/');
  const [year, time] = yearAndTime.split(' ');
  const dateStr = `${year}-${month}-${day}T${time}`;
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now - date;

  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);

  // Lấy ngày của "hôm qua"
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);

  const isYesterday =
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear();

  if (diffSec < 60) return `${diffSec} giây trước`;
  if (diffMin < 60) return `${diffMin} phút trước`;
  if (diffHour < 24) return `${diffHour} giờ trước`;
  if (isYesterday) return 'Hôm qua';

  // Trả về định dạng rút gọn
  return `${day}/${month}/${year}`;
};

export const getFileIcon = (ext) => {
  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return '🖼️';
  if (['pdf'].includes(ext)) return '📄';
  if (['doc', 'docx'].includes(ext)) return '📝';
  if (['xls', 'xlsx'].includes(ext)) return '📊';
  if (['zip', 'rar'].includes(ext)) return '📦';
  return '📁';
};

export const LayDuoiFile = (file) => {
  return file.split('.').pop();
};

export const isSticker = (url) => {
  if (!url || typeof url !== 'string') return false;
  return (
    url.startsWith('http') && (url.includes('giphy.com/media') || url.match(/\.(gif|webp|png)$/))
  );
};
