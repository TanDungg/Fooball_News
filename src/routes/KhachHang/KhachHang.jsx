import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const KhachHang = () => {
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("them-moi");
  };

  return (
    <div>
      <h2>Danh sách khách hàng</h2>
      <p>Đây là trang Khách Hàng.</p>
      <Button
        type="primary"
        onClick={() => handleAddNew()}
        icon={<PlusCircleOutlined />}
      >
        Thêm mới
      </Button>
    </div>
  );
};

export default KhachHang;
