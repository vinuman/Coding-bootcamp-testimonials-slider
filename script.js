const profiles = [
    {
    id:1,
    name: 'Tanya Sinclair',
    role: 'UX Engineer',
    text: " \"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.\"",
    img: 'image-tanya.jpg'
    },

    {
    id:2,
    name: 'John Tarkpor',
    role: 'Senior Front-end Developer',
    text: "\"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.\"",
    img: 'image-john.jpg'
    },
    {
    id:3,
    name:'Vinu Cyril',
    role: 'Junior Front-end Developer',   
    text: "\"If you are worried about laying a good foundation and have a proper structure throughout your learning curver, this is the place to be. I now feel so confident about starting up as a professional developer.\"",
    img: 'https://scontent.fblr24-1.fna.fbcdn.net/v/t1.6435-9/147129917_10160314879988943_7550763547557025069_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=EMuslJRjv3QAX92xySC&_nc_ht=scontent.fblr24-1.fna&oh=00_AfAQKvnWUotsfkedibjUmzoSdp5-QiMPJjLXXBrMmkn_TQ&oe=6435400A'
    }
]

const prevButton = document.querySelector('.btn1');
const nextButton = document.querySelector('.btn2');
const profileName = document.querySelector('.name');
const profileRole = document.querySelector('.role');
const profileContent = document.querySelector('h1');
const imgSrc = document.querySelector('.profile-pic');


let currentItem = 0;


window.addEventListener('DOMContentLoaded', function(){
    const item = profiles[currentItem];
    profileName.textContent = item.name;
    profileRole.textContent = item.role;
    profileContent.textContent = item.text;
    imgSrc.src = item.img;
});

prevButton.addEventListener('click', function(){
    if(currentItem>0){
        currentItem--;
    } else if(currentItem === 0){
        currentItem = profiles.length-1;
    }
    const item = profiles[currentItem];
    profileContent.style.transform = 'translateY(-1000px)';
    imgSrc.style.transform = 'translateY(1000px)';
    profileName.style.transform = 'translateX(-1000px)';
    profileRole.style.transform = 'translateX(1000px)';
     //PARALLAX
    setTimeout(function(){
        profileName.textContent = item.name;
        profileRole.textContent = item.role;
        profileContent.textContent = item.text;
        imgSrc.src = item.img;
    }, 500);
   
    setTimeout(function(){
        profileContent.style.transform = 'translateY(0px)';
        imgSrc.style.transform = 'translateY(0px)';
        profileName.style.transform = 'translateX(0px)';
        profileRole.style.transform = 'translateX(0px)';
    }, 500);
})


nextButton.addEventListener('click', function(){
    if(currentItem === profiles.length-1){
        currentItem = 0;
    } else if(currentItem < profiles.length-1){
        currentItem++;
    }
    const item = profiles[currentItem];

    profileContent.style.transform = 'translateY(-1000px)';
    imgSrc.style.transform = 'translateY(1000px)';
    profileName.style.transform = 'translateX(-1000px)';
    profileRole.style.transform = 'translateX(1000px)';
    //PARALLAX
    setTimeout(function(){
    profileName.textContent = item.name;
    profileRole.textContent = item.role;
    profileContent.textContent = item.text;
    imgSrc.src = item.img;
    },500);

    setTimeout(function(){
        profileContent.style.transform = 'translateY(0px)';
        imgSrc.style.transform = 'translateY(0px)';
        profileName.style.transform = 'translateX(0px)';
        profileRole.style.transform = 'translateX(0px)';
    }, 500);
});


document.addEventListener('keydown', function(event){
    if(event.code==='ArrowRight'){
        nextButton.click();
    } else if(event.code==='ArrowLeft'){
        prevButton.click();
    }
})