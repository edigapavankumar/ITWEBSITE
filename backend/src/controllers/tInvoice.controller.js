import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import User from "../models/users.model.js";

export const generateThirdPartyInvoice = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Please provide an email" });
        }

        const user = await User.findOne({ email }).populate("companyId");

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.role !== "thirdParty") {
            return res.status(403).json({ message: "User is not a third-party employee" });
        }

        const today = new Date();
        const lastMonth = new Date();
        lastMonth.setMonth(today.getMonth() - 1);

        const payments = user.paymentHistory.filter(payment =>
            payment.paymentDate >= lastMonth && payment.paymentDate <= today
        );

        if (payments.length === 0) {
            return res.status(404).json({ message: "No payment records found for the last month" });
        }

        const doc = new PDFDocument();
        const monthName = new Date().toLocaleString("en-US", { month: "short" });
        const invoicePath = path.join("invoices", `${user.firstName}_${user.lastName}_invoice_${monthName}.pdf`);
        const stream = fs.createWriteStream(invoicePath);
        doc.pipe(stream);

        // Title
        doc.font("Times-Bold").fontSize(18).text(`Third-Party Employee Invoice`, { align: "center" });
        doc.moveDown();

        // Employee & Company Details
        doc.font("Helvetica").fontSize(14).text(`Employee: ${user.firstName} ${user.lastName}`);
        doc.text(`Email: ${user.email}`);
        doc.text(`Role: ${user.role}`);
        doc.text(`Company ID: ${user.companyId?._id || "N/A"}`);
        doc.text(`Date: ${new Date().toLocaleDateString()}`);
        doc.moveDown();

        // Table Headers
        let tableTop = 220;
        const startX = 50;
        const col1 = startX;
        const col2 = col1 + 200;

        doc.font("Helvetica-Bold");
        doc.text("Date", col1, tableTop);
        doc.text("Amount", col2, tableTop);
        doc.moveDown();

        // Draw table lines
        doc.moveTo(startX, tableTop + 15)
            .lineTo(col2 + 100, tableTop + 15)
            .stroke();

        doc.font("Helvetica");
        let yPosition = tableTop + 30;
        let totalAmount = 0;

        // Table Rows
        payments.forEach(payment => {
            doc.text(payment.paymentDate.toDateString(), col1, yPosition);
            doc.text(payment.amount.toString(), col2, yPosition);
            yPosition += 20;

            totalAmount += payment.amount;
        });

        // Draw another line after table
        doc.moveTo(startX, yPosition + 5)
            .lineTo(col2 + 100, yPosition + 5)
            .stroke();

        // Total Amount
        doc.font("Helvetica-Bold");
        doc.text("Total:", col1, yPosition + 10);
        doc.text(totalAmount.toString(), col2, yPosition + 10);

        doc.end();

        stream.on("finish", () => {
            res.download(invoicePath, `${user.firstName}_${user.lastName}_invoice_${monthName}.pdf`);
        });

    } catch (error) {
        console.error("Error generating invoice:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
