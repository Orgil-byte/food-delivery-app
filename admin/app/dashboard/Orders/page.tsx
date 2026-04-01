import { foodOrderApi } from "@/lib/api/admin-orders";
import { OrderMainContents } from "./orderMainContents";
import { Order } from "@/lib/app-api-data-types";

const OrdersMain = async () => {
  const data = await foodOrderApi();
  const ordersData: Order[] = Array.isArray(data?.orders) ? data.orders : [];

  return (
    <div>
      <OrderMainContents ordersData={ordersData} />
    </div>
  );
};

export default OrdersMain;
