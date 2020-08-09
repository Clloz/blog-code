function $(selector) {
    return document.querySelector(selector)
}


var stop_btn = $("#stop");
stop_btn.addEventListener('click', function (e) {
    $('.box').addEventListener('click', function (e) {
        e.stopPropagation()
        console.log('box捕获阶段阻止传播')
    }, true)
})

$('.container').addEventListener('click', function (e) {
    console.log('contianer click.. in 捕获阶段')
}, true)
$('.box').addEventListener('click', function (e) {
    //e.stopPropagation()
    console.log('box click.. in 捕获阶段')
}, true)
$('.target').addEventListener('click', function (e) {
    console.log('target click.. in 捕获阶段')
}, true)

$('.container').addEventListener('click', function (e) {
    console.log('contianer click.. in 冒泡阶段')
}, false)
$('.box').addEventListener('click', function (e) {
    //e.stopPropagation()
    console.log('box click.. in 冒泡阶段')
}, false)
$('.target').addEventListener('click', function (e) {
    console.log('target click.. in 冒泡阶段')
}, false)    