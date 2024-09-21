
import { redirect } from "next/navigation";

import InsertForm from "./components/InsertForm";
import Vcard from "./models/Vcard";
import Connect from "./models/connect";
import CallingTable from "./components/CallingTable";
import {join} from "path"
import { writeFile } from "fs/promises";



export default  async function page(){

    
    await Connect();
    
    let callingVcard = await Vcard.find({});

    async function InsertVcard(formData){
      "use server"

      let file = formData.get("image");

    let name=formData.get("name")
    let contact=formData.get("contact")

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes)

    const path = join("./public", "images", file.name)

    await writeFile(path,buffer);


      
    let data=await Vcard.create({name,contact,image: file.name})
    redirect("/")
      
    }
    
    async function deleteVcard(id){
      "use server"
      let data= await Vcard.findByIdAndDelete(id)
      redirect("/")
    }

      

  return(
    <div className="px-10 flex flex-1 mt-10">
      <div className="w-1/4">
        <InsertForm InsertVcard={InsertVcard}/>
      </div>
      <div className="W-3/4 px-10">
        
        <CallingTable callingVcard={callingVcard} deleteVcard={deleteVcard}/>
      </div>
      </div>
    )
}
  

