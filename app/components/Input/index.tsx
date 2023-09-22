import styles from "./index.module.css";
import { Form, Input } from 'antd';
const { TextArea } = Input;

interface ItemProps {
    label: string;
    name: string;
}


const InputItem: React.FC<ItemProps> = ({ label, name }) => {
    return (
        <Form.Item label={label} name={name}>
            <TextArea />
        </Form.Item>
    );
}

export default InputItem;
