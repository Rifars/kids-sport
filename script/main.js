function animate(items,animation){
    let img = document.querySelector(items);
    img.classList.add(animation);
}
animate('.hero-img','animate');