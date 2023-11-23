function getElement(selection){
    const element = document.querySelector(selection);
    if (element) {
        return element;
    }
    throw new Error(
        `Please check "${selection}" selector, no such element exists`
    );
}

function Gallery(element) { 
    console.log ('estoy en gallery alv')
    console.log(element)
    this.container = element 
this.list = [...element.querySelectorAll('.img')];
// target
this.modal = getElement('.modal');
this.modalImg = getElement('.main-img');
this.modalImages = getElement('modal-images');
this.closeBtn = getElement('.close-btn');
this.nextBtn = getElement('.next-btns');
this.prevBtn = getElement('.prev-btn');
// bind functions 

this.container.addEventListener('click', this.openModal)
}

Gallery.prototype.openModal = function() {
    console.log(this);
    console.log('open modal')
}

const nature = new Gallery(getElement('.nature'))
const city = new Gallery(getElement('.city'))