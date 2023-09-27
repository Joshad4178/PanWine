import React, { useState } from "react";
import './forms.css'

function MyForm(){
    const [inputs, setInputs] = useState({});

    const handleChange = (event)=> {
        const name = event.target.sname;
        const category = event.target.scategory;
        const value = event.target.value;
        setInputs((values) =>({
            ...values,
            [name]:value,
            [category]:value,
        }));
    };
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(inputs);
    };
    return (
        <div>
            <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Search Name"
                    type="text"
                    name="Search Name"
                    value={inputs.sname}
                    onChange={handleChange}
                />
                <button className="submitt"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.2779 16.2695M18.8947 9.94737C18.8947 12.3204 17.9521 14.5962 16.2741 16.2741C14.5962 17.9521 12.3204 18.8947 9.94737 18.8947C7.57438 18.8947 5.29858 17.9521 3.62062 16.2741C1.94267 14.5962 1 12.3204 1 9.94737C1 7.57438 1.94267 5.29858 3.62062 3.62062C5.29858 1.94267 7.57438 1 9.94737 1C12.3204 1 14.5962 1.94267 16.2741 3.62062C17.9521 5.29858 18.8947 7.57438 18.8947 9.94737V9.94737Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </form>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Search Categories"
                    type="text"
                    name="Search category"
                    value={inputs.scategory}
                    onChange={handleChange}
                />
                <button className="submitt"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.2779 16.2695M18.8947 9.94737C18.8947 12.3204 17.9521 14.5962 16.2741 16.2741C14.5962 17.9521 12.3204 18.8947 9.94737 18.8947C7.57438 18.8947 5.29858 17.9521 3.62062 16.2741C1.94267 14.5962 1 12.3204 1 9.94737C1 7.57438 1.94267 5.29858 3.62062 3.62062C5.29858 1.94267 7.57438 1 9.94737 1C12.3204 1 14.5962 1.94267 16.2741 3.62062C17.9521 5.29858 18.8947 7.57438 18.8947 9.94737V9.94737Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </form>
        </div>
        

                {/* <input placeholder="" type="submit"/> */}
            
        </div>
        
    );
}
export default MyForm