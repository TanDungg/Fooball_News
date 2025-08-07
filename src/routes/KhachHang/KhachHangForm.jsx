import { RollbackOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const KhachHangForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    let newPath = location.pathname.replace("/them-moi", "");

    navigate(newPath);
  };

  return (
    <div>
      <h2>➕ Thêm / Chỉnh sửa khách hàng</h2>
      <p>Đây là trang thêm hoặc chỉnh sửa khách hàng.</p>
      <Button type="default" icon={<RollbackOutlined />} onClick={goBack}>
        Quay lại
      </Button>
    </div>
  );
};

export default KhachHangForm;
