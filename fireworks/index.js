const normalText = document.getElementsByClassName('text-normal')[0]
const formInit = document.getElementById("init-form")
const formContainer = document.getElementsByClassName("form-init")[0]

const initData = {
  name: "",
  date: `${new Date().toJSON().slice(0, 10)}`,
  hour: "00",
  minute: "00",
  second: "00",
}
formInit.addEventListener("submit", (e) => {
  e.preventDefault()
  for (const key in initData) {
    if (e.target[key]) {
      initData[key] = e.target[key].value.toString()
    }
  }
  formContainer.style.display = "none"
  countdown(initData)
})

function init() {
  const circleText = document.getElementsByClassName('circle-text')[0]
  circleText.style.marginRight = '1100px'
}

function countdown({name, date, hour, minute, second}) {
  normalText.innerHTML = name
  const hours = document.getElementById("hours")
  const minutes = document.getElementById("minutes")
  const seconds = document.getElementById("seconds")
  const days = document.getElementById("day")

  const dateEnd = new Date(date+"T"+hour+":"+minute+":"+second)
  
  setInterval(() => {
    const time = Math.floor(new Date() / 1000)
    const diff = dateEnd.getTime() / 1000 - time

    days.innerHTML = Math.floor(diff / 86400)
    hours.innerHTML = Math.floor(diff / 3600)
    minutes.innerHTML = Math.floor((diff % 3600) / 60)
    seconds.innerHTML = diff % 60
  }, 1000)
}

function textBow() {
  const text = document.getElementsByClassName('circle-text')[0]

  const node = text.innerHTML.split("").map((el, i) => {
    return `<p style="transform: rotate(${i * 10}deg);">${el}</p>`
  })

  text.innerHTML = node.join("")
}

textBow()
init()