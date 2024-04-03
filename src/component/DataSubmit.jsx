import { useState } from "react";

export default function DataSubmit() {
    const[to,setTo]=useState("pradeep");
    const[data,setData]=useState("Hello");
    function handleSubmit(e){
        alert(data+" "+to);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="names">To</label>
                <select value={to} onChange={(e)=>setTo(e.target.value)}>
                    <option value="pradeep">Pradeep</option>
                    <option value="pradeep giri">Pradeep Giri</option>
                </select>
                <br />
                <textarea name="" id="" cols="30" rows="10" value={data} placeholder="Write Your message" onChange={(e)=>setData(e.target.value)}></textarea>
            <br />
            <button>Send</button>
            </form>
        </>
    )
}
