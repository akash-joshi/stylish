let current = 'div'
const codeBuilder = (name,type,style) => {
    return `
    import styled from 'styled-components';<br/><br/>

    const ${name} = styled.${type}\`<br/>
        ${style}
    \`;<br/><br/>

    export default ${name};
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
    let name = document.querySelector('#compname').value
    document.querySelector('#'+current).style = style;
    if(!name) name = 'NewComponent';
    style = style.replace(/\r/g,'<br/>');
    style = style.replace(/\n/g,'<br/>');
    document.querySelector('#outputCode').innerHTML = codeBuilder(name,current,style)
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
