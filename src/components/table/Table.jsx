import React from 'react'
import "./table.scss"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function Tables() {

    const rows = [
        {
            id: 1143155,
            product: "BYD Seagull Fly Edition",
            img: "https://aliyun-hk03-cdn.hcwebsite.com/7801b27384b660b81404f495471367cd/data/thumb/res/en/20230523/45e3e8b736c36c24.jpg_20230523143041_1920x0.jpg?v=Zb2ljtqg",
            customer: "John Smith",
            date: "1 March",
            amount: 25,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 1232299,
            product: "BYD E2 Luxury Edition",
            img: "https://frankfurt.apollo.olxcdn.com/v1/files/r7jo75cihwuk2-UZ/image",
            customer: "John Smith",
            date: "1 March",
            amount: 30,
            method: "Cash on Delivery",
            status: "Pending"
        },
        {
            id: 2354980,
            product: "BYD Song Champion",
            img: "https://trianonmotors.uz/image/catalog/avtomobil-vnedorozhnik-BYD-Song-Plus-EV---1687867654660741373_big--23062715072998023200.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 58,
            method: "Cash on Delivery",
            status: "Pending"
        },
        {
            id: 1148674,
            product: "BYD Song Champion",
            img: "https://i0.wp.com/citymagazine.si/wp-content/uploads/2023/03/BYD-HAN-0106.jpg?fit=908%2C558&ssl=1",
            customer: "John Smith",
            date: "1 March",
            amount: 58,
            method: "Cash on Delivery",
            status: "Approved"
        },
        {
            id: 1126674,
            product: "BYD Song Champion",
            img: "https://i0.wp.com/citymagazine.si/wp-content/uploads/2023/03/BYD-HAN-0106.jpg?fit=908%2C558&ssl=1",
            customer: "John Smith",
            date: "1 March",
            amount: 58,
            method: "Cash on Delivery",
            status: "Approved"
        },
      ];

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="tableCell">{row.id}</TableCell>
              <TableCell align="tableCell">
                <div className="collWrapper">
                    <img src={row.img} alt="" className='image' />
                    {row.product}
                </div>
              </TableCell>
              <TableCell align="tableCell">{row.customer}</TableCell>
              <TableCell align="tableCell">{row.date}</TableCell>
              <TableCell align="tableCell">{row.amount}</TableCell>
              <TableCell align="tableCell">{row.method}</TableCell>
              <TableCell align="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Tables