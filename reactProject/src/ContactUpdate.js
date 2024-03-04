import axios from 'axios';
import React, { useEffect, useState } from 'react';


function ContactUpdate(props) {
    let MyData = ['']
    const [getData, setData] = useState(MyData);
    const [getId, setId] = useState(MyData);
    const [getName, setName] = useState(MyData);
    const [getEmail, setEmail] = useState(MyData);
    const [getContact, setContact] = useState(MyData);
    const [getCity, setCity] = useState(MyData);
    const [getug, setug] = useState(MyData);
    const [getMsgg, setMsgg] = useState(MyData);
    const [getStatus, setStatus] = useState(MyData);
    const [getMsgColor, setMsgColor] = useState(MyData);

    const conId = props.contactId;
    // const conIId = 128;

    useEffect(() => {
        ContactFind();
    }, ['']);

    async function ContactFind() {
        const findData = {
            method: 'POST',
            url: "http://127.0.0.1:8000/api/reactFindUpdateContact",
            data: {
                id: conId
            }
        };
        axios(findData)
            .then((result) => {
                MyData = result.data.contacts;
                // setData(MyData);
                console.log(MyData);
            })
            .catch((e) => {
                console.log(e);
            });
        setId(MyData.id);
        setName(MyData.name); 
        setEmail(MyData.email);
        setContact(MyData.contact);
        setCity(MyData.city);
    }
    const name = (e) => {
        setName(e.target.value);
    }
    const email = (e) => {
        setEmail(e.target.value);
    }
    const contact = (e) => {
        setContact(e.target.value);
    }
    const city = (e) => {
        setCity(e.target.value);
    }


    let status = null;
    function updateData() {
        const data = {
            method: 'POST',
            url: "http://127.0.0.1:8000/api/reactUpdateContactID",
            data: {
                id: getId,
                name: getName,
                email: getEmail,
                contact: getContact,
                city: getCity,
            }

        };
        axios(data)
            .then((result) => {
                status = result.data.status;
                console.log(status);
                setug(result.data.message);
                console.log(result.data.message);
            })
            .catch((e) => {
                console.log(e);
                setStatus(e);
            });

        if (status === true) {

            setMsgg(`thanks!!!${getug}`);

            setMsgColor('Green');
        } else {
            setMsgg(`oops!!!${getug}`);
            setMsgColor('Red');
        }
        console.log(getMsgColor);
    }

    return (
        <>
            <h1> Hello Prashant</h1>
            {/* <form> */}
            <form>
                <h1>{conId}</h1>
                <h4 style={{ color: getMsgColor }}>{getug}</h4>
                <label >First Name</label>
                <input type="text" id="fname" name="name" placeholder="Your name.." onChange={name} value={getName} /><br />
                <label >Email ID</label>
                <input type="email" id="email" name="email" placeholder="Your Email.." onChange={email} value={getEmail} /><br />
                <label >Contact </label>
                <input type="number" id="contact" name="contact" placeholder="Your Contact.." onChange={contact} value={getContact} /><br />
                <label  >City</label>
                <select id="city" name="city" onChange={city} value={getCity} >
                    <option value="" >Select City</option>
                    <option value="Indore" >Indore</option>
                    <option value="Bhopal">Bhopal</option>
                    <option value="Jabalpur">Jabalpur</option>
                </select><br />
                <input type="button" name="button" value="Submit" onClick={() => updateData()} /><br />
            </form>
        </>
    );
}

export default ContactUpdate;