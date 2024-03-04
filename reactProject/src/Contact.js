import axios from 'axios';
import React, { useEffect, useState } from 'react';



function Contact() {

    const [getName, setName] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getContact, setContact] = useState('');
    const [getCity, setCity] = useState('');
    const [getStatus, setStatus] = useState('');
    const [getmsg, setmsg] = useState('');
    const [getmsg2, setmsg2] = useState('');
    const [getMsgColor, setMsgColor] = useState('');
    const [getMsgg, setMsgg] = useState('');
    const [getug, setug] = useState('');




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
console.log(getName);

    function saveData() {
        const msg = '';
        const data = {
            method: 'POST',
            url: "http://127.0.0.1:8000/api/reactSaveData",
            data: {
                name: getName,
                email: getEmail,
                contact: getContact,
                city: getCity,
            }

        };
        axios(data)
            .then((result) => {
                console.log(result.data.status);
                setStatus(result.data.status);
                setug(result.data.message);
                // console.log(msg);
            })
            .catch((e) => {
                console.log(e);
                setStatus(e);
            });


        if (getStatus === true) {

            setMsgg(`thanks!!!${getug}`);
            // setmsg('Thanks!');
            // setmsg2('your data Successfully Submitted');
            // setName('');
            // setEmail('');
            // setContact('');
            // setCity('');
            // setStatus('');
            // setmsg('');
            // setmsg2('');
            setMsgColor('Green');
        } else {
            setMsgg(`opps!!!${getug}`);
            // setmsg('OOPs!!!!!!!!!!!!!!!!');
            // setmsg2('your data submit Unsuccessfully');
            setMsgColor('Red');
        }

    }

    return (
        <>
            <h1> Hello Prashant</h1>
            {/* <form> */}
            <form action="/success">
                <h4 style={{ color: getMsgColor }}>{getMsgg}</h4>
                <label >First Name</label>
                <input type="text" id="fname" name="name" placeholder="Your name.." onChange={name} value={getName} /><br />
                <label >Email ID</label>
                <input type="email" id="email" name="email" placeholder="Your Email.." onChange={email} value={getEmail} /><br />
                <label >Contact </label>
                <input type="number" id="contact" name="contact" placeholder="Your Contact.." onChange={contact} value={getContact} /><br />
                <label  >City</label>
                <select id="city" name="city" onChange={city} value={getCity} >
                    <option value="" selected disabled >Select City</option>
                    <option value="Indore" >Indore</option>
                    <option value="Bhopal">Bhopal</option>
                    <option value="Jabalpur">Jabalpur</option>
                </select><br />
                <input type="button" name="button" value="Submit" onClick={() => saveData()} /><br />
            </form>
        </>
    );
}

export default Contact;