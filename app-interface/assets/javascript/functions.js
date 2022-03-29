// FOR MENU
let list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', activeLink));

// FOR DISPLAY
let btnHome = document.querySelector('#home');
let boxContent = document.querySelector('.boxContent');
let title = document.querySelector('#boxTitle');
let paragraph = document.querySelector('#boxParagraph');
let profileSession = document.querySelector('.profile');
let imgSession = document.querySelector('.image');
let messageSession = document.querySelector('.message');
let settingSession = document.querySelector('.settings');
let text = document.getElementById('p');

// HIDING THINGS
function hideSession(position) {
    switch(position){
        case 'home':profileSession.style.display = 'none';
                    imgSession.style.display = 'none';
                    messageSession.style.display = 'none';
                    settingSession.style.display = 'none';
                    break;
        
        case 'profile': imgSession.style.display = 'none';
                        messageSession.style.display = 'none';
                        settingSession.style.display = 'none';            
                        break;
        
        case 'message': profileSession.style.display = 'none';
                        imgSession.style.display = 'none';
                        settingSession.style.display = 'none';
                        break;

        case 'photos': profileSession.style.display = 'none';
                       messageSession.style.display = 'none';
                       settingSession.style.display = 'none';
                       break;

        case 'settings': profileSession.style.display = 'none';
                         imgSession.style.display = 'none';
                         messageSession.style.display = 'none';                
                         break;
    
        default:profileSession.style.display = 'none';
                imgSession.style.display = 'none';
                messageSession.style.display = 'none';
                settingSession.style.display = 'none';
    }
}

function showHome() {
    //Hiding function
    hideSession(`home`);

    title.innerHTML = `Welcome to the app`;
    paragraph.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum cursus convallis. Aenean in luctus sem, ut vehicula felis. Duis eu cursus orci, eget interdum odio. In venenatis lacus quis ligula rutrum cursus. Nulla quis semper elit, sit amet viverra est. Suspendisse luctus lorem quis sapien euismod, ut posuere nibh dictum. Phasellus quis congue ex. Mauris at condimentum lectus. Donec sed nibh semper, fringilla sem consectetur, lacinia lectus. Etiam sit amet diam vestibulum ligula sagittis eleifend.<br/><br/>

    Curabitur a malesuada sem. Suspendisse fringilla, massa in fermentum laoreet, diam nibh maximus tellus, sed faucibus sem lacus non tortor. Donec in viverra tortor, non rhoncus felis. Quisque commodo dui ut maximus laoreet. Maecenas rutrum lectus urna, ac aliquam quam condimentum vel. Nullam commodo sapien suscipit leo vestibulum, tristique ultricies nisi pharetra. Morbi ac ante porta, ultrices erat vel, tempor erat.<br/><br/>`;
}
function showProfile() {
    //Hiding function
    hideSession(`profile`);
    //Showing up session
    profileSession.style.display = 'block';
    profileSession.style.visibility = 'visible';

    title.innerHTML = `Profile`;
    paragraph.innerHTML = ``;
}
function showMessage() {
    //Hiding function
    hideSession(`message`);

    title.innerHTML = `Message`;
    paragraph.innerHTML = `It is a great pleasure to have you here. I just developed this thinking about how users could interact with it. Hope you're enjoying it so much. You're always welcome here.<br><br>Feel free to send me a message and give your suggestions or criticisms.`;

    messageSession.style.display = 'block';
    messageSession.style.visibility = 'visible';
}
function showPhotos() {
    //Hiding function
    hideSession(`photos`);
    
    title.innerHTML = `Photos`;
    paragraph.innerHTML = `<u><strong>NOTE</strong></u>: Place the cursor <u>on any image</u> to see it better, or select anyone of them to <strong>delete it</strong>.`;
    
    imgSession.style.display = 'block';
    imgSession.style.visibility = 'visible';
}
function showSettings() {
    //Hiding function
    hideSession(`settings`);

    settingSession.style.display = 'block';
    settingSession.style.visibility = 'visible';

    title.innerHTML = `Settings`;
    paragraph.innerHTML = ``;
}
// BUTTON SEND MESSAGE
function sendMessage(){
    let issue = document.getElementById('cIssue');
    let message = document.getElementById('cMessage');
    if(issue.value === ``){
        alert(`You must enter an issue in the subject field`);
    } else if(message.value === ``){
        alert(`You must enter a message in the message field`);
    } else {
        const confirmSend = confirm(`Are you sure you wanna send the message with the issue '${issue.value}'?`);
        if(confirmSend){
            alert(`Status: The message was successfully sent to lucasbarrosprofessional@gmail.com`);
            issue.value = ``;
            message.value = ``;
        }
    }
}

function deletePhoto(photo){
    //Declaring some arrays to keep all images and delete buttons
    let img = [
        img1 = document.getElementById('boxImage1'),
        img2 = document.getElementById('boxImage2'),
        img3 = document.getElementById('boxImage3'),
        img4 = document.getElementById('boxImage4')
    ];
    let btnDelete = [
        btnD1 = document.querySelector('.btnD1'),
        btnD2 = document.querySelector('.btnD2'),
        btnD3 = document.querySelector('.btnD3'),
        btnD4 = document.querySelector('.btnD4')
    ];
    //Confirm action to delete photo
    confirm(`Are you sure you want to delete this photo?`);
    if(confirm){
        alert(`Done!`);
        switch(photo){
            case `img1`:img[0].style.background = 'none';
                        btnDelete[0].style.display = 'none';
                        break;
            case `img2`:img[1].style.background = 'none';
                        btnDelete[1].style.display = 'none';
                        break;
            case `img3`:img[2].style.background = 'none';
                        btnDelete[2].style.display = 'none';
                        break;
            case `img4`:img[3].style.background = 'none';
                        btnDelete[3].style.display = 'none';
                        break;
            default: alert(`Nothing else to delete`);
        }
    }
}

// NIGHT MODE INTERRUPTOR
function switchNightMode(){
    let nightMode = document.getElementById('btnNightMode');
    if(nightMode.value == 1){
        alert(`Night mode activated`);
    } else {
        alert(`Night mode deactivated`);
    }
}

// BUTTON APPLY FONT SIZE
function setFontSize(){
    let numValue = document.getElementById('cNumber').value;
    if(document.body){
        if(numValue >= 8 && numValue <= 10){
            document.querySelectorAll('p').style.value = numValue;
        } else {
            alert(`This value is not allowed to be applied`);
        }
    } else throw new Error('No Support');
}

// HIGH CONTRAST INTERRUPTOR
function switchHighContrast(){
    let highContrast = document.getElementById('btnContrast');
    if(highContrast.value == 1){
        alert(`High contrast activated`);
    }
}

// COLOR THEME SELECTOR
function setFontColor(){
    let color = document.getElementById('colorSelector').value;
    if(document.body){
        boxContent.style.color = color;
    } else throw new Error('No Support');
}

// BUTTON SEE STATUS
function seeStatus(){
    let btnStatus = document.getElementById('btnStatus');
    alert(`Working on`);
    paragraph.innerHTML = `Something`;
    
}