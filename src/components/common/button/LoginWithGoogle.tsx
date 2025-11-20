import { GoogleOutlined } from "@ant-design/icons";
import { Button } from "antd";

const LoginWithGoogle = () => {
    return (
        <Button className="w-full mb-5!" variant="solid" icon={<GoogleOutlined />}>
            Sign in with google
        </Button>
    );
};

export default LoginWithGoogle;