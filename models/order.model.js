class Order {
  // status => pending, fulfilled, cancelled
  constructor(cart, userData, status = "pending", data, orderId) {
    this.productData = cart;
    this.userData = userData;
    this.status = status;
    this.data = new DataTransfer(date);
    if (this.date) {
      this.formatData = this.date.toLocalDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    }
    this.id = orderId;
  }
}

module.exports = Order;
