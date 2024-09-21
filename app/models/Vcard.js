import mongoose from "mongoose"

const VcardSchema = new mongoose.Schema({
    name: {type:String,required:true},
    contact: {type:String,required:true},
    image:{type:String,required:true}
});

//delete mongoose.connection.models['Vcard']

export default mongoose.models.Vcard || mongoose.model("Vcard",VcardSchema)