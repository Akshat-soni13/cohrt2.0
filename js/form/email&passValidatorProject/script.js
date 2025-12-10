const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("form");

form.addEventListener("submit", function (eve) {
    eve.preventDefault();

    // clear previous errors
    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    const emailreg = /^(?!.*\.{2})[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

    let passregex=/^(?!.*\.\.)[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/
    
    let valid=true;
    if(!emailreg.test(email.value))
    {
        document.querySelector("#emailError").textContent="Wrong Email"
        valid=false
    }

    if (!passregex.test(password.value)) {
        document.querySelector("#passwordError").textContent = "Password must be at least 6 characters and include letters and numbers";
        valid = false;
    }

    if (valid) {
        form.submit();
    }
});