document.addEventListener("DOMContentLoaded", init, false);
function init() {
    console.log("inside init")
    document.querySelector('#files').addEventListener('change', handleFileSelect, false);
    const uploadField = document.getElementById("fileCount");
    let filesList = [];
    document.querySelector('#fileCount').innerText = filesList.length + " files selected";
    document.querySelector('#reset').addEventListener('click', resetForm, false);
}
function validateFileSelection() {
    console.log(filesList.length);
    if (filesList.length > 60) {
      alert("Too many files uploaded. File limit is 60.");
      resetForm();
      return;
    }
    for (let i=0; i < filesList.length; i++) {
      if (filesList[i].size > 4000000) {  // file size should not exceed 4MB
          alert(filesList[i].name + " is too big!");
          resetForm();
          return;
      }
    }
};
function resetForm() {
    document.querySelector("#myForm").reset();
    filesList = [];
    document.querySelector('#fileCount').innerText = filesList.length + " files selected";
    document.querySelector("#selectedFiles").innerHTML = '';
}
function handleFileClear(e) {
    console.log(e.dataset.file);
    const file = e.dataset.file;
    filesList.splice(Number(file.split('-')[1]) , 1);
    console.log("filesList - ", filesList);
    document.querySelector("." + file).remove();
    document.querySelector('#fileCount').innerText = filesList.length + " files selected";
}
function handleFileSelect(e) {
    console.log("inside handler");
    if (!e.target.files) return;
    document.querySelector("#selectedFiles").innerHTML = '';
    const files = e.target.files;
    const selDiv = document.querySelector("#selectedFiles");
    filesList = Array.from(e.target.files);
    for (let i = 0; i < files.length; i++) {
        const f = files[i];
        const className = "file-" + i;
        console.log(f.name);
        selDiv.innerHTML += '<div class=' + className + '>' + f.name +
            '<button class="clearBtn" data-file=' + className + ' type="button" onclick="handleFileClear(this)">X</button></div>';
    }
    document.querySelector('#fileCount').innerText = filesList.length + " files selected";
    document.querySelector("#myForm").reset();
    validateFileSelection();
}
