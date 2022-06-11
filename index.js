let kmInput = document.querySelector('#main__input');

kmInput.addEventListener('click', function(e) {
    e.preventDefault()

    function converter(num) {
        return (num / 1.609);
    } 
    var input = document.querySelector('#main__input--2').value;
    var result = converter(input);
    document.querySelector('#main__output').innerHTML = result 
    console.log(result);
})