const { Schema } = require("mongoose");

const user = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // match: ,
        },
        thoughts: [
            
        ]

    }
)