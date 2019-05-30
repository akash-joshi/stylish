let current = 'div';

const codeBuilder = (type,style) => {
    return `import styled from 'styled-components';<br/><br/>export default styled.${type}\`<br/>${style}<br/>\`;<br/><br/>`
};

window.onload = () => {
    const copyButton = document.querySelector("#copybut");
    console.log(copyButton);

    document.querySelector("#mySelector").addEventListener("change",e=>{
        displayFunc();
    })

    copyButton.addEventListener('click',(event)=>{
        if(document.querySelector("#userCSS").value.trim() === ''){
            copyStringToClipboard('Please write some CSS first !') ;
            return document.querySelector("#copyText").style.display = "";
        }

        let textToCopy = codeBuilder(current,document.querySelector('#userCSS').value);
        textToCopy = textToCopy.replace(/<br\/>/g,'\n');

        copyStringToClipboard(textToCopy);
        document.querySelector("#copyText").style.display = ""
    });

    const styleInput = document.querySelector("#userCSS");
    styleInput.addEventListener("keyup",e=>{
        updateCSS();
    })

    function copyStringToClipboard (str) {
        // Create new element
        var el = document.createElement('textarea');
        // Set value (string to be copied)
        el.value = str;
        // Set non-editable to avoid focus and move outside of view
        el.setAttribute('readonly', '');
        el.style = {position: 'absolute', left: '-9999px'};
        document.body.appendChild(el);
        // Select text inside element
        el.select();
        // Copy text to clipboard
        document.execCommand('copy');
        // Remove temporary element
        document.body.removeChild(el);
    }

    const updateCSS = () => {
        let style = document.querySelector('#userCSS').value
        document.querySelector('#'+current).style = style;
        style = style.replace(/\r/g,'<br/>');
        style = style.replace(/\n/g,'<br/>');
        document.querySelector('#outputCode').innerHTML = codeBuilder(current,style)
    }

    const displayFunc = () => {
        document.querySelector('#'+current).style.display = 'none';
        current = document.querySelector('#mySelector').value
        document.querySelector('#'+ current).style = document.querySelector('#userCSS').value;
        updateCSS()
    }
}
