import InsertForm from "@/app/components/InsertForm";
import Vcard from "@/app/models/Vcard";
import Connect from "@/app/models/connect";
import { redirect } from "next/navigation";

export default async function page({params}){
    await Connect();

    const editRecord = await Vcard.findById(params.id)

    async function EditeVcard(formData){
        "use server"

        let name = formData.get("name")
        let contact = formData.get("contact")

        let data= await Vcard.findByIdAndUpdate(params.id,{name,contact})
        redirect("/")
    }
    return(
        <div  className="container flex mt-5 flex-1 justify-center">
            <div className="w-1/3">
                <InsertForm InsertVcard={EditeVcard} data={editRecord}/>
            </div>
        </div>
    )
}