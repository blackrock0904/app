// const { ipcRenderer } = require('electron');
const path = require('path');

const folderInput = document.querySelector('#folderInput');
const folderOutput = document.querySelector('#folderOutput');
const inputFileList = document.querySelector('#inputFileList');
const btn = document.querySelector('#download');
const output = document.querySelector('#output');
let fOutput;
let fInput;

function getPath(str) {
  str = str.split('/');
  str.pop();
  return str.join('/');
}

folderInput.addEventListener('change', e => {
  const files = folderInput.files;
  let result = '';
  for (let el of files) result += `<div>${el.name}</div>`;
  inputFileList.innerHTML = result;
});

folderOutput.addEventListener('change', e => {
  output.innerHTML = getPath(folderOutput.files[0].path);
})

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})
ipcRenderer.sendSync('synchronous-message', 'ping')
