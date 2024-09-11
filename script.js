let s_first = document.getElementsByName("fname")[0]
let s_sec = document.getElementsByName("lname")[0]
let s_submit = document.querySelector('input[type="submit"]')
let s_form = document.querySelector("form")


s_submit.addEventListener("click", (e) => {
  e.preventDefault();
  let first = s_first.value;
  let second = s_sec.value;

  getFormvalue(first, second);

  
})
function getFormvalue(first, second) {
    //Write your code here
    alert(first + " " + second);

}
