/**
 * Create immediately invoked function expression (IIFE)
 */
var registration = (function (formSelector) {

    var formSelector = formSelector;
    var form = document.querySelectorAll(formSelector)[0];
    var formInput = document.querySelectorAll(CONSTANTS.FORM_INPUT_FIELD);

    var validate = (eventType) => {
        form.addEventListener(eventType, validateForm = (e) => {
            e.preventDefault();
            var errorMsg = '';
            var flag = true;
            formInput.forEach(function (item) {
                if (item.value === "" || !item.value) {
                    errorMsg = CONSTANTS.EMPTY_ERROR_MSG;
                    flag = false;
                } else {
                    console.log(item.value, (item.value).length);
                    if (item.type === 'password' && ((item.value).length < 5 || !item.value.match(CONSTANTS.PASSWORD_VALIDATION))) {
                        errorMsg = CONSTANTS.PASSWORD_ERROR_MSG;
                        flag = false;
                    }
                    if (item.id === 'confirmPassword' && (item.value).localeCompare(document.getElementById("password").value)) {
                        errorMsg = CONSTANTS.PASSWORD_MISSMATCH;
                        flag = false;
                    }
                    if (item.type === 'email' && !item.value.match(CONSTANTS.EMAIL_VALIDATION)) {
                        errorMsg = CONSTANTS.EMAIL_ERROR_MSG;
                        flag = false;
                    }
                }
                var msgElement = item.offsetParent.querySelectorAll(CONSTANTS.FORM_ERROR_CLASS)[0];
                msgElement.innerText = errorMsg;
                errorMsg = '';
            });
            if (flag) {
                e.target.submit();
            }
        });
    }
    validate('submit');
})(CONSTANTS.FORM);

