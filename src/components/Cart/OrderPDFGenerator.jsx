import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const OrderPDFGenerator = ({ orderDetails, orderId }) => {
  const generatePDF = async () => {
    if (!orderDetails) return;

    const { customer, cart } = orderDetails;

    // Calculate totals
    const totalPosters = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const totalAmount = cart.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );

    // Delivery charge logic
    const calculateDeliveryCharge = () => {
      if (totalPosters <= 3 && totalAmount <= 297) {
        return 50;
      }
      return 0;
    };
    const deliveryCharge = calculateDeliveryCharge();
    const grandTotal = totalAmount + deliveryCharge;

    const doc = new jsPDF();

    // Load logo with proper aspect ratio
    const logoDataUrl = await fetch("/logo.png")
      .then(res => res.blob())
      .then(blob =>
        new Promise(resolve => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        })
      );

    const marginX = 14;
    const startY = 15;

    // Header
    doc.addImage(logoDataUrl, "PNG", marginX, startY, 40, 12);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("PosterCon", marginX + 48, startY + 8);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("postercon.vercel.app", marginX + 48, startY + 14);
    doc.text("For any queries, email us at postercon99@gmail.com", marginX + 48, startY + 20);
    doc.setDrawColor(0);
    doc.setLineWidth(0.4);
    doc.line(marginX, startY + 26, 196, startY + 26);

    // Order & customer info
    let currentY = startY + 35;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Order Confirmation", marginX, currentY);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    currentY += 8;
    doc.text(`Order ID: ${orderId}`, marginX, currentY);
    doc.text(`Date: ${new Date().toLocaleDateString("en-IN")}`, marginX + 90, currentY);
    currentY += 14;
    doc.setFont("helvetica", "bold");
    doc.text("Bill To:", marginX, currentY);
    currentY += 7;
    doc.setFont("helvetica", "normal");
    doc.text(customer.name, marginX, currentY);
    currentY += 6;
    doc.text(customer.email || "N/A", marginX, currentY);
    currentY += 6;
    const addressLines = customer.fullAddress.split("\n");
    addressLines.forEach(line => {
      doc.text(line, marginX + 4, currentY);
      currentY += 6;
    });

    // Order Items Table
    currentY += 10;
    autoTable(doc, {
      startY: currentY,
      margin: { left: marginX, right: marginX },
      head: [["#", "Poster", "Qty", "Price (Rs.)", "Total (Rs.)"]],
      body: cart.map((item, i) => [
        i + 1,
        item.name,
        item.quantity || 1,
        `Rs. ${item.price.toFixed(2)}`,
        `Rs. ${(item.price * (item.quantity || 1)).toFixed(2)}`,
      ]),
      theme: "grid",
      headStyles: {
        fillColor: 255,
        textColor: 0,
        fontStyle: "bold",
        lineWidth: 0.5,
        lineColor: 0,
        fontSize: 11,
      },
      bodyStyles: {
        fontSize: 10,
        textColor: 0,
      },
      columnStyles: {
        0: { halign: "center", cellWidth: 10 },
        1: { cellWidth: 90 },
        2: { halign: "center", cellWidth: 15 },
        3: { halign: "right", cellWidth: 30 },
        4: { halign: "right", cellWidth: 30 },
      },
    });

    // Total and Delivery Charge
    const totalY = doc.lastAutoTable.finalY + 8;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.text("Subtotal:", marginX + 115, totalY);
    doc.text(`Rs. ${totalAmount.toFixed(2)}`, marginX + 180, totalY, { align: "right" });

    if (deliveryCharge > 0) {
      const deliveryY = totalY + 8;
      doc.text("Delivery Charges:", marginX + 115, deliveryY);
      doc.text(`Rs. ${deliveryCharge.toFixed(2)}`, marginX + 180, deliveryY, { align: "right" });
    }

    const grandTotalY = totalY + (deliveryCharge > 0 ? 16 : 8);
    doc.setFontSize(14);
    doc.text("Grand Total:", marginX + 115, grandTotalY);
    doc.text(`Rs. ${grandTotal.toFixed(2)}`, marginX + 180, grandTotalY, { align: "right" });

    // Footer
    doc.setDrawColor(0);
    doc.setLineWidth(0.4);
    doc.line(marginX, 280, 196, 280);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(100);
    doc.text("Thank you for shopping with PosterCon!", marginX, 288);
    doc.text("Contact us: postercon99@gmail.com", marginX, 295);

    // Save PDF
    doc.save(`${orderId}_PosterCon_Receipt.pdf`);
  };

  return (
    <button
      onClick={generatePDF}
      className="mt-4 px-6 py-2 bg-black text-white rounded-lg shadow hover:bg-gray-800 transition"
    >
      Download PDF
    </button>
  );
};

export default OrderPDFGenerator;
