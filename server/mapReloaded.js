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
  ]

const newOrders = orders.map(item => {
    // CRASO ERROR!!!
    // THOUSAND WAYS TO DIE AS JS DEVELOPER
    // item.tax = .19
    // return item

    return {
        ...item,
        tax: .19
    }
})

console.log(orders);
console.log(newOrders);