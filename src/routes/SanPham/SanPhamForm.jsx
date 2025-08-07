import { RollbackOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const SanPhamForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    let newPath = location.pathname.replace("/them-moi", "");

    navigate(newPath);
  };

  return (
    <div>
      <h2>➕ Thêm / Chỉnh sửa sản phẩm</h2>
      <p>Đây là trang thêm hoặc chỉnh sửa sản phẩm.</p>
      <Button type="default" icon={<RollbackOutlined />} onClick={goBack}>
        Quay lại
      </Button>
    </div>
  );
};

export default SanPhamForm;
