

// function myFun(){
//     document.getElementById("but1").onclick = function(){
//         this.classList.add('active'); 
//         document.getElementById("but2").classList.remove('active');
//     document.getElementById("but3").classList.remove('active');
    
//     document.querySelector(".tabs__item2").style.display = "none";
//     document.querySelector(".tabs__item3").style.display = "none";
//     document.querySelector(".tabs__item").style.display = "block";
//     }
//     document.getElementById("but2").onclick = function(){
//         this.classList.add('active'); 
//         document.getElementById("but1").classList.remove('active');
//     document.getElementById("but3").classList.remove('active');
    
//     document.querySelector(".tabs__item2").style.display = "block";
//     document.querySelector(".tabs__item3").style.display = "none";
//     document.querySelector(".tabs__item").style.display = "none";
//     }
//     document.getElementById("but3").onclick = function(){
//         this.classList.add('active'); 
//         document.getElementById("but1").classList.remove('active');
//     document.getElementById("but2").classList.remove('active'); 
    
//     document.querySelector(".tabs__item2").style.display = "none";
//     document.querySelector(".tabs__item3").style.display = "block";
//     document.querySelector(".tabs__item").style.display = "none";
    
//     }




// }





const tabbtn = document.querySelectorAll(".tabs__nav button");
// console.log(tabbtn);
const tabsiteam = document.querySelectorAll(".tabs__item");
// console.log(tabsiteam);
//снимаем пометку актив и убираем все табы
function hideTabs(){
    tabsiteam.forEach(item => item.classList.add("hide"));  
    tabbtn.forEach(btn => btn.classList.remove("active"));
}


function showTab(index){
    tabsiteam[index].classList.remove("hide");
    tabbtn[index].classList.add("active");
}
hideTabs();
showTab(0);

tabbtn.forEach((btn, index) => btn.addEventListener("click", () => {
    hideTabs();
    showTab(index);
}) )














//anchors

const anchors = document.querySelectorAll(".header__nav a");
anchors.forEach(anc => {
    anc.addEventListener("click", function(event){
        event.preventDefault();

        const id = anc.getAttribute("href");

        const elem = document.querySelector(id);


        window.scroll({
            top: elem.offsetTop - 74,
            behavior: 'smooth'
        })

    })
})
