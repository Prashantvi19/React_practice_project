import axios from 'axios';
import react, { useEffect, useState } from 'react';

let MyData = [''];
let MyData2 = [''];
let MyData3 = [''];
MyData3['btn'] = 'button';




function Profile() {

    const [printData, setData] = useState(MyData);
    const [printData2, setData2] = useState(MyData2);
    const [printData3, setData3] = useState(MyData3);
    useEffect(() => {
        printProfile();
    }, [""]);

    async function printProfile() {
        const Data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        MyData = Data.data;
        console.log(MyData);
        setData(MyData)
        const Data2 = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        MyData2 = Data2.data;



    }

    function ProfileMore() {
        setData2(MyData2)
        MyData3 = {
            'name': 'More.......',
            'userid': 'User ID :',
            'id': 'ID :',
            'title': 'Title :',
            'btn':'hidden'
        }

        setData3(MyData3)

    }

    return (
        <>
            <h1>Profile</h1>
            <h4>User ID : {printData.userId}</h4>
            <h4>ID : {printData.id}</h4>
            <h4>Title : {printData.title}</h4>
            <br />
            <br />

            <h1>{printData3.name}</h1>
            <h4>{printData3.userid} {printData2.userId}</h4>
            <h4>{printData3.id} {printData2.id}</h4>
            <h4>{printData3.title} {printData2.title}</h4>


            <input onClick={() => ProfileMore()} type={printData3.btn} value='On Click' />




        </>

    );

}


export { Profile };