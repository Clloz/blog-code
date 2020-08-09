function $(selector) {
    return document.querySelector(selector);
}
function $$(selector) {
    return document.querySelectorAll(selector);
}

// modal的显示
$('header .login').onclick = function (e) {
    e.stopPropagation();
    $('.flip-modal').classList.add('show');
}
document.addEventListener('click', function () {
    $('.flip-modal').classList.remove('show');
})


// modal的切换和关闭
$('.flip-modal').addEventListener('click', function (e) {
    e.stopPropagation();
    if (e.target.classList.contains('login')) {
        $('.flip-modal').classList.remove('register');
        $('.flip-modal').classList.add('login');
    }
    if (e.target.classList.contains('register')) {
        $('.flip-modal').classList.add('register');
        $('.flip-modal').classList.remove('login');
    }
    if (e.target.classList.contains('fa-close')) {
        $('.flip-modal').classList.remove('show');
    }
})

//表单校验和提交
$('.modal-login form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!/^\w{3,8}$/.test($('.modal-login input[name=username]').value)) {
        $('.modal-login .errormsg').innerText = '用户名需输入3-8个字符，包括字母数字下划线';
        return false;
    }
    if (!/^\w{6,10}$/.test($('.modal-login input[name=password]').value)) {
        $('.modal-login .errormsg').innerText = '密码需输入6-10个字符，包括字母数字下划线';
        return false;
    }
    this.submit();
})

$('.modal-register form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!/^\w{3,8}$/.test($('.modal-register input[name=username]').value)) {
        $('.modal-register .errormsg').innerText = '用户名需输入3-8个字符，包括字母数字下划线';
        return false;
    }
    if (/^clloz$/.test($('.modal-register input[name=username]').value)) {
        $('.modal-register .errormsg').innerText = '用户名已存在';
        return false;
    }
    if (!/^\w{6,10}$/.test($('.modal-register input[name=password]').value)) {
        $('.modal-register .errormsg').innerText = '密码需输入6-10个字符，包括字母数字下划线';
        return false;
    }
    if ($('.modal-register input[name=password]').value !== $('.modal-register input[name=password2]').value) {
        $('.modal-register .errormsg').innerText = '两次输入的密码不一致';
        return false;
    }
    this.submit()
})