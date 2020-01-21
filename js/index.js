
const navLinks = document.querySelectorAll('a');

const buttOver = (event) => {
    event.target.style.color = 'coral';
};

const buttOut = (event) => {
    event.target.style.color = 'black';
};

navLinks.forEach(link => {
    link.addEventListener('mouseover', buttOver)
});

navLinks.forEach(link => {
    link.addEventListener('mouseout', buttOut)
});

const logoHeadMouseDown = document.querySelector('.logo-heading')
logoHeadMouseDown.addEventListener('mousedown', (event) => {
    event.target.style.fontSize = '80px'
});

const logoHeadMouseUp = document.querySelector('.logo-heading')
logoHeadMouseUp.addEventListener('mouseup', (event) => {
    event.target.style.fontSize = '40px'
});

const dblHtwo = document.querySelector('h2')
dblHtwo.addEventListener('dblclick', (event) => {
    event.target.style.color = 'blue'
});

const form = document.querySelector('form')

form.addEventListener('focus', (event) => {
event.target.style.background = 'lightblue'
},true);

form.addEventListener('blur', (event) => {
event.target.style.background = ''
},true);

const topImage = document.querySelector('img')

window.addEventListener('resize', () => {
    topImage.style.display = 'none'
});

const upperContent = document.querySelector('.content-section')

window.addEventListener('scroll', () => {
    upperContent.style.flexWrap = 'none'
    upperContent.style.flexDirection = 'row-reverse'
    upperContent.style.transform = "rotate(1turn)"
    upperContent.style.transition = 'all 1s'
});

const changePink = document.getElementById('name')

changePink.addEventListener('select', (event) => {
    event.target.style.color = 'pink'
})


