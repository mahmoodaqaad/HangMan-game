let AlllLetter = "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي ئ ء ة ss".split(" ");

let body = document.querySelector(".contant")


let numberofstarts = 0

let names = []

let numberoftlmeeh = 0

let namepalyerInmain
let startpalyerInmain
let oldrandom = []

Object.entries(localStorage).forEach(([e, i]) => {
    if (e.includes("start")) {
        names.push(e.slice(5, e.length))
    }
})

let passName = []
// main()

function page() {

    body.innerHTML = `
    <div class="box center-absolute">
    <div class="btn btn-blue login" onclick="login()">LOG IN</div>
    <div class="btn btn-red signup" onclick="signup()">SIGN UP</div>

</div>`

    document.querySelector(".btn.login").onclick = () => {
        loding(1000)
        setTimeout(() => {
            login()
        }, 1000);
    }

    document.querySelector(".btn.signup").onclick = () => {
        loding(1000)
        setTimeout(() => {
            signup()
        }, 1000);
    }
}


function login() {
    body.innerHTML = ""
    let loginBox = document.createElement("div")
    loginBox.className = "loginbox center-absolute"


    let backArrow = document.createElement("i")
    backArrow.className = "fa fa-right-long backMain"

    let logo = document.createElement("div")
    logo.className = "logoLogin"


    let i_user = document.createElement("i")
    i_user.className = "fa fa-circle-user fa-6x"

    let h2 = document.createElement("h2")
    h2.className = "head"
    h2 = "LIGN IN"
    logo.append(i_user, h2)


    let divInput = document.createElement("div")
    divInput.className = "inputs"


    // create inputs 

    // create input for user 
    let user_div = document.createElement("div")
    user_div.className = "user-input"

    let userIcon = document.createElement("i")
    userIcon.className = "fa fa-user"

    let input_user = document.createElement("input")
    input_user.className = "username"
    input_user.type = "text"
    input_user.placeholder = "User Name"


    user_div.append(userIcon, input_user)



    // create input for passwood

    let pass_div = document.createElement("div")
    pass_div.className = "pass-input"

    let passIcon = document.createElement("i")
    passIcon.className = "fa fa-lock"

    let input_pass = document.createElement("input")
    input_pass.className = "password"
    input_pass.type = "password"
    input_pass.placeholder = "Password"

    let eys = document.createElement("i")
    eys.className = "eyspass fa fa-eye pointer"





    pass_div.append(passIcon, input_pass, eys)

    let submit = document.createElement("div")
    submit.className = "btn btn-red"
    submit.textContent = "LOGIN"

    divInput.append(user_div, pass_div)

    loginBox.append(backArrow, logo, divInput, submit)
    body.append(loginBox)

    let passwhow = false
    eys.onclick = () => {
        if (passwhow == false) {

            input_pass.type = "text"
            passwhow = true
            divInput.classList.add("eystext")
        }
        else {

            input_pass.type = "password"
            passwhow = false
            divInput.classList.remove("eystext")

        }

    }



    submit.onclick = () => {
        // false 

        if (input_user.value == "" && input_pass.value == "") {
            ok("the inputs is empty")
        }

        // true
        let n = 0
        for (let i = 0; i < names.length; i++) {
            console.log(names[i])
            if (names[i] == input_user.value.toLocaleLowerCase() && input_pass.value.toLocaleLowerCase() == localStorage.getItem(`pass${names[i]}`)) {
                n = 4

                loding(1000)
                setTimeout(() => {
                    main(names[i], localStorage.getItem(`start` + names[i]) != null ? localStorage.getItem(`start` + names[i]) : numberofstarts)
                }, 1000);
            }

        }
        if (n == 0) {
            ok("invauld inputs")

        }
        // false 
        // if (adminuser != input_user.value.toLocaleLowerCase() && input_user.value != "" && adminpass != input_pass.value.toLocaleLowerCase() && input_pass.value != "") { ok("the username and password is not correct") }
        // else if (adminuser != input_user.value.toLocaleLowerCase() && input_user.value != "") { ok("the username is not correct") }
        // else if (adminpass != input_pass.value.toLocaleLowerCase() && input_pass.value != "") { ok("the password is not correct") }
    }

    backArrow.onclick = page
}




page()

// start

// ! .....,.......................................
function signup() {
    body.innerHTML = ""
    let loginBox = document.createElement("div")
    loginBox.className = "loginbox center-absolute"


    let backArrow = document.createElement("i")
    backArrow.className = "fa fa-right-long backMain"

    let logo = document.createElement("div")
    logo.className = "logoLogin"


    let i_user = document.createElement("i")
    i_user.className = "fa fa-circle-user fa-6x"

    let h2 = document.createElement("h2")
    h2.className = "head"
    h2 = "SIGN UP"
    logo.append(i_user, h2)


    let divInput = document.createElement("div")
    divInput.className = "inputs"


    // create inputs 

    // create input for user 
    let user_div = document.createElement("div")
    user_div.className = "user-input"

    let userIcon = document.createElement("i")
    userIcon.className = "fa fa-user"

    let input_user = document.createElement("input")
    input_user.className = "username"
    input_user.type = "text"
    input_user.placeholder = "User Name"


    user_div.append(userIcon, input_user)



    // create input for passwood

    let pass_div = document.createElement("div")
    pass_div.className = "pass-input"

    let passIcon = document.createElement("i")
    passIcon.className = "fa fa-lock"

    let input_pass = document.createElement("input")
    input_pass.className = "password"
    input_pass.type = "password"
    input_pass.placeholder = "Password"




    let pass_div2 = document.createElement("div")
    pass_div.className = "pass-input"

    let passIcon2 = document.createElement("i")
    passIcon2.className = "fa fa-lock"

    let input_pass2 = document.createElement("input")
    input_pass2.className = "password"
    input_pass2.type = "password"
    input_pass2.placeholder = "Password Again"






    pass_div.append(passIcon, input_pass)
    pass_div2.append(passIcon2, input_pass2)

    let submit = document.createElement("div")
    submit.className = "btn btn-red"
    submit.textContent = "SIGN UP"

    divInput.append(user_div, pass_div, pass_div2)

    loginBox.append(backArrow, logo, divInput, submit)
    body.append(loginBox)

    let passwhow = false
    // eys.onclick = () => {
    //     if (passwhow == false) {

    //         input_pass.type = "text"
    //         passwhow = true
    //         divInput.classList.add("eystext")
    //     }
    //     else {

    //         input_pass.type = "password"
    //         passwhow = false
    //         divInput.classList.remove("eystext")

    //     }

    // }


    submit.onclick = () => {
        // false
        let s = 0

        if (input_pass.value != input_pass2.value) {
            ok("the paswords is not Same")
            s = 9
        }

        if (input_user.value == "" || input_pass.value == "") {
            ok("the inputs is empty")
            s = 9
        }

        // true
        for (let i = 0; i < names.length; i++) {
            if (names[i].includes(input_user.value)) {
                s++
                ok("this name is used")

            }

        }
        if (s == 0) {
            names.push(input_user.value)
            localStorage.setItem(`start${input_user.value}`, 0)

            passName.push(input_pass.value)

            localStorage.setItem(`pass${input_user.value}`, input_pass.value)

            loding(1000)
            setTimeout(() => {
                main(input_user.value, 0)
            }, 1000);


        }

    }


    backArrow.onclick = page


}


// main(1,2)


