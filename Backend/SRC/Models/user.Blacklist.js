import mongoose from "mongoose";

const BlaklistToken = new mongoose.Schema({
    token :{
        type : String,
        required : [true, "Tokens are required to save in Blaklist"]
    },
},{
    timestamps : true
})

const BlacklistModel = mongoose.model("BlaklistTokens", BlaklistToken)

export default BlacklistModel