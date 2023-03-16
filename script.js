let nav=document.getElementsByTagName('nav')[0]
window.addEventListener("scroll", function(){
    console.log(window.scrollY)
    if(window.scrollY>1){
        nav.classList.replace('bg-transparent','nav-color')
    }else if(window.scrollY<=0){
        nav.classList.replace('nav-color','bg-transparent')
    }
})