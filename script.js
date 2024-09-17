



const wrapper=document.querySelector(".wrapper"),
generatebtn=wrapper.querySelector(".form button"),
qrinput=wrapper.querySelector(".form input"),
qr_img=wrapper.querySelector(".qr-code img");

generatebtn.addEventListener("click",()=>{
    let qrValue=qrinput.value;
    if (!qrValue) return;
    generatebtn.innerText="Generating QR Code...";

     qr_img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
     qr_img.addEventListener("load",()=>{
        wrapper.classList.add('active');
        generatebtn.innerText="Generating QR Code...";
    })
})

qrinput.addEventListener("keyup",()=>{
    if(!qrinput.value){
    wrapper.classList.remove("active");
    generatebtn.innerText="Generate QR Code";
}
})