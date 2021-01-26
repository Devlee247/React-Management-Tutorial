const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id' : 1,
        'image' : 'https://placeimg.com/64/64/any',
        'name' : '홍길동',
        'birthday' : '990419',
        'gender' : '남성',
        'job' : '대학생'  
       },
       {
        'id' : 2,
        'image' : 'https://placeimg.com/64/64/1',
        'name' : '김신',
        'birthday' : '970709',
        'gender' : '남성',
        'job' : '프로그래머'  
       },
       {
        'id' : 3,
        'image' : 'https://placeimg.com/64/64/2',
        'name' : '김영희',
        'birthday' : '920719',
        'gender' : '여자',
        'job' : '직장인'  
       }
      ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));
