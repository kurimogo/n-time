const express = require('express');
const app = express();

// publicディレクトリ内のファイルを静的ファイルとして提供
app.use(express.static('public'));

// ルートの設定
app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
});

// サーバの設定
const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
