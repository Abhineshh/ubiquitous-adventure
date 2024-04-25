import React, { useEffect } from 'react';

function CompanyDetails({ company, onClose }) {


    useEffect(() => {
        
    }, []);

    return (
        <div className='pt-20'>
            <h2>Company Details</h2>
            <p>Company name :{company.companyName}</p>
            <button onClick={onClose}>Close</button>
        </div>
    )
}

export default CompanyDetails;