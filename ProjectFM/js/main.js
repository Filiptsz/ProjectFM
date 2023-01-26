function main(){
{
const el = document.getElementsByClassName('menu2')[0].children[0].children[0].style;
document.getElementById('button-stripes').onclick = function(){
    if(el.width=='0px'||el.width==''){
        el.transition = 'width .33s, font-size 0s .14s';
        el.width='var(--menu2-ul-width)';
        el.fontSize = '20px';
    }else{
        el.transition = 'width .33s';
        el.width='0px';
        el.fontSize = '0px';
    }
}
}
}