import React from 'react';

function Contacts(props) {

    const {contacts} = props;

    return (
        <div>
            <h3>Contacts</h3>
            <p>Address: {contacts.address}</p>
            <p>Phone number: {contacts.phoneNumber}</p>
            <p>Email: {contacts.email}</p>
        </div>
    );
}

export default Contacts;