// const textarea = document.querySelector("#postContent") as HTMLTextAreaElement;
// const charCount = document.querySelector("#charCount") as HTMLSpanElement;
// const warn = document.querySelector("#warningMsg") as HTMLDivElement;
// const maxLen = 200;
// const updataCharCounter = () => {
//     const currLen = textarea.value.length;
//     charCount.innerText = `${currLen} / ${maxLen}`;
//     if(currLen > maxLen) {
//         warn.style.display = 'block';
//     } else {
//         warn.style.display = 'none';
//     }
// }
// textarea.addEventListener('input', updataCharCounter);
var textarea = document.querySelector("#postContent");
var charCnt = document.querySelector("#charCount");
var warning = document.querySelector("#warning");
var maxLen = 20;
function updataCharCount() {
    var currLen = textarea.value.length;
    charCnt.innerText = "".concat(currLen, " / ").concat(maxLen);
    if (currLen > maxLen) {
        warning.style.display = "block";
    }
    else {
        warning.style.display = 'none';
    }
}
textarea.addEventListener('input', updataCharCount);
