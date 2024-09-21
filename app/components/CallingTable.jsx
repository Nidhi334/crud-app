"use client"

import Image from "next/image";
import Link from "next/link";

const  CallingTable=({callingVcard,deleteVcard}) =>{
   return(
    <>
    <h1 className="text-3xl font-bold mb-4">Manager Records</h1>

    <table className="w-full">
        <thead>
            <tr>
                
            <th className="border border-slate-400 p-2 text-center">Id</th>
            <th className="border border-slate-400 p-2 text-center">Name</th>
            <th className="border border-slate-400 p-2 text-center">Contact</th>
            <th className="border border-slate-400 p-2 text-center">Image</th>
            <th className="border border-slate-400 p-2 text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {
            callingVcard.map((item,key)=>(
                    <tr>
                        <td className="border border-slate-400 p-2 text-center">{key+1}</td>
                        <td className="border border-slate-400 p-2 text-center">{item.name}</td>
                        <td className="border border-slate-400 p-2 text-center">{item.contact}</td>
                        <td className="border border-slate-400 p-2 text-center">
                            <Image src={`/images/${item.image}`} width={200} height={200} alt=""/>
                        </td>
                        <td className="border flex gap-2 border-slate-400 p-2 text-center">

                          <button type="submit" onClick={()=> deleteVcard(item._id)} className="bg-red-600 text-white px-3 py-2 rounder">x</button>

                          <Link href={`/edit/${item._id}`} className="bg-sky-700 text-white hover:bg-slate-900 px-3 py-2 
                          rounded">Edit</Link>
                        </td>
                    </tr>
                ))
            }
        </tbody>

    </table>
    
    </>
   )
}

export default CallingTable;