import React from 'react';
import { useState } from 'react';

const AddTransaction = () => {

    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    return (
        <>
            <form>
                <div className="htmlForm-group">
                    <label htmlFor="exampleInputEmail1"></label>
                    <input type="email" className="htmlForm-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                    value={text} onChange={(e)=>setText(e.target.value)}/>
                    <small id="emailHelp" className="htmlForm-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                
                <div className="htmlForm-group htmlForm-check">
                    <input type="number" className="htmlForm-check-input" id="exampleCheck1"  placeholder="Enter Amount"
                    value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                    <label className="htmlForm-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Add Transcation</button>
                </form>
        </>
    )
}

export default AddTransaction;