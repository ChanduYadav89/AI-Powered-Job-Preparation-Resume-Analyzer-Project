import app from "./SRC/app.js";
import { connectDB } from "./SRC/Config/db.js";


const PORT = 3000;
connectDB()


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})