import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const OrderPDFGenerator = ({ order }) => {
  const generatePDF = () => {
    if (!order) return;

    const doc = new jsPDF();
    const { customer, cart, orderId } = order;

    doc.setFontSize(18);
    doc.text("Order Confirmation", 14, 20);
    doc.setFontSize(12);
    doc.text(`Order ID: ${orderId}`, 14, 30);
    doc.text(`Customer Name: ${customer.name}`, 14, 40);
    doc.text(`Email: ${customer.email}`, 14, 48);
    doc.text("Delivery Address:", 14, 58);

    const addressLines = customer.address.split("\n");
    addressLines.forEach((line, index) => {
      doc.text(line, 20, 66 + index * 6);
    });

    // Calculate start Y after address
    const tableStartY = 66 + addressLines.length * 6 + 10;

    // Table content
    autoTable(doc, {
      startY: tableStartY,
      head: [["#", "Poster", "Price (Rs.)"]],
      body: cart.map((item, index) => [
        index + 1,
        item.name,
        item.price.toString(),
      ]),
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    doc.text(`Total Price: Rs. ${total}`, 14, doc.lastAutoTable.finalY + 10);

    doc.save(`${orderId}_PosterCon_Receipt.pdf`);
  };

  return (
    <button
      onClick={generatePDF}
      className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
    >
      Download PDF
    </button>
  );
};

export default OrderPDFGenerator;
