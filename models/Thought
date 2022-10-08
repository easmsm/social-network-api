const { Schema, model, Types } = require ('mongoose');
// moment for comment time
const moment = require('moment');

//using this model for both thoughts and reactions

//reaction
const ReactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date, 
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal),
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

//thoughts

const ThoughtSchema = new Schema (
    {
        thoughtText: {
            type: String, 
            required: true,
            maxlength: 280,
            minlength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

//thought model
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;