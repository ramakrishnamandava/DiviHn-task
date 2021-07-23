let sections = document.querySelectorAll('[id^="section"]');

if (sections.length > 1) {
  let sectionOne = sections[0];
  sections.forEach((section) => {
    if (section != sectionOne) {
      $(section).css("display", "none");
    }
  });
}

const display = (sectionId) => {
  makeRemainingScreensInvisible(sectionId);
  let section = document.getElementById(sectionId);
  $(section).css("display", "block");
  window.scrollTo(0, 0);
};

const makeRemainingScreensInvisible = (sectionId) => {
  let sections = document.querySelectorAll('[id^="section"]');
  sections.forEach((section) => {
    if ($(section).attr("id") != sectionId) {
      $(section).css("display", "none");
    }
  });
};

/***********************************************************************************************/

function validate() {
    clearErrorElement();
    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let checkbox = document.querySelector(".checkbox").checked;
    let fullNameContainer = document.getElementsByClassName("fullNameContainer");
    let emailContainer = document.getElementsByClassName("emailContainer");
    let passwordContainer = document.getElementsByClassName("passwordContainer");
    let checkboxContainer = document.getElementsByClassName("formConditionConatiner");

    let emailValidation = validateEmail(email);
    if (!fullname) {
        let errorEl = createErrorElement();
        fullNameContainer[0].appendChild(errorEl);
    }
    if (!emailValidation) {
        let errorEl = createErrorElement();
        emailContainer[0].appendChild(errorEl);
    }
    if (!password) {
        let errorEl = createErrorElement();
        passwordContainer[0].appendChild(errorEl);
    }
    if (!checkbox) {
        let errorEl = createErrorElement();
        checkboxContainer[0].appendChild(errorEl);
    }
    if (!!fullname && !!emailValidation && !!password && checkbox) {
        display('sectionloginContainer3');
    }

}


function clearErrorElement() {
    document.querySelectorAll('.error').forEach(function(a) {
        a.remove()
    });
}

function createErrorElement() {
    let errorEl = document.createElement('p');
    errorEl.textContent = "*Required";
    errorEl.style.color = "red";
    errorEl.classList.add("error");
    return errorEl;
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function handleCheckBoxcheck(event) {
    let text = event.srcElement.checked;
    let checkboxContainer = document.querySelector(".formConditionConatiner .error");
    if (!!text && checkboxContainer) {
        checkboxContainer.remove();
    } else if (!text) {
        let errorEl = createErrorElement();
        document.getElementsByClassName("formConditionConatiner")[0].appendChild(errorEl);
    }
}

function handlePasswordChange(event) {
    let text = event.srcElement.value;
    let passwordContainer = document.querySelector(".passwordContainer .error");
    if (!!text && passwordContainer) {
        passwordContainer.remove();
    } else if (!text) {
        let errorEl = createErrorElement();
        document.getElementsByClassName("passwordContainer")[0].appendChild(errorEl);
    }
}

function handleFullNameChange(event) {
    let text = event.srcElement.value;
    let fullNameContainer = document.querySelector(".fullNameContainer .error");
    if (!!text && fullNameContainer) {
        fullNameContainer.remove();
    } else if (!text) {
        let errorEl = createErrorElement();
        document.getElementsByClassName("fullNameContainer")[0].appendChild(errorEl);
    }
}


function handleEmailChange(event) {
    let text = event.srcElement.value;
    let emailContainer = document.querySelector(".emailContainer .error");
    let validateValue = validateEmail(text);
    if (validateValue && emailContainer) {
        emailContainer.remove();
    } else if (!validateValue) {
        let errorEl = createErrorElement();
        document.getElementsByClassName("emailContainer")[0].appendChild(errorEl);
    }
}

function navigateToFirst(txt) {
    clearErrorElement();
    display(txt);
}