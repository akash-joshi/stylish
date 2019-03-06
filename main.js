let current = 'div'
const displayFunc = () => {
    document.querySelector('#'+current).style.display = 'none';
    current = document.querySelector('#mySelector').value
    document.querySelector('#'+ current).style.display = ''
}
const updateCSS = () => {
    document.querySelector('#'+current).style = document.querySelector('#userCSS').value;
}