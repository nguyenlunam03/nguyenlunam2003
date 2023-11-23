function checkUserName() {
    var user = document.getElementById("txtusername");
    var error = document.getElementById("name-error");
    var pattern = /^[a-zA-Z0-9]+$/;
    if (user.value.length >= 6 && pattern.test(user.value)) {
        error.style.display = "none";
        return true;
    } else {
        error.style.display = "block";
        return false;
    }
}

function checkSDT() {
    var input = document.getElementById("txtsdt");
    var error = document.getElementById("sdt-error");
    var pattern = /^[0][1-9]{9}$/;
    if (!pattern.test(input.value)) {
        error.style.display = "block";
        return false;
    } else {
        error.style.display = "none";
        return true;
    }
}

function checkEmail() {
    var input = document.getElementById("txtemail");
    var error = document.getElementById("email-error");
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var gmailPattern = /@gmail.com$/;
    if (!pattern.test(input.value) || !gmailPattern.test(input.value)) {
        error.style.display = "block";
        return false;
    } else {
        error.style.display = "none";
        return true;
    }
}

function checkPass() {
    var input = document.getElementById("txtpass");
    var error = document.getElementById("pass-error");
    var pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!pattern.test(input.value)) {
        error.style.display = "block";
        return false;
    } else {
        error.style.display = "none";
        return true;
    }
}

function checkRepass() {
    var passwordInput = document.getElementById("txtpass");
    var confirmInput = document.getElementById("txtrepass");
    var error = document.getElementById("repass-error");
    if (passwordInput.value !== confirmInput.value) {
        error.style.display = "block";
        return false;
    } else {
        error.style.display = "none";
        return true;
    }
}

function saveData() {
    console.log(checkUserName(), checkSDT(), checkEmail(), checkPass(), checkRepass());
    var nameInput = document.getElementById("txtusername");
    var sdtInput = document.getElementById("txtsdt");
    var emailInput = document.getElementById("txtemail");
    var passwordInput = document.getElementById("txtpass");
    var repassInput = document.getElementById("txtrepass");
    if (nameInput.value == "" || passwordInput.value == "" || sdtInput.value == "" || emailInput.value == "" || repassInput.value == "") {
        alert("Vui lòng không để trống");
    }
    if (checkUserName() && checkSDT() && checkEmail() && checkPass() && checkRepass()) {
        var userData = {
            name: nameInput.value,
            sdt: sdtInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "login.html";
        alert("Đăng Ký Thành Công");

    } else {
        alert("Vui lòng nhập đúng định dạng")
    }
}

function login() {
    var userInput = document.getElementById("input-login-username");
    var passwordInput = document.getElementById("input-login-password");
    var storedData = localStorage.getItem("userData");
    if (storedData) {
        var userData = JSON.parse(storedData);
        if (userInput.value == userData.name && passwordInput.value == userData.password) {
            window.location.href = "user.html";
            alert("Đăng nhập thành công");
        } else {
            alert("Email hoặc mật khẩu không đúng!");
        }
    } else {
        alert("Không tìm thấy dữ liệu đăng kí!");
    }
}