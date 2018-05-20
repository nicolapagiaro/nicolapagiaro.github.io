// variabili globali
const container = document.getElementById("container")
const authContainer = document.getElementsByClassName("auth-container")[0]
const dataContainer = document.getElementsByClassName("data-container")[0]
const inputPassword = document.getElementById("inputPassword")
const inputDataI = document.getElementById("inputDataI")
const inputDataF = document.getElementById("inputDataF")
const btn = document.getElementById("btn")
const btnLogin = document.getElementById("btnLogin")

/**
 * Funzione che fa la chiamata ajax in post
 */
function callPostAjax(url, obj, callback) {
  var xmlhttp
  // compatible with IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest()
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      callback(xmlhttp.responseText)
    }
  }
  xmlhttp.open("POST", url, true)
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xmlhttp.send("dataInizio=" + obj.dataInizio + "&dataFine=" + obj.dataFine + "&order=" + obj.order + "&page=" + obj.page)
}

/**
 * Funzione che fa la chiamata ajax in post
 */
function callAuthAjax(url, obj, callback) {
  var xmlhttp
  // compatible with IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest()
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      callback(xmlhttp.responseText)
    }
  }
  xmlhttp.open("POST", url, true)
  xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xmlhttp.send("password=" + obj.password)
}

/**
 * Funzione che prende i dati e fa la chiamata
 */
function loadData() {
  var dataI = ""
  if(inputDataI.value !== '') {
    dataI = inputDataI.value + " 00:01"
  }
  
  var dataF = ""
  if(inputDataF.value !== '') {
    dataF = inputDataF.value + " 23:59"
  }
  
  const obj = {
    dataInizio: dataI,
    dataFine: dataF,
    order: "ASC",
    page: 0
  }
  callPostAjax("chat.php", obj, function (txt) {
    const obj = JSON.parse(txt)
    
    if(obj.status === 0) {
      // tutto oke
      dataToHtml(obj.data)
    }
    else {
      // some errors
      console.log(obj.error)
    }
    
  })
}

/*
 * Funzione che converte il json arrivato in elementi html
 */
function dataToHtml(jsonObj) {
  console.log(jsonObj)
  if (jsonObj.length === 0) return

  container.innerHTML = ""
  var ret = ""
  var msgdate = ""

  for (var i = 0; i < jsonObj.length; i++) {
    // messages date
    var date = new Date(parseInt(jsonObj[i].timestamp, 10))
    var dateStr = formatDate(date)
    if (dateStr !== msgdate) {
      msgdate = dateStr
      var pDate = document.createElement('p')
      pDate.classList.add('msg-date')
      pDate.innerHTML = msgdate
      container.appendChild(pDate)
    }

    var div = document.createElement('div')
    div.classList.add("msg-container")

    // message sender
    var pSender = document.createElement('p')
    pSender.classList.add('msg-sender')
    var sender = ""
    if (jsonObj[i].key_from_me === '1') {
      sender = "Nicola"
    } else {
      sender = "Alice"
      di.classList.add("msg-response")
    }
    pSender.innerHTML = sender
    div.appendChild(pSender)

    // message content
    var pData = document.createElement('p')
    pData.classList.add('msg-data')
    if(jsonObj[i].data.lenght === 0) {
      pData.innerHTML = "Media non disponibile"
    }
    else {
      pData.innerHTML = jsonObj[i].data
    }
    div.appendChild(pData)

    // messages time
    var pTime = document.createElement('p')
    pTime.classList.add('msg-time')
    var min = date.getMinutes()
    if (min < 10)
      min = "0" + min
    pTime.innerHTML = date.getHours() + ":" + min
    div.appendChild(pTime)

    container.appendChild(div)
  }
}

function formatDate(date) {
  var month = date.getUTCMonth()
  var monthName = ""
  switch (month+1) {
    case 1:
      monthName = "Gennaio"
      break
    case 2:
      monthName = "Febbraio"
      break
    case 3:
      monthName = "Marzo"
      break
    case 4:
      monthName = "Aprile"
      break
    case 5:
      monthName = "Maggio"
      break
    case 6:
      monthName = "Giugno"
      break
    case 7:
      monthName = "Luglio"
      break
    case 8:
      monthName = "Agosto"
      break
    case 9:
      monthName = "Settembre"
      break
    case 10:
      monthName = "Ottobre"
      break
    case 11:
      monthName = "Novembre"
      break
    case 12:
      monthName = "Dicembre"
      break
  }
  return date.getUTCDate() + " " + monthName + ", " + date.getFullYear();
}

// click listener sul button per loggarsi
btnLogin.addEventListener('click', (e) => {
  e.preventDefault()
  callAuthAjax("auth.php", {
      password: inputPassword.value
    },
    (text) => {

      if (text === '0') {
        // autenticato
        authContainer.style.display = "none"
        dataContainer.style.display = "block"
        loadData()
      } else {
        // 
        alert("passowrd sbagliata")
      }
    })
})

// click listener sul button per caricare i dati
btn.addEventListener('click', (e) => {
  loadData()
})
