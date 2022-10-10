const { Schema, model } = require ('mongoose');
const moment = require('moment');

//running into errors with capitalization - this note is to remind me to look for that
const UserSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Let's try that email again."]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
        },
        {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
        }
    );


//create user model
const User = model('User', UserSchema);

//count comments and replies
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});


module.exports = User;