// check empty
let checkEmpty = (value , element) => {
  if(value === "") {
    element.innerHTML = "Vui lòng không để trống"
    return false
  } else {
    element.innerHTML = ""
    return true
  }
}

// check email
let checkEmail = (value ,element) => {
  let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(!regex.test(value)) {
    element.innerHTML = "Vui lòng nhập đúng định dạng" 
    return false
  } else {
    element.innerHTML = ""
    return true
  }
}
