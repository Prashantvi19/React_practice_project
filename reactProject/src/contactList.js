
import React, { useEffect, useState } from 'react';
import axios from 'axios';

let MyData = [''];
function ContactList() {

    const [getContacts, setContacts] = useState(MyData);

    useEffect(() => {
        Contact();
    }, ['']);
    // <!DOCTYPE html>
    // <html>
    // <head>
    // <style>
    // table { 
    //   font-family: arial, sans-serif;
    //   border-collapse: collapse;
    //   width: 100%;
    // }

    // td, th {
    //   border: 1px sol  #dddddd;
    //   text-align: left;
    //   padding: 8px;
    // }

    // tr:nth-child(even) {
    //   background-color: #dddddd;
    // }
    // </style>
    // </head>
    // <body>

    // <h2>HTML Table</h2>

    // 
    // </body>
    // </html>

    async function Contact() {
        const contact = await axios.get('http://127.0.0.1:8000/api/reactGetContact');
        console.log(contact.data.contacts);
        MyData = contact.data.contacts;
        setContacts(MyData);


    }
    let css =
    {
        'tdAndTr': {
            'border': '1px solid #dddddd',
            'text-align': 'screenLeft',
            'padding': '8px'
        },
        'table': {
            'font-family': 'arial, sans-serif',
            'border-collapse': 'collapse',
            ' width': '100% '
        }
    };
    return (<>
        <table style={css['table']} >
            <tr style={css['tdAndTr']} >
                <th >ID</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>City</th>
                <th>Create At</th>
            </tr>
            {getContacts.map((con) => <tr style={css['tdAndTr']} key={con.id}>
                <td style={css['tdAndTr']} >{con.id}</td>
                <td style={css['tdAndTr']} >{con.name}</td>
                <td style={css['tdAndTr']} >{con.contact}</td>
                <td style={css['tdAndTr']} >{con.email}</td>
                <td style={css['tdAndTr']} >{con.city}</td>
                <td style={css['tdAndTr']} >{con.created_at}</td>
            </tr>)}
        </table>
    </>);
}
export default ContactList;