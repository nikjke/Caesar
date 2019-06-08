// charCodeAt - возвращает unicode    A (sym)       =  65 (unicode)
// fromCharCode - наоборот            65 (unicode)  =  A (sym)

document.getElementById('input-sentence').oninput = function() {
    const offset = 3;
    let str = this.value;
    let out = '';
    
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code = code + offset;
        out += String.fromCharCode(code);
    }

    document.getElementById('output-unicode').innerHTML = out.split('#').join('a');
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