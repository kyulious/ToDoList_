const text = document.getElementById("text");
const ck = document.getElementById("ckbtn");
const right = document.getElementById("righta");
const down = document.getElementById("downa");
const finish = document.getElementById("finish");
const item = document.getElementById("items");
const finishitem = document.getElementById("finishitem");

text.addEventListener("mouseover", function(){
    text.focus();
    text.style.borderBottom="2px solid gray";
})
ck.addEventListener("click", function(){
    if(text.value != ""){
        item.style.display="inline";
        const list2 = document.createElement('ul')
        list2.innerText = text.value;
        items.appendChild(list2);
        ck.style.display="inline";
        text.value = "";
        ck.checked=false;
        item.style.fontSize="20px";
        item.style.marginLeft="20px";
        item.style.marginTop="10px";
        list2.style.borderBottom="1px solid rgb(172, 172, 172)"
        list2.style.width="700px"
        list2.style.paddingTop="10px";
        list2.addEventListener('click', function(){
            list2.style.textDecoration = "line-through";
        })
    }
    
});

text.addEventListener("keyup", function(e){
    e.preventDefault();
    if(e.key === 'Enter' && text.value != ""){
        item.style.display="inline";
        const list2 = document.createElement('ul');
        list2.innerText = text.value;
        items.appendChild(list2);
        ck.style.display="inline";
        text.value = "";
        item.style.fontSize="20px";
        item.style.marginLeft="20px";
        item.style.marginTop="10px";
        list2.style.borderBottom="1px solid rgb(172, 172, 172)"
        list2.style.width="700px"
        list2.style.paddingTop="10px";
        list2.addEventListener('click', function(){
        list2.style.textDecoration = "line-through";
        })
    }
});


item.addEventListener("click", function(){
    const list3 = document.createElement('ul')
    list3.innerText = item.value;
    finishitem.innerText = item3;
})
