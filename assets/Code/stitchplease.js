const container = document.querySelector('.SP-ShowcasePattern');
const PatternCards =  container.querySelectorAll('.SP-PatternCard');
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

const SPShowcasePattern = () => {
    PatternCards.forEach( Pcard => {
        Pcard.addEventListener('mouseenter', (event) =>{
            event.target.querySelector('.SP-PatternTextCard').style.display = 'block';
        });
        Pcard.addEventListener('mouseleave', (event) =>{
            event.target.querySelector('.SP-PatternTextCard').style.display = 'none';
        });
    })
}

const ColorChangingSP = () => {
    setInterval(() => {
        YarnImgChanger.src = YarnImgArr[i];
        i++;

        if(i === YarnImgArr.length){
            i = 0;
        };
    },2000)
}

new Flickity( slider, {
    cellAlign:'center',
    wrapAround:'true',
    contain:true,
    pageDots:false,
    freeScroll:true,
    groupCells:true,
    imagesLoaded:true,
})

SPShowcasePattern();
ColorChangingSP();