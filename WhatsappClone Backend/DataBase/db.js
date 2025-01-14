import mongoose from "mongoose";


const Connection = async () =>{
    const URL = `mongodb+srv://darshanmalviya9826:Darshan9826@whatsappclone.6adkq.mongodb.net/?retryWrites=true&w=majority&appName=WhatsAppClone`

    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true});
        console.log(`DataBase Conn. Successfully`)
    } catch (error) {
        console.log(`error`, error.message)   
    }
}
export default Connection;