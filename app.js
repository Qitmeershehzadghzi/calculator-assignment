let input = document.getElementById("inputbox")

function getNumber(num) {
    input.value += num

}
function clearButton(){
input.value =''
}
function calculator() {
    input.value =eval(input.value)
}