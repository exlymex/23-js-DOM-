let backgroundBody = prompt('enter body color') //фон для сторінки
let fontSize = prompt('Enter font size') // тип шпифта на сторінці
let leveling = prompt('Enter leveling') //вирівнювання для заголовка h1
let backgroundParagraph = prompt('Enter parag background-color') //фон для параграфа зі зсилками
let paragraphTextColor = prompt('Enter paragraph text color')
let link = prompt('Enter link color') // колір тексту у параграфі зі зсилками і для самих зсилок. При чому колір тексту для зсилок призначити у циклі
let divColor = prompt('Enter div color') //колір, розмір, товщину тексту у елементі div
let divSize = prompt('Enter div size')
let divFontSize = prompt('Enter div FontSize')
let liMark = prompt('Enter marking on li')

function bodyDecoration(backgroundBody, fontSize, leveling) {
    let colorBody = document.getElementById('body')
    colorBody.style.backgroundColor = `${backgroundBody}`
    console.log(colorBody)

    let fontSizeBody = document.getElementById('body')
    fontSizeBody.style.fontSize = `${fontSize}px`
    console.log(fontSizeBody)

    let levelingBody = document.getElementById('title')
    levelingBody.style.textAlign = `${leveling}`
    console.log(levelingBody)

}
function paragraphDecoration(link,backgroundParagraph,paragraphTextColor) {
    let linkColor = document.getElementsByTagName('a')
    for (let elem of linkColor) {
        elem.style.color = `${link}`
    }
    let paragColor = document.getElementById('parag')
    paragColor.style.cssText = `color:${paragraphTextColor};background-color:${backgroundParagraph}`
}
function divDecoration(divColor) {
    let divDecor = document.getElementById('block')
    console.log(divDecor)
    divDecor.style.cssText = `color:${divColor};width:${divSize}px;font-size:${divFontSize}px` 
}
function liDecoration(liMark) {
    let liStyle = document.getElementsByTagName('ul');
    for(let items of liStyle){
        items.style.cssText = `type:${liMark}`
        console.log(items)
    }
}
bodyDecoration(backgroundBody, fontSize,leveling)
paragraphDecoration(link, backgroundParagraph,paragraphTextColor)
divDecoration(divColor)
liDecoration(liMark)
