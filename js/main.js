const burger = document.querySelector('.burger');
const mobileNone = document.querySelector('.mobile-none');
const closedMob = document.querySelector ('.closed-mob');
const openMobile = document.querySelector ('.open-mobile')
const burgerFoot = document.querySelector ('.burger-foot')
const footMobile = document.querySelector ('.foot-mobile')
const closedFoot = document.querySelector ('.closed-foot')



burger.addEventListener('click', function() {
	openMobile.style.display = 'block'
})

closedMob.addEventListener('click', function() {
	openMobile.style.display = 'none'
})

burgerFoot.addEventListener('click', function() {
	footMobile.style.display = 'block'
})
closedFoot.addEventListener('click', function() {
	footMobile.style.display = 'none'
})


const orderBtn = document.querySelector('.order-btn')
const closed = document.querySelector ('.closed')
const openForm = document.querySelector ('.open-form')
const buttonMob = document.querySelector ('.button-mob')
const buttonFoot = document.querySelector ('.button-foot')
const footForm = document.querySelector ('.foot-form')
const closedForm = document.querySelector ('.closed-form')

orderBtn.addEventListener('click', function() {
	openForm.style.display = 'block'
})
closed.addEventListener('click', function() {
	openForm.style.display = 'none'
})
buttonMob.addEventListener ('click', function() {
	openForm.style.display = 'block'
})
buttonFoot.addEventListener ('click', function() {
	footForm.style.display = 'block'
})
closedForm.addEventListener('click', function() {
	footForm.style.display = 'none'
})
