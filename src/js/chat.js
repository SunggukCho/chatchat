"use strict"
const socket = io();
const nickname = document.querySelector("#nickname")
const chatList = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input")
const sendButton = document.querySelector(".send-button")

sendButton.addEventListener("click", ()=> {
  const param = {
    name: nickname.value,
    msg: chatInput.value
  }
  socket.emit("chatting", param) //채널아이디, 메시지
})

// 서버로 전송

// 서버에서 온 대답 받기
socket.on("chatting", (data) => {
  const {name, msg, time } = data;
  const item = new LiModel(name, msg, time);
  item.makeLi();

  // // console.log(data)
  // const li = document.createElement("li");
  // li.innerText = `${data.name} 님이 - ${data.msg};`;
  // chatList.appendChild(li); 
})

function LiModel(name, msg, time) {
  this.name = name;
  this.msg = msg;
  this.time = time;

  this.makeLi = () => {
    const li = document.createElement("li");
    li.classList.add(nickname.value === this.name ? "sent": "received")
    const dom = `<span class="profile">
    <span class="user">${this.name}</span>
    <img class="image" src="https://placeimg.com/50/50/any" alt="any">
  </span>
    <span class="message">${this.msg}</span>
    <span class="time">${this.time}</span>`;
    li.innerHTML= dom;
    chatList.appendChild(li);
  }
}