import React from 'react';

const Inventory = (props) => {
    const {name, quantity,supplierName} = props.inventory;
    return (
        <div>
            <div>
                <ul>
                    <li>{name}</li>
                    <li>{quantity}</li>
                    <li>{supplierName}</li>
                </ul>
            </div>
        </div>
    );
};

export default Inventory;