import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

function Admin() {
    const [data, setData] = useState([
        { sNo: "1", userName: "Varun12", userEmailID: "varun@gmail.com", userPhone: "7891234567" },
        { sNo: "1", userName: "Suresh_69", userEmailID: "suresh@gmail.com", userPhone: "8791234567" },
        { sNo: "2", userName: "Mohan120", userEmailID: "mohan120@gmail.com", userPhone: "9871234567" }
    ]);

    const handleDelete = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>SNo</th>
                    <th>UserName</th>
                    <th>EMailID</th>
                    <th>MobileNumber</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.sNo}</td>
                        <td>{item.userName}</td>
                        <td>{item.userEmailID}</td>
                        <td>{item.userPhone}</td>
                        <td>
                            <Button variant="danger" onClick={() => handleDelete(index)}>
                                Delete
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default Admin;

