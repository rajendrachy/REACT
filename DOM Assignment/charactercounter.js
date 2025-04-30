"use strict";
const textarea = document.querySelector("#postContent");
const charCount = document.querySelector("#charCount");
const warn = document.querySelector("#warningMsg");
const maxLen = 200;
const updataCharCounter = () => {
    const currLen = textarea.value.length;
    charCount.innerText = `${currLen} / ${maxLen}`;
    if (currLen > maxLen) {
        warn.style.display = 'block';
    }
    else {
        warn.style.display = 'none';
    }
};
textarea.addEventListener('input', updataCharCounter);