function main(nameplayer, startsplayer) {





    if (nameplayer == undefined) {

    }
    else {
        namepalyerInmain = nameplayer

    }
    if (startsplayer == undefined) {

    }
    else {
        startpalyerInmain = startsplayer
        numberofstarts = startsplayer

    }



    body.innerHTML = `
    <header>
    <div class="logo">HangMan Game</div>
    <div>${namepalyerInmain}</div>
    <div class="starts">${localStorage.getItem(`start` + namepalyerInmain) != null ? startpalyerInmain : numberofstarts}</div>
    <div class="catygory">
        النوع :
        <span></span><span class="numberOfWord"></span>
    </div>
</header>

<div class="body">
    <div class="row">
        <div class="letters">

        </div>
        <div class="HangMan">
            <div class="the-drow">
                <div class="the-stand"></div>
                <div class="the-hang"></div>
                <div class="the-rope"></div>
                <div class="head"></div>
                <div class="body"></div>
                <div class="hand"></div>
                <div class="legs"></div>
            </div>
        </div>
    </div>
</div>

<div class="gus-letter">


</div>
<div class="media">

<div class="LOGOUT">
<i class="fa fa-sign-out logout"></i>
</div>
<div class="TLMEEH">
<div class="tlmeeh">
<i class="led">💡</i>
<span>تلميح</span>
</div>
</div>
</div>
`




    let title = document.querySelector(".catygory span")

    //***************************************** */
    // اسم الفيلم = randompropvalueName
    // اسم النوع = randompropName

    //***************************************** */

    let placeLetter = document.querySelector(".letters")

    AlllLetter.forEach(letter => {
        let spanLetter = document.createElement("span")
        spanLetter.textContent = letter
        spanLetter.className = "letter-box"
        if (letter == "ss") {
            spanLetter.classList.add("space")
            spanLetter.textContent = " "
            letter = "space"
        }
        placeLetter.append(spanLetter)
    })

    let word = {
        "افلام": ["البخيل", "الغول", "الهلفوت", "الكنز", "الزئبق", "الحب", "الارض", "جحا", "اللالالاند", "الكوبرا", "اللمبي", "الخلية", "الجزيرة", "بوحة", "المنشار"],
        "مسلسلات": ["زلرال", "المشبوه", "الاسطورة", "النمر", "هوجان", "الكبير اوي", "كلبش", "الاجهر", "ايوب", "اللعبة", "لهفة",],
        "اسماء علماء": ["فيثاغورس", "ابن الهيثم"],
        "اسماء ممثليين": ["عادل امام", "محمد سلام", "ياسر العظمة", "احمد مكي", "علي ربيع"]
    }


    let AllKey = Object.keys(word)


    let randomPropNumber = Math.floor(Math.random() * AllKey.length)
    let randompropName = AllKey[randomPropNumber]


    let randompropValue = word[randompropName]





    let randompropvaluenumber = Math.floor(Math.random() * randompropValue.length)
    let randompropvalueName = randompropValue[randompropvaluenumber]
    for (let i = 0; i < oldrandom.length; i++) {
        if (oldrandom[i] == randompropvalueName) {
            randompropvaluenumber = Math.floor(Math.random() * randompropValue.length)
            randompropvalueName = randompropValue[randompropvaluenumber]
        }
    }
    oldrandom.push(randompropvalueName)
    // localStorage.setItem("oldrandom",)
    console.log(oldrandom)


    console.log(randompropvalueName)




    title.textContent = randompropName
    let letterAndSpace = Array.from(randompropvalueName)


    // gus letter 
    letterAndSpace.forEach(letter => {
        let emptySpan = document.createElement("span")

        if (letter == " ") {
            emptySpan.className = "space"
            document.querySelector(".numberOfWord").textContent = " (كلمتين)"

        }
        document.querySelector(".gus-letter").append(emptySpan)
    })

    let gussSpan = document.querySelectorAll(".gus-letter span");

    let worngAttempt = 0

    let the_drow = document.querySelector(".the-drow")



    document.querySelectorAll(".letter-box").forEach(e => {
        e.addEventListener("click", (e) => {
            let theStuts = false
            e.target.classList.add("use")
            theletterClicked = e.target.textContent

            let chooseWord = Array.from(randompropvalueName)

            chooseWord.forEach((wordLetter, indexAarry) => {
                if (wordLetter == theletterClicked) {
                    theStuts = true
                    gussSpan.forEach((span, indexSpan) => {
                        if (gussSpan == "") {

                        }
                        if (indexAarry == indexSpan) {
                            span.textContent = theletterClicked

                        }
                    })
                }
            })

            if (theStuts == false) {
                worngAttempt++
                the_drow.classList.add("worng" + worngAttempt)
                if (worngAttempt == 7) {
                    end(`  حظا اوفر الكلمة
            
                 هي ${randompropvalueName} `, "bad")
                }
            }

            let x = 0;
            for (let i = 0; i < gussSpan.length; i++) {
                if (gussSpan[i].textContent == "") {
                    x = 2
                }
            }
            if (x == 0) {
                loding(1000)
                setTimeout(() => {
                    good(namepalyerInmain, "good")
                }, 1000);


            }
        })
    })
    //!=========================
    document.querySelector(".tlmeeh").onclick = () => {

        if (numberofstarts <= 1) {
            ok("لا تملك عدد كافي من النفاط")
        }
        else {


            startminus(namepalyerInmain, startpalyerInmain)

            document.querySelector(".starts").textContent = localStorage.getItem(`start` + namepalyerInmain)

            letterAndSpace.forEach((e, i) => {
                document.querySelectorAll(".gus-letter span")[numberoftlmeeh].textContent = letterAndSpace[numberoftlmeeh]

            })


            document.querySelectorAll(".letter-box").forEach(e => {
                if (e.textContent == document.querySelectorAll(".gus-letter span")[numberoftlmeeh].textContent) {
                    e.classList.add("use")

                }

            })



            if (numberoftlmeeh == document.querySelectorAll(".gus-letter span").length - 1 || document.querySelectorAll(".gus-letter span").forEach(e => {
                if (e.textContent != "") {
                    console.log(e)
                    return true
                }
            })) {
                loding(1000)
                setTimeout(() => {
                    good(namepalyerInmain, "good")
                }, 1000);
            }
            else {
                numberoftlmeeh++

            }

        }
        document.querySelector(".starts").textContent = localStorage.getItem(`start` + namepalyerInmain)

    }
    //!=========================


    document.querySelector(".logout").onclick = () => {
        loding(1000)
        setTimeout(() => {
            page()
        }, 1000);


    }

}



