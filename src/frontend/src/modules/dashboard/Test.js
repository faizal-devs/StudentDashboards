// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';



// function Test() {
 
//     const [products, setProducts] = useState([]);
//     const [mydata, setdata] = useState([]);
//     const formatCurrency = (value) => {
//         return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
//     };
//     const mygetalldata =async () => {
//         var res=await axios.get('http://localhost:7800/getdata').then((res) => {
//              console.log(res.data);
//              setdata(res.data);
//          })
 
//         }
//     const priceBodyTemplate = (product) => {
//         return formatCurrency(product.price);
//     };

//     useEffect(() => {
//         mygetalldata.sortOrder().then(data => setProducts(data));
//     }, []);

//     return (
//         <div className="card">
//             <DataTable value={products} sortField="price" sortOrder={-1} tableStyle={{ minWidth: '50rem' }}>
//                 <Column field="code" header="Code" sortable style={{ width: '20%' }}></Column>
//                 <Column field="name" header="Name" sortable style={{ width: '20%' }}></Column>
//                 <Column field="price" header="Price" body={priceBodyTemplate} sortable style={{ width: '20%' }}></Column>
//                 <Column field="category" header="Category" sortable style={{ width: '20%' }}></Column>
//                 <Column field="quantity" header="Quantity" sortable style={{ width: '20%' }}></Column>
//             </DataTable>
//         </div>
//     );
// }

// export default Test;