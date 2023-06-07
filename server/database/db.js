import mongoose from "mongoose"



const DBConnection = async() => {
    const DB_URL = 'mongodb+srv://devanandn544:zSnn2L6kYVEf3Qas@cluster0.bys1fxs.mongodb.net/'

    try{
        await mongoose.connect(DB_URL, {useNewUrlParser: true})
        console.log("Database connected successfully")

    }catch(err){
        console.error('Error while connecting to the database', err.message)
    }

}
export default DBConnection;