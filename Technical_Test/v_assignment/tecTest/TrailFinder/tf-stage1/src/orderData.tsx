import { MouseEvent, useState } from "react";
import { Button } from 'antd';
import { Card } from 'antd';
import orders from "./orders.json";

interface testData {
    id: string,
    productName: string,
    dateOrdered: string,
    orderStatus: string,
}

const orderData = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [order, setOrders] = useState<testData[]>([])

    const hendleChange = (e:MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLInputElement;
        const buttonText = button.innerText
        let filterOrder = orders.filter((order) => {
            return order.orderStatus.toLowerCase() === buttonText.toLowerCase();
        })

        setOrders(filterOrder);
    }

    const dateFormat = (date: Date) => {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let formattedDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
        return formattedDate;
    }

    return (
        <div id="container">
            <div className="heading">
                <h2>Orders</h2>
                <Button value="accepted" onClick={hendleChange}>Accepted</Button>
                <Button value="InProgress" onClick={hendleChange}>InProgress</Button>
                <Button value="complete" onClick={hendleChange}>Complete</Button>
            </div>
            {
                order.length > 0 ? `Total Number of Orders: ${order.length}` : `Total Number of Orders: ${orders.length}`
            }
            {
                order.length > 0 ?
                    order.map((order: testData) => {
                        return (
                            <Card key={order.id}>
                                <p>{order.productName}</p>
                                <div className="order-info">
                                <div>
                                    Order Date
                                    <p>{dateFormat(new Date(Date.parse(order.dateOrdered)))}</p>
                                </div>
                                <div>
                                    Order Status
                                    <p className={order.orderStatus}>{order.orderStatus}</p>
                                </div>
                                </div>
                            </Card>
                        )
                    }) : orders.map((order: testData) => {
                        return (
                            <Card key={order.id}>
                                <p>{order.productName}</p>
                                <div className="order-info">
                                <div>
                                    Order Date
                                    <p>{dateFormat(new Date(Date.parse(order.dateOrdered)))}</p>
                                </div>
                                <div>
                                    Order Status
                                    <p className={order.orderStatus}>{order.orderStatus}</p>
                                </div>
                                </div>
                            </Card>
                        )
                    })
            }
        </div>
    );
};
export default orderData;
