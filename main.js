let arrPeople = []

document.querySelector(".btn-update").disabled = true;

let renderUI = (arr = arrPeople) => {
  let content = ''
  for(let item of arr) {
    content += `
      <tr>
        <td>${item.ma}</td>
        <td>${item.hoTen}</td>
        <td>${item.diaChi}</td>
        <td>${item.email}</td>
        <td>${item.loaiNguoiDung}</td>
        <td>
          <button class="btn btn-danger" onclick="handleDelete('${item.ma}')">Xoá</button>
          <button class="btn btn-warning" onclick="handleEdit('${item.ma}')">Sửa</button>
        </td>
      </tr>
    `
  }
  document.querySelector('.table tbody').innerHTML = content
}

let setLocal = (key = 'arrPeople',arr = arrPeople) =>{
  localStorage.setItem(key , JSON.stringify(arr))
}

let getLocal = (key = 'arrPeople') => {
  let abc =  JSON.parse(localStorage.getItem(key))
  if(abc) {
    arrPeople = abc
    renderUI();
  }
}
getLocal();

function domID(id){
  return document.getElementById(id)
}

let getValueForm = () => {
  let arrInput = document.querySelectorAll(".form input , .form select")
  let person = new Person()
  let flag = true
  for(let input of arrInput) {
    const {id,value} = input
    let elecvalue = input.nextElementSibling
    person[id] = value
    let check = checkEmpty(value,elecvalue)
    flag &= check
    if(!check) continue

    if(id === 'email') {
      let checkMail = checkEmail(value,elecvalue)
      flag &= checkMail
    }
  }
  if(flag) {
    console.log("flag: ", flag);
    return person
  }
}

let handleCreate = () => {
  let person = getValueForm();
  if(!person) return
  arrPeople.push(person)
  setLocal();
  renderUI();
  domID('form').reset();
}
document.querySelector(".btn-create").onclick = handleCreate

let handleDelete = (ma) => {
  let index = arrPeople.findIndex((item)=>{
    return item.ma === ma
  })
  if (confirm(`Xoá người dùng có mã: ${ma}`) == true) {
    arrPeople.splice(index,1)
    setLocal();
    renderUI();
  }
}

let handleEdit = (ma) => {
  let itemEdit = arrPeople.filter((item) => {
    return item.ma === ma
  })
  let arrInput = document.querySelectorAll(".form input , .form select")
  for(let input of arrInput) {
    const {id} = input
    input.value = itemEdit[0][id]
  }
  document.querySelector(".btn-create").disabled = true;
  document.querySelector(".btn-update").disabled = false;
  document.getElementById("ma").readOnly = true;
}

let handleUpdate = () => {
  let valueForm = getValueForm();
  let index = arrPeople.findIndex((item) => {
    return item.ma === valueForm.ma
  })
  arrPeople[index] = valueForm
  setLocal()
  renderUI()
  domID('form').reset();
  document.querySelector(".btn-create").disabled = false;
  document.querySelector(".btn-update").disabled = true;
}

document.querySelector(".btn-update").onclick = handleUpdate

document.getElementById('sortName').onchange = function(e){
  switch (e.target.value) {
    case 'az':
      let sortaz = arrPeople.sort(function (a, b) {
        if (a.hoTen < b.hoTen) {
          return -1;
        }
        if (a.hoTen > b.hoTen) {
          return 1;
        }
        return 0;
      });
      renderUI(sortaz)
      break;
    case 'za':
      let sortza = arrPeople.sort(function (a, b) {
        if (a.hoTen < b.hoTen) {
          return 1;
        }
        if (a.hoTen > b.hoTen) {
          return -1;
        }
        return 0;
      });
      renderUI(sortza)
      break;
    default:
      renderUI()
      break;
  }
}

document.getElementById('sortType').onchange = function(e) {
  let value = e.target.value
  let sortType = arrPeople.filter((item)=>{
    if(value === "tất cả") return item
    return item.loaiNguoiDung === value
  })
  renderUI(sortType)
}