function end(title, stutas) {
    let overlay = document.createElement("div")
    overlay.className = "overlay"
    let popep = document.createElement("div")
    popep.className = "popep"
    popep.textContent = title
    popep.classList.add(stutas)
    overlay.appendChild(popep)
    document.body.append(overlay)
    setTimeout(() => {
        overlay.remove()

        main();
    }, 2000);
}
function good(name, stutas) {

    numberoftlmeeh = 0
    let overlay = document.createElement("div")
    overlay.className = "overlay"
    let popep = document.createElement("div")
    popep.className = "popep"
    popep.textContent = "تهانيا"
    popep.classList.add(stutas)
    overlay.appendChild(popep)



    document.body.append(overlay)


    startsplus(name)
    setTimeout(() => {
        overlay.remove()

        main(name, numberofstarts);
    }, 2000);

}
function startsplus(name) {
    if (localStorage.getItem(`start${name}`) == null) {
        numberofstarts = 0
    }
    else {
        numberofstarts = localStorage.getItem(`start${name}`)
        numberofstarts++
        localStorage.setItem(`start${name}`, numberofstarts)

    }
    return numberofstarts
}



function startminus(name, start) {
    if (localStorage.getItem(`start${name}` == null)) {
        numberofstarts -= 2
    }
    else {

        numberofstarts = localStorage.getItem(`start${name}`)
        numberofstarts -= 2
        localStorage.setItem(`start${name}`, numberofstarts)
    }
}



function ok(title) {

    let overlay = document.createElement("div")
    overlay.className = "overlay"
    let popep = document.createElement("div")
    popep.className = "popeps"
    let h2 = document.createElement("h2")
    h2.textContent = title
    let oks = document.createElement("div")
    oks.className = "btn btn-red"
    oks.textContent = "OK"
    popep.append(h2, oks)
    overlay.append(popep)
    document.body.append(overlay)
    setTimeout(() => {
        // overlay.remove()
    }, 2000);
    oks.onclick = () => {
        overlay.remove()

    }
}


// console.log(localStorage.key(0))

function loding(time) {
    let load = document.createElement("div")
    load.className = "loding"
    document.body.append(load)

    setTimeout(() => {
        load.remove()
    }, time);
}

