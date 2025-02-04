let numberreg = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
let number = document.querySelector(".card-number");
let valid = false;
let name1 = document.querySelector(".box2 .name");
let namevalid = false;
let movalid = false;
let mo = document.querySelector(".month");
let yr = document.querySelector(".year");
let yrvalid = false;
let cvcvalid = false;
let cvc = document.querySelector(".cvc");
let confirm = document.querySelector(".confirm");
cvc.onblur = function () {
    if (cvc.value !== "") {
        mo.parentElement.classList.remove("requercvc");
        if (typeof parseInt(cvc.value) === NaN) {
            cvc.parentElement.classList.add("unvalidcvc");
            cvcvalid = false;
        } else {
            if (cvc.value.length === 3) {
                cvcvalid = true;
                cvc.parentElement.className = "cvc"
                document.querySelector(".back span").innerHTML = cvc.value;
            } else {
                cvcvalid = false;
                cvc.parentElement.classList.add("unvalidcvc")
            }

        }

    } else {
        cvc.parentElement.classList.add("requercvc");
        cvcvalid = false
    }
}
mo.onblur = function () {
    if (mo.value !== "") {
        mo.parentElement.classList.remove("requermo");
        if (typeof parseInt(mo.value) === NaN) {
            mo.parentElement.classList.add("unvalidmo");
            movalid = false;
        } else {
            if (+mo.value <= 12) {
                movalid = true;
                mo.parentElement.className = "moyr"
                document.querySelector(".mo span").innerHTML = mo.value;
            } else {
                movalid = false;
                mo.parentElement.classList.add("unvalidmo")
            }

        }

    } else {
        mo.parentElement.classList.add("requermo");
        movalid = false
    }
}
yr.onblur = function () {
    if (yr.value !== "") {
        yr.parentElement.classList.remove("requeryr");
        if (typeof parseInt(yr.value) === NaN) {
            yr.parentElement.classList.add("unvalidyr");
        } else {
            if (+yr.value <= new Date().getFullYear()) {
                yrvalid = true;
                yr.parentElement.className = "moyr"
                document.querySelector(".yr span").innerHTML = yr.value;
            } else {
                yrvalid = false;
                yr.parentElement.classList.add("unvalidmo")
            }

        }

    } else {
        mo.parentElement.classList.add("requermo");
        yrvalid = false
    }
}
name1.onblur = function () {
    if (name1.value === "") {
        name1.parentElement.classList.add("requer")
        namevalid = false

    } else {
        name1.parentElement.classList.remove("requer")
        document.querySelector(".box1 .name").innerHTML = name1.value;
        namevalid = true;
    }
}
number.oninput = function () {
    if (number.value.length > 19) {
        valid = false;
    } else {
        valid = false;
        if (numberreg.test(number.value)) {
            valid = true;
        }
    }
    if (valid === true) {
        number.parentElement.classList.remove("unvalid");
    } else {
        number.parentElement.classList.add("unvalid");
    }
}
number.onblur = function () {
    if (valid === true) {
        document.querySelector(".number").innerHTML = number.value;
    } else {
        number.parentElement.classList.add("unvalid")
    }
}
confirm.onclick = function () {
    if (namevalid === false || cvcvalid === false || movalid === false || yrvalid === false || valid === false) {
        confirm.classList.add("con");
    } else {
        confirm.classList.remove("con");
        document.querySelector(".box2").innerHTML = `    <img class="img" src="images/icon-complete.svg" alt="image">
    <h1 class="h1">Thank you!</h1>
    <p class="p">We have added your card details</p><div class="conta">contiune</div>`

    }
}