import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });  // FIXED

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
    console.log(' sever is running on port : $ { process.env.PORT }');

    })
})
.catch((err) => {
    console.log("MOGO db connection failed !!! ", err)
})