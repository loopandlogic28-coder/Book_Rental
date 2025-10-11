// backend/excelUtils.js
//good sahi hai yeh runn ho rha but /order hai na uske detials ko store karne k liye 
/*
import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';

// Create the workbook and worksheet if they don't exist
const createWorkbook = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Orders');

    worksheet.columns = [
        { header: 'Order ID', key: 'orderId', width: 20 },
        { header: 'User ID', key: 'userId', width: 30 },
        { header: 'Product ID', key: 'productId', width: 20 },
        { header: 'Product Name', key: 'productName', width: 30 },
        { header: 'Amount', key: 'amount', width: 15 },
        { header: 'Date', key: 'date', width: 20 },
    ];

    return { workbook, worksheet };
};

const saveOrderToExcel = async (order) => {
    const filePath = path.join(process.cwd(), 'data', 'orders.xlsx'); // Use process.cwd() for current working directory

    // Ensure the data directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    let workbook;
    let worksheet;

    try {
        workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        worksheet = workbook.getWorksheet('Orders');
    } catch (error) {
        const { workbook: newWorkbook, worksheet: newWorksheet } = await createWorkbook();
        workbook = newWorkbook;
        worksheet = newWorksheet;
    }

    worksheet.addRow({
        orderId: order._id,
        userId: order.userId,
        productId: order.items.map(item => item.productId).join(', '),
        productName: order.items.map(item => item.name).join(', '),
        amount: order.amount,
        date: new Date().toISOString(),
    });

    await workbook.xlsx.writeFile(filePath);
};

export { saveOrderToExcel };
*/

import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';

// Create the workbook and worksheet if they don't exist
const createWorkbook = async () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Orders');

    worksheet.columns = [
        { header: 'Order ID', key: 'orderId', width: 20 },
        { header: 'User ID', key: 'userId', width: 30 },
        { header: 'First Name', key: 'firstName', width: 20 },
        { header: 'Last Name', key: 'lastName', width: 20 },
        { header: 'Email', key: 'email', width: 30 },
        { header: 'Street', key: 'street', width: 30 },
        { header: 'City', key: 'city', width: 20 },
        { header: 'State', key: 'state', width: 20 },
        { header: 'Country', key: 'country', width: 20 },
        { header: 'Zip Code', key: 'zipCode', width: 10 },
        { header: 'Phone', key: 'phone', width: 15 },
        { header: 'Product IDs', key: 'productIds', width: 50 },
        { header: 'Product Names', key: 'productNames', width: 50 },
        { header: 'Amount', key: 'amount', width: 15 },
        { header: 'Payment Status', key: 'paymentStatus', width: 20 },
        { header: 'Date', key: 'date', width: 20 },
    ];

    return { workbook, worksheet };
};

const saveOrderToExcel = async (order, userDetails = {}, paymentStatus) => {
    const filePath = path.join(process.cwd(), 'data', 'orders.xlsx'); // Use process.cwd() for current working directory

    // Ensure the data directory exists
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    let workbook;
    let worksheet;

    try {
        workbook = new ExcelJS.Workbook();
        await workbook.xlsx.readFile(filePath);
        worksheet = workbook.getWorksheet('Orders');
    } catch (error) {
        const { workbook: newWorkbook, worksheet: newWorksheet } = await createWorkbook();
        workbook = newWorkbook;
        worksheet = newWorksheet;
    }

    worksheet.addRow({
        orderId: order._id,
        userId: order.userId,
        firstName: userDetails.firstName || 'N/A',
        lastName: userDetails.lastName || 'N/A',
        email: userDetails.email || 'N/A',
        street: userDetails.street || 'N/A',
        city: userDetails.city || 'N/A',
        state: userDetails.state || 'N/A',
        country: userDetails.country || 'N/A',
        zipCode: userDetails.zipcode || 'N/A',
        phone: userDetails.phone || 'N/A',
        productIds: order.items.map(item => item.productId).join(', '),
        productNames: order.items.map(item => item.name).join(', '),
        amount: order.amount,
        paymentStatus: paymentStatus,
        date: new Date().toISOString(),
    });

    await workbook.xlsx.writeFile(filePath);
};

export { saveOrderToExcel };
