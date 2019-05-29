let current = 'div'
const codeBuilder = (type,style) => {
    return `
    import styled from 'styled-components';<br/><br/>

    export default styled.${type}\`<br/>
        ${style}
    \`;<br/><br/>
    `
}

const displayFunc = () => {
    document.querySelector('#'+current).style.display = 'none';
    current = document.querySelector('#mySelector').value
    document.querySelector('#'+ current).style = document.querySelector('#userCSS').value;
    updateCSS()
}

const updateCSS = () => {
    let style = document.querySelector('#userCSS').value
    document.querySelector('#'+current).style = style;
    style = style.replace(/\r/g,'<br/>');
    style = style.replace(/\n/g,'<br/>');
    document.querySelector('#outputCode').innerHTML = codeBuilder(current,style)
}


function selectText(containerid) {
    if (document.selection) { // IE
        var range = document.body.createTextRange();
        range.moveToElementText(document.getElementById(containerid));
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(document.getElementById(containerid));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}
