import { MouseEvent } from 'react';
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

const App = () => {
    let navigate = useNavigate();
    const redirectToOrdersPage = async (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate("./orders", { replace: true });
    }
  return (
    <div>
        <Button type="primary" onClick={redirectToOrdersPage}>Go To Orders Page</Button>
    </div>
  );
};

export default App;
