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





const textarea = document.querySelector("#postContent") as HTMLTextAreaElement;
const charCnt = document.querySelector("#charCount") as HTMLSpanElement;
const warning = document.querySelector("#warning") as HTMLDivElement;

let maxLen = 200;
function updataCharCount() {
 
   const currLen = textarea.value.length;
   charCnt.innerText = `${currLen} / ${maxLen}`;


   if(currLen > maxLen) {
    warning.style.display = "block";
   } else {
    warning.style.display = 'none';
   }
}

textarea.addEventListener('input', updataCharCount);

