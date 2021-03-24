const express = require("express") // nodemodules에서 불러옴
const app = express(); // express실행
const path = require("path"); // 기본 내장 path
const http = require("http");
const server = http.createServer(app);
const socketIO = require("socket.io");
const moment = require("moment");

const io = socketIO(server);

console.log(__dirname)
app.use(express.static(path.join(__dirname, "src"))) 
// __dirname은 path이고 이것과 src 것을 조합해서 사용함.
// 왜? 운영체제마다 / or \ 등으로 다르기 때문!

const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`server is running ${PORT}`));
server.listen(PORT, () => console.log(`server is running ${PORT}`)); // 위와 동일

io.on("connection", (socket) => {
  // console.log('연결이 이루어졌습니다.')
  socket.on("chatting", (data) => {
    // console.log(data)
    const { name, msg } = data; // destructuring
    io.emit("chatting", {
      name,
      msg,
      time: moment(new Date()).format("h:mm A")
    })
  })
})
