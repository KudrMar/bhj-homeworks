function getProgress() {

    const form = new FormData();

    let fileEl = document.getElementById("file");
    form.append('file', fileEl.files[0], fileEl.files[0].name);

    let xhr = new XMLHttpRequest();
    xhr.responseType = "multipart/form-data";
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    
    xhr.upload.onprogress = function(event) {
        const progress = document.getElementById( 'progress' );
        progress.value = event.loaded/event.total;
    };
    xhr.upload.onerror = function(event) {
        const progress = document.getElementById( 'progress' );
        progress.value = 0;
    };
    xhr.send(form);

 }


addEventListener("submit", (event) => {
    event.preventDefault();
    getProgress();
});



