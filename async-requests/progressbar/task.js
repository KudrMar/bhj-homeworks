function getProgress() {

    const form = new FormData();

    let fileEl = document.getElementById("file");
    fileEl.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    form.append('file', fileEl.files[0]);
    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
    xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    xhr.setRequestHeader("Accept", "multipart/form-data");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "netology.ru");
    
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


document.addEventListener("submit", (event) => {
    event.preventDefault();
    getProgress();
});



