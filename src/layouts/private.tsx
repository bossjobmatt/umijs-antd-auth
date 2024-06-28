import { Outlet } from 'umi';

// interface PrivateLayoutProps {
//   children: React.ReactNode
// }

const PrivateLayout = () => {
  return (
    <div className="private">
      <div>private layout</div>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
