function toggleTheme(){
    var root = document.querySelector(':root');
    var color_pallate = getComputedStyle(root);
    document.querySelector(".toggle-circle").classList.toggle("toggle-circle-checked");
    var toggle_theme_icon = document.querySelector("i.toggle_theme_icon");
    if(toggle_theme_icon.innerHTML === "dark_mode"){
        toggle_theme_icon.innerHTML = "light_mode";
        root.style.setProperty('--primary-bg-light', '#141c29');
        root.style.setProperty('--primary-color-light', '#e0e0e0');
        root.style.setProperty('--primary-shadow-glow-light', '#273a55');
        root.style.setProperty('--primary-shadow-dark-light', '#000');

        root.style.setProperty('--secondary-bg-light', '#0b111a');
        root.style.setProperty('--secondary-color-light', '#cfcfcf');
        root.style.setProperty('--secondary-shadow-glow-light', '#1e2c41');
        root.style.setProperty('--secondary-shadow-dark-light', '#000');
        
    }else{
        toggle_theme_icon.innerHTML = "dark_mode";
        root.style.setProperty('--primary-bg-light', '#e0e0e0');
        root.style.setProperty('--primary-color-light', '#253650');
        root.style.setProperty('--primary-shadow-glow-light', '#fff');
        root.style.setProperty('--primary-shadow-dark-light', '#b4b3b3');

        root.style.setProperty('--secondary-bg-light', '#cfcfcf');
        root.style.setProperty('--secondary-color-light', '#253650');
        root.style.setProperty('--secondary-shadow-glow-light', '#fff');
        root.style.setProperty('--secondary-shadow-dark-light', '#929292');
    }
}