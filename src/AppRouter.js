import App from './App';

//user
import Login from './page/user/Login';

//order page
import OrderList from './page/board/OrderList';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/OrderList" element={<OrderList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
