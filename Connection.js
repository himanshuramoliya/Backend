import mongoose from 'mongoose'
import {Question,Answer} from './model.js'

var url = "mongodb+srv://Vismay:nlsES0uop6G2zJ4H@cluster0.w3tty.mongodb.net/SE?retryWrites=true&w=majority";
mongoose.connect(url , {useNewUrlParser:true,useUnifiedTopology:true})
    .then((result)=> console.log('Connected to database'))
    .catch((err)=>console.log(err));

const question = new Question();
const answer = new Answer();

Question.find(function(req,res){
  console.log(res);
});

answer.id = 10
answer.save()
  .then((result) => { console.log("sucessfully saved")})
  .catch((err) => {console.log(err) });



process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      console.log('Mongoose disconnected on app termination');
      process.exit(0);
    });
  });
