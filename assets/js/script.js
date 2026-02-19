const slides = [
    {
      image: 'https://picsum.photos/1600/800?random=1',
      title: 'Tile image',
      description: 'Description Image'
    },
    {
      image: 'https://picsum.photos/1600/800?random=2',
      title: 'Tile image',
      description: 'Description Image'
    },
    {
      image: 'https://picsum.photos/1600/800?random=3',
      title: 'Tile image',
      description: 'Description Image'
    }
]

let active_index = 0
let active_slide = slides[active_index]

// Selettori
const slider_el = document.getElementById('slider')
const next_el = document.querySelector('.next')
const prev_el = document.querySelector('.prev')

// Creo elemento img e lo aggiungo a slider_el
const slide_img_el = document.createElement('img')
slider_el.appendChild(slide_img_el)

// Render img
function renderSlide(image_el, active_el) {
    image_el.src = active_el.image
    image_el.alt = active_el.title

    for(let i = 0; i <slides.length; i++) {
        thumbs_nodelist_el[i].classList.remove('opacity-50')
    }
    thumbs_nodelist_el[active_index].classList.add('opacity-50')

}

// Next

function handleNext() {

    active_index++

    if (active_index === slides.length) {
      active_index = 0
    } 

    active_slide = slides[active_index]
    renderSlide(slide_img_el, active_slide)
      
}

next_el.addEventListener('click', handleNext);

// Prev

function handlePrev() {

    active_index--

    if (active_index === -1) {
      active_index = slides.length - 1
    } 

    active_slide = slides[active_index]
    renderSlide(slide_img_el, active_slide)

}

prev_el.addEventListener('click', handlePrev);

// Autoplay

let autoplayId = setInterval(handleNext, 3000);

// Stop Autoplay

slider_el.addEventListener('mouseenter', function(){

    clearInterval(autoplayId)

})

// Restart Autoplay

slider_el.addEventListener('mouseleave', function(){

    autoplayId = setInterval(handleNext, 3000);
  
})


// Thumbnail

const thumbs_el = document.querySelector('.thumbs')


for(let i = 0; i <slides.length; i++) {
    
    const {image} = slides[i];
    
    const markup = `<img class="col-2" src="${image}" alt="">`

    thumbs_el.innerHTML += markup

}

const thumbs_nodelist_el = document.querySelectorAll('.thumbs img')



for(let i = 0; i < thumbs_nodelist_el.length; i++ ) {

    const el = thumbs_nodelist_el[i];

    el.addEventListener('click', function() {

    active_index = i;
    active_slide = slides[active_index];
    renderSlide(slide_img_el, active_slide)

    })

}