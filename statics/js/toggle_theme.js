var color_holder = {
    "light_mode" : {
        "background" : "#141c29",
        "color" : "#e0e0e0",
        "glow" : "#1e2c41",
        "shadow" : "#000",
        "background-2" : "#0b111a",
        "color-2" : "#cfcfcf",
        "glow-2" : "#1e2c41",
        "shadow-2" : "#000"        
    },
    "dark_mode" : {
        "background" : "#e0e0e0",
        "color" : "#253650",
        "glow" : "#fff",
        "shadow" : "#b4b3b3",
        "background-2" : "#cfcfcf",
        "color-2" : "#253650",
        "glow-2" : "#fff",
        "shadow-2" : "#929292"
    },
    "red" : {
        "background" : "#460101",
        "color" : "#fafafa",
        "glow" : "#610505",
        "shadow" : "#2b0101",
        "background-2" : "#350000",
        "color-2" : "#fafafa",
        "glow-2" : "#580404",
        "shadow-2" : "#270000"
    },
    "green" : {
        "background" : "#8adf79",
        "color" : "#121a0d",
        "glow" : "#9eff8b",
        "shadow" : "#6ebd5e",
        "background-2" : "#76c467",
        "color-2" : "#121a0d",
        "glow-2" : "#81d370",
        "shadow-2" : "#6cb35e"
    },
    "sky" : {
        "background" : "#95cef0",
        "color" : "#253650",
        "glow" : "#b5dff7",
        "shadow" : "#789fb6",
        "background-2" : "#86bbda",
        "color-2" : "#0b111a",
        "glow-2" : "#aee0fd",
        "shadow-2" : "#6799b6"
    },
    "pink" : {
        "background" : "#F48989",
        "color" : "#253650",
        "glow" : "#ff9e9e",
        "shadow" : "#d36e6e",
        "background-2" : "#e97c7c",
        "color-2" : "#0b111a",
        "glow-2" : "#fda1a1",
        "shadow-2" : "#cc6c6c"
    },
    "off-yellow" : {
        "background" : "#dfd4a4",
        "color" : "#253650",
        "glow" : "#f5e7b4",
        "shadow" : "#c9bd8b",
        "background-2" : "#dacd96",
        "color-2" : "#0b111a",
        "glow-2" : "#f5e7b4",
        "shadow-2" : "#c9bd8b"
    },
    "yellow" : {
        "background" : "#ebd558",
        "color" : "#253650",
        "glow" : "#ffea71",
        "shadow" : "#ccb94c",
        "background-2" : "#d6c250",
        "color-2" : "#0b111a",
        "glow-2" : "#ffea71",
        "shadow-2" : "#ccb94c"
    },
    "purple" : {
        "background" : "#7b4098",
        "color" : "#b4b3b3",
        "glow" : "#8e50ad",
        "shadow" : "#673481",
        "background-2" : "#733c8f",
        "color-2" : "#b4b3b3",
        "glow-2" : "#8e50ad",
        "shadow-2" : "#673481"
    }
};

var color_list = ["sky", "purple", "off-yellow", "pink", "green", "yellow", "red"];
var last_choosed_from_picker = 0;
var color_now = 0;
var last_theme = "light_mode";

function toggleTheme(){
    last_choosed_from_picker = 0;
    var root = document.querySelector(':root');
    var toggle_theme_icon = document.querySelector("i.toggle_theme_icon");
    if(toggle_theme_icon.innerHTML !== "block")
        document.querySelector(".toggle-circle").classList.toggle("toggle-circle-checked");
    var toggle_theme_icon = document.querySelector("i.toggle_theme_icon");
    if(toggle_theme_icon.innerHTML === "dark_mode"){
        toggle_theme_icon.innerHTML = "light_mode";
    } else if(toggle_theme_icon.innerHTML === "block"){
        toggle_theme_icon.innerHTML = last_theme;
    } else{
        toggle_theme_icon.innerHTML = "dark_mode";
    }
    var toMode = toggle_theme_icon.innerHTML;
    root.style.setProperty('--primary-bg-light', color_holder[toMode]["background"]);
    root.style.setProperty('--primary-color-light', color_holder[toMode]["color"]);
    root.style.setProperty('--primary-shadow-glow-light', color_holder[toMode]["glow"]);
    root.style.setProperty('--primary-shadow-dark-light', color_holder[toMode]["shadow"]);

    root.style.setProperty('--secondary-bg-light', color_holder[toMode]["background-2"]);
    root.style.setProperty('--secondary-color-light', color_holder[toMode]["color-2"]);
    root.style.setProperty('--secondary-shadow-glow-light', color_holder[toMode]["glow-2"]);
    root.style.setProperty('--secondary-shadow-dark-light', color_holder[toMode]["shadow-2"]);
}

function themefrompicker(){
    if(document.querySelector("i.toggle_theme_icon").innerHTML !== "block"){
        last_theme = document.querySelector("i.toggle_theme_icon").innerHTML;
        document.querySelector("i.toggle_theme_icon").innerHTML = "block";
    }
    if(color_now === 0 && last_choosed_from_picker === 0){
        color_now = 0;
    } else {
        if (color_now === color_list.length){
            color_now = 0;
        }
    }
    var root = document.querySelector(':root');
    root.style.setProperty('--primary-bg-light', color_holder[color_list[color_now]]["background"]);
    root.style.setProperty('--primary-color-light', color_holder[color_list[color_now]]["color"]);
    root.style.setProperty('--primary-shadow-glow-light', color_holder[color_list[color_now]]["glow"]);
    root.style.setProperty('--primary-shadow-dark-light', color_holder[color_list[color_now]]["shadow"]);

    root.style.setProperty('--secondary-bg-light', color_holder[color_list[color_now]]["background-2"]);
    root.style.setProperty('--secondary-color-light', color_holder[color_list[color_now]]["color-2"]);
    root.style.setProperty('--secondary-shadow-glow-light', color_holder[color_list[color_now]]["glow-2"]);
    root.style.setProperty('--secondary-shadow-dark-light', color_holder[color_list[color_now]]["shadow-2"]);
    color_now += 1;
}
/*if(toggle_theme_icon.innerHTML === "dark_mode"){
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
}*/