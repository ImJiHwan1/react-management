var express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'birthday': '961222',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '길동무',
            'birthday': '961230',
            'gender': '여자',
            'job': '개발자'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '길찾기',
            'birthday': '960621',
            'gender': '남자',
            'job': '프로그래머'
        },
    ]);
})

app.listen(port, ()=> console.log(`Listening on port ${port}`))
