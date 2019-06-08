// fromCharCode  =   буквы -> юникод
// charCodeAt    =  юникод -> буквы

document.getElementById('input-sentence').oninput = function() {
    const offset = 3;
    let str = this.value;
    let out = '';
    
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code + offset;
        out += String.fromCharCode(code);
    }

    document.getElementById('output-unicode').innerHTML = out;
}

document.getElementById('input-unicode').oninput = function() {
    const offset = 3;
    let str = this.value;
    let out = '';
    
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code - offset;
        out += String.fromCharCode(code);
    }

    document.getElementById('output-sentence').innerHTML = out;
}