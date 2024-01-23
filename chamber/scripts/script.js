document.addEventListener('DOMContentLoaded', function () {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
    const root = document.documentElement;
    const modeButton = document.querySelector("#mode");



    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("☾")) {
            root.style.setProperty('--primary-background', '#000');
            root.style.setProperty('--primary-text', '#fff');
            root.style.setProperty('--secondary-background', 'rgb(27, 27, 27)');
            root.style.setProperty('--secondary-text', '#fff');
            modeButton.textContent = "🔆";
            
        } else {
            root.style.setProperty('--primary-background', '#bbb');
            root.style.setProperty('--primary-text', '#333');
            root.style.setProperty('--secondary-background', '#fff');
            root.style.setProperty('--secondary-text', '#1a237e');
            modeButton.textContent = "☾";
            

        }
    });
});
