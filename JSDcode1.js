// const gJavascript = document.querySelector('#reading-list li:nth-child(3) .name')
// console.log(gJavascript);
// gJavascript.innerHTML = 'awwwwwwwwwwwwwwwwwwwwwwwwwww'

// let name = document.getElementsByClassName('name')
// let delete1 = document.getElementsByClassName('delete')
// let textReturn = function () {

//     name.innerHTML = 'WRYYYYYYYYYYYYYYYYYYYYYYYYYYY'

//     }

//     name.addEventListener('click', textReturn)



// const readingList = document.querySelectorAll('#reading-list li .name')
// readingList.forEach(function (list){
//     // list.textContent += 'book title: ';
//     // console.log(list.textContent);
//     list.textContent = 'book title : ' + list.textContent

// })


/* textContent จะรัน ทุกอย่างเป็นข้อความ
innerHTML จะรันในรูปแบบ HTML tag
ถ้าเปลี่ยนด้วย value นี้ ผลไม่ต่างกันครับ

*/

// // ใช้ querySelectorAll เพื่อเลือก element ที่มีคลาส name ทั้งหมด
// let names = document.querySelectorAll('.name');

// // สร้างฟังก์ชันเพื่อใช้เปลี่ยนข้อความใน element เมื่อคลิกที่ element
// function changeText() {
//   this.innerHTML = 'WRYYYYYYYYYYYYYYYYYYYYYYYYYYY';
// }

// // วน loop ผ่าน names และกำหนดให้ทุกๆ element ทำการเรียกใช้ changeText เมื่อคลิก
// for (let i = 0; i < names.length; i++) {
//   names[i].addEventListener('click', changeText);

//better way for element.addEventListener()
const list = document.querySelector('#reading-list ul');

// //Interacting with Form -- add readinglist
const addForm = document.forms['add-list'];
addForm.addEventListener('submit',function(e){
    e.preventDefault(); // prevent from refresh
    const value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box
   // console.log(value);

   const li = document.createElement('li');
   const name = document.createElement('span');
   const deleteBtn = document.createElement('span');
   
   // add content
   name.textContent = value;
   deleteBtn.textContent = 'delete';
   
   // add classes
   name.classList.add('name');
   deleteBtn.classList.add('delete');
   
   // append to DOM
   li.appendChild(name);
   li.appendChild(deleteBtn);
   list.appendChild(li);
});