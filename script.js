let wrapper = document.getElementsByClassName("wrapper")[0];

let template = document.getElementsByTagName("template")[0];

let names = ["Tarun", "Tushar" ," Ujjawal"];

let colors = ['#FF0000','#00FF00','#FF0000','#00FF00','#FF0000','#00FF00','#800000','#8B0000',"FFA500","#FFD700","#6B8E23","#7CFC00","#00080","#8B008B","#FF00FF","#F4A460","FF3855","#FD3A4A","#FB4D46","#FA5B3D","#FFAA1D","#FFF700","#299616","#A7F432","#2243B6","#5DADEC","#5946B2","#9C51B6"];

let sticker = function(name){
    let div = template.content.querySelector('div');
    let nameofStick = div.querySelector('.name');

    nameofStick.innerHTML = name;

    div.style.background = colors[Math.floor(Math.random()*colors.length)];

    div.style.transform= "rotate("  + (Math.random()*40-20)+ "deg )";

    let node = document.importNode(div,true);
    wrapper.appendChild(node)
}

setTimeout(refreshpage,1000);
function refreshpage(){
    location.reload();
}
names.forEach(sticker);



