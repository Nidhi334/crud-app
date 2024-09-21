"use client"
import { useState } from "react";
const InsertForm =({InsertVcard ,data}) => {
    const[name, setName]= useState((data) ?data.name : "");
    const [contact,setContact] = useState(data ? data.contact: "");

    return(
        <>
        <h1 className="text-3xl font-bold mb-4 ">{data ? "update":"Insert"} Vcard</h1>
        <form action={InsertVcard} method="POST" encType="multipart/form-data" className="bg-teal-900 text-black p-3 rounded border">
            <div className="mb-3 flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter Name" className="border text-black px-2 py-1" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3 flex flex-col">
                <label htmlFor="contact">Contact</label>
                <input type="text" placeholder="Enter Name" className="border text-black px-2 py-1" id="contact" name="contact" value={contact} onChange={(e)=>setContact (e.target.value)}/>
            </div>

            {!data &&
            (<div className="mb-3 flex flex-col">
                <label htmlFor="image">Image</label>
                <input type="file" className="border text-black px-2 py-1" id="image" name="image"/>
            </div>)
            }
            <div className="mb-3">
                <button type="submit" className="bg-red-700 text-white px-3 py-2 rounded w-full hover:bg caret-red-900">{data ? "Update":"Insert"} Vcard</button>
            </div>
        </form>
        </>
    )
}
export default InsertForm;