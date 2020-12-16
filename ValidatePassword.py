'''
ValidatePassword.py

'''

def validatePassword(password):
    if len(password) != 6 or password.isdigit() == False:
        return 'Not Valid Password: Different from 6 or not a digit'
    count = 0
    for idx in range(5):
        if(int(password[idx]) == int(password[idx + 1]) - 1 or int(password[idx]) == int(password[idx + 1]) + 1):
            count = count + 1
        else:
            count = 0
        if(count == 3):
            return 'Not Valid Password: Consequent'
    return 'Valid Password'

if __name__ == "__main__":
    password_1 = '145670'       #   Not Valid
    password_2 = '012356'       #   Not Valid
    password_3 = '0374'         #   Not Valid
    password_4 = 'abds34'       #   Not Valid
    password_5 = '443452109'    #   Not Valid
    password_6 = '015678'       #   Not Valid
    password_7 = '543209'       #   Not Valid
    password_8 = '987654'       #   Not Valid
    password_9 = '095432'       #   Not Valid
    password_10 = '542732'      #   Valid

    print(validatePassword(password_1))
    print(validatePassword(password_2))
    print(validatePassword(password_3))
    print(validatePassword(password_4))
    print(validatePassword(password_5))
    print(validatePassword(password_6))
    print(validatePassword(password_7))
    print(validatePassword(password_8))
    print(validatePassword(password_9))
    print(validatePassword(password_10))