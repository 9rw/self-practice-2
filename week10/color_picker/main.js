// import { CookieUtil } from "./myLib/CookieUtil.js"
// CookieUtil.set("cartId", "abc200", new Date(2025, 9, 20))
// console.log(document.cookie)
// console.log(CookieUtil.get("cartId"))
// CookieUtil.unset("cartId")
// console.log(document.cookie)
// document.cookie = "theme=dark"
// document.cookie = `theme=light;expires=${new Date(2025, 9, 16)}`
// document.cookie = "username=umaporn;max-age=60"

// let like = sessionStorage.getItem("like")
// if (sessionStorage.getItem("like") === null){
//   sessionStorage.setItem("like", 1)
// }else {
//   sessionStorage.setItem("like", ++like)
//   alert(sessionStorage.getItem("like"))
// }
const bgColor = document.querySelector("#bgColor")
const fontColor = document.querySelector("#fontColor")
const fontSize = document.querySelector("#fontSize")
const btnSave = document.querySelector(".btn-save")
const btnReset = document.querySelector(".btn-reset")

const previewSection = document.querySelector(".preview-section")
document.addEventListener("DOMContentLoaded", ()=> {
  console.log(localStorage.getItem("bgColor"))
  if (localStorage.getItem("bgColor")){
    bgColor.value = localStorage.getItem("bgColor")
    previewSection.style.backgroundColor = localStorage.getItem("bgColor")
  }
  if (localStorage.getItem("fontColor")){
    fontColor.value = localStorage.getItem("fontColor")
    previewSection.style.color = localStorage.getItem("fontColor")
  }
  if (localStorage.getItem("fontSize")){
    fontSize.value = localStorage.getItem("fontSize")
    previewSection.style.fontSize = localStorage.getItem("fontSize")
  }
})

btnSave.addEventListener("click", ()=> {
  localStorage.setItem("bgColor", bgColor.value)
  localStorage.setItem("fontColor", fontColor.value)
  localStorage.setItem("fontSize", fontSize.value)
  console.log("set new value")
})

btnReset.addEventListener("click", ()=> {
  localStorage.clear()
  console.log("cleared")
})