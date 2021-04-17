import mongoose from 'mongoose'

const QuestionSchema = new mongoose.Schema({
    id:{type:Number},
    Title:{tyep:String},
    Que:{type:String},
    Author:{type:String},
    status:{type:String},
    Likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    share:{type:Number,default:0},
    Topic:{type:String,default:'None'}
});

const AnswerSchema = new mongoose.Schema({
    id:{type:Number},
    Author:{type:String},
    Comment:{type:String}
});

var Answer = mongoose.model('Answer',AnswerSchema)    
var Question = mongoose.model('Question',QuestionSchema);

export {Question,Answer}
