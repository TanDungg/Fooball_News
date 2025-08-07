import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from './Home/Home';
import SanPham from './SanPham/SanPham';
import SanPhamForm from './SanPham/SanPhamForm';
import KhachHang from './KhachHang/KhachHang';
import KhachHangForm from './KhachHang/KhachHangForm';
import ThongTin from './ThongTin/ThongTin';

const AppRoutes = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="div-container">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/san-pham" element={<SanPham />} />
          <Route path="/san-pham/them-moi" element={<SanPhamForm />} />
          <Route path="/khach-hang" element={<KhachHang />} />
          <Route path="/khach-hang/them-moi" element={<KhachHangForm />} />
          <Route path="/thong-tin" element={<ThongTin />} />
        </Routes>
        <Footer />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AppRoutes;
