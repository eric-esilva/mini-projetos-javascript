let body = document.getElementsByTagName('body')[0];
let main = document.getElementsByTagName('main')[0];
let darkMode = document.getElementById('dark-change');

darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    body.classList.toggle('night');
    main.classList.toggle('nightMain');
})