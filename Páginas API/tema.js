
function light() {
    var isChecked = document.getElementById('Switch').checked;
    
    if (isChecked) {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');  
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');   
    }
}


function loadTheme() {
    var savedTheme = localStorage.getItem('theme'); 

    if (savedTheme) {
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            document.getElementById('Switch').checked = true;  
        } else {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            document.getElementById('Switch').checked = false;  
        }
    } else {
        document.body.classList.add('dark-mode');  
    }
}

window.onload = loadTheme;  

const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
document.body.setAttribute('data-theme', theme);

