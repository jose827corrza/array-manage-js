const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 500,
      delivered: true,
    },
  ]

const filteredOrders = orders.filter(item => item.delivered && item.total > 250)

console.log(orders);
console.log(filteredOrders);

// We can go deeper
const search =(query) => {
    return orders.filter(item => {
        return item.customerName.includes(query)
    })
}

console.log(search('V'));
