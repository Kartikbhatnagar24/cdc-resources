import { Table } from "antd";
import { columns, data } from "./tablesData";

const TablesPage = () => {
    
    return (
        <div className="mx-auto max-w-4xl py-6">
            <Table columns={columns} dataSource={data} />
        </div>
    );
}

export default TablesPage;