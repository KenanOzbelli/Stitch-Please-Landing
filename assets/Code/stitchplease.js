const container = document.querySelector('.SP-ShowcasePattern');
const PatternCards =  container.querySelectorAll('.SP-PatternCard');
const PatternCarousel = container.querySelectorAll('.SP-CarouselCard')
const YarnImgChanger = document.querySelector('#SP-YarnChange');
const slider = document.querySelector('.main-carousel');
const YarnImgArr = [
    "./assets/Image/StitchPleaseWoolChunky_1135-02_StayGold_ball_434x@2x.progressive.jpg",
    "./assets/Image/StitchPleaseWoolChunky_1135-04_BigApple_ball_434x@2x.progressive.jpg 20-17-53-834.jpg",
    "./assets/Image/StitchPleaseWoolChunky_1135-09_TickledPink_ball_460x@2x.progressive.jpg",
    "./assets/Image/StitchPleaseWoolChunky_1135-15_BeMorePacific_ball_434x@2x.progressive.jpg 20-17-53-957.jpg",
    "./assets/Image/StitchPleaseWoolChunky_1135-22_WhoopsieDaisy_ball_460x@2x.progressive.jpg 20-17-53-965.jpg",
    "./assets/Image/StitchPleaseWoolChunky_1135-28_BlackSheep_ball_434x@2x.progressive.jpg 20-17-53-974.jpg",
    "./assets/Image/StitchPleaseWoolChunky_1135-29_GrayAllDay_ball_434x@2x.progressive.jpg"
]
let i = 0;

// Showcase Text on Laptops Only
const SPShowcasePattern = () => {
    PatternCards.forEach( Pcard => {
        Pcard.addEventListener('mouseenter', (event) =>{
            if(window.innerWidth >= 768){
            event.target.querySelector('.SP-PatternTextCard').style.display = 'block';
            }
        });
        Pcard.addEventListener('mouseleave', (event) =>{
            if(window.innerWidth >= 768){
            event.target.querySelector('.SP-PatternTextCard').style.display = 'none';
            }
        });
    })
}
// Yarn Color Changer
const ColorChangingSP = () => {
    setInterval(() => {
        YarnImgChanger.src = YarnImgArr[i];
        i++;

        if(i === YarnImgArr.length){
            i = 0;
        };
    },2000)
}

// Pattern Sliders
const PatternFlickity = () => {
    PatternCarousel.forEach(Pcard => {
       const flikty = new Flickity( Pcard, {
            groupCells:false,
            imagesLoaded:true,
            prevNextButtons:true,
            wrapAround:'true',
            pageDots: true,
        });

        ShowcaseSlide(flikty);

        Pcard.addEventListener('mouseenter', (event) => {
            if(window.innerWidth >= 768){
                const buttons = event.target.querySelectorAll('.flickity-button');

                buttons.forEach(button => {
                    button.style = 'visibility: visible';
                })
            }
        })
        Pcard.addEventListener('mouseleave', (event) => {
            if(window.innerWidth >= 768){
                const buttons = event.target.querySelectorAll('.flickity-button');

                buttons.forEach(button => {
                    button.style = 'visibility: hidden ';
                })
            }
        })
    
    })
}
const ShowcaseSlide = (slide) => {
    PatternCards.forEach(card => {
        card.classList.remove('is-loading')
    })
    slide.resize();
}

// Bottom Slider
new Flickity( slider, {
    cellAlign:'center',
    wrapAround:'true',
    pageDots:false,
    freeScroll:false,
    draggable: false,
    groupCells:true,
    imagesLoaded:true,
})

SPShowcasePattern();
ColorChangingSP();
PatternFlickity();