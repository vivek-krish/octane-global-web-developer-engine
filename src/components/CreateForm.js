import React, { useState } from 'react';
import Button from './Button';


const CreateForm = () => {
    // Input tracker
    const [userName, setUserName] = useState('');
    const [mobile, setMobile] = useState(0);

    return (
        <div>
            <label>User Name </label>
            <input
                type="text"
                onChange={
                    (a) => {
                        setUserName(a.target.value);
                        console.log("userName : " + userName);
                    }
                }
            />
            <br /><br />
            <label> Mobile No  </label>
            <input
                type="text"
                onChange={
                    (e) => {
                        setMobile(e.target.value);
                        console.log("Mobile : " + mobile);
                    }
                }
            />
            <br />
            <Button
                color='red'
                buttonValue='Submit'
                onClick={
                    () => console.log("UserName :" + userName + " Mobile :" + mobile)
                }
            />
        </div>
    );
};

export default CreateForm;