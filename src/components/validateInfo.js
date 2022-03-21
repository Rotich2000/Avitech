export default function validateInfo(values){
    let errors = {};
// trim() gets rid of th white space.
    if(!values.username.trim()){
        errors.username = "Username required"
    }
    // Email validation
    if(!values.email){
        errors.email = "Email required"
    }else if(!/^[A-Z0-9,_%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email="Email address is invalid"
    }

    // Password validation
    if(!values.password){
        errors.password = "Password required"
    }else if(values.password.length < 6){
        errors.password = "Password must be at least 6 characters"
    }

    if(!values.password2){
        errors.password2 = "Password is required"
    }else if(values.password2 !== values.password){
        errors.password2 = "Passwords do not match"
    }
    return errors;
}