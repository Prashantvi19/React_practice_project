import axios from 'axios';
import react, { useEffect, useState } from 'react';

let MyData = [''];



function ProfileMore() {

    const [printData, setData] = useState(MyData);

    useEffect(() => {
        printProfile();
    }, [""]);

    async function printProfile() {
        const Data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
         console.log(Data.data);
        setData(Data.data)
    }

    return (
        <>
            <h1>More.......</h1>
            <h4>User ID : {printData.userId}</h4>
            <h4>ID : {printData.id}</h4>
            <h4>Title : {printData.title}</h4>          
        </>

    );
}
export default ProfileMore;