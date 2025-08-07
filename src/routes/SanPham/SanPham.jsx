import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const SanPham = () => {
  const navigate = useNavigate();

  const handleAddNew = () => {
    navigate("them-moi");
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <p>Đây là trang Sản Phẩm.</p>
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

export default SanPham;
