/*
*   ValidatePassword.py
*
**/

function validatePassword(password) {
    if (password.length != 6 || isNaN(password) == true) {
        return 'Not Valid Password: Different from 6 or not a digit';
    }
    count = 0
    for (i = 0; i <= 5; i ++) {
        if(parseInt(password[i]) == parseInt(password[i + 1]) - 1 || parseInt(password[i]) == parseInt(password[i + 1]) + 1)    {
            count++;
        } else {
            count = 0;
        }
        if (count == 3) {
            return 'Not Valid Password: Consequent';
        }
    }
    return 'Valid Password';
}

password_1 = '145670'           //   Not Valid
    password_2 = '012356'       //   Not Valid
    password_3 = '0374'         //   Not Valid
    password_4 = 'abds34'       //   Not Valid
    password_5 = '443452109'    //   Not Valid
    password_6 = '015678'       //   Not Valid
    password_7 = '543209'       //   Not Valid
    password_8 = '987654'       //   Not Valid
    password_9 = '095432'       //   Not Valid
    password_10 = '542732'      //   Valid

    console.log(validatePassword(password_1));
    console.log(validatePassword(password_2));
    console.log(validatePassword(password_3));
    console.log(validatePassword(password_4));
    console.log(validatePassword(password_5));
    console.log(validatePassword(password_6));
    console.log(validatePassword(password_7));
    console.log(validatePassword(password_8));
    console.log(validatePassword(password_9));
    console.log(validatePassword(password_10));