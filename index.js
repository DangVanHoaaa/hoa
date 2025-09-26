const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Cấu hình views
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// Cấu hình file tĩnh (CSS, JS, ảnh)
app.use(express.static(__dirname + '/public'));

// Trang chủ
app.get('/', (req, res) => {
  res.render('client/pages/home/index', {
    books: [],
    bestsellers: []
  });
});


app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});
