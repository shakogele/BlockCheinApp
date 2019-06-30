const validate = (val, rules, connectedValue) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(val);
        break;
      case "isNumber":
        isValid = isValid && numberValidator(val);
        break;
      case "isNotEmpty":
        isValid = isValid && isNotEmptyValidator(val);
        break;
      case "isBoolean":
        isValid = isValid && isBooleanValidator(val);
        break;
      case "isAlwaysTrue":
        isValid = isValid && isAlwaysTrueValidator(val);
        break;
      case "isLength":
        isValid = isValid && isLengthValidator(val, rules[rule]);
        break;
      case "isArray":
        isValid = isValid && isArrayValidator(val, rules[rule]);
        break;
      case "isImageObject":
        isValid = isValid && isImageObjectValidator(val, rules[rule]);
        break;
      case "isUsZipCode":
        isValid = isValid && usZipCodeValidator(val);
        break;
      case "isInternationalPhone":
        isValid = isValid && internationalPhoneValidator(val);
        break;
      case "minLength":
        isValid = isValid && minLengthValidator(val, rules[rule]);
        break;
      case "minLength":
        isValid = isValid && typeof val === "boolean";
        break;
      case "minValue":
        isValid = isValid && minValueValidator(val, rules[rule]);
        break;
      case "equalTo":
        isValid = isValid && equalToValidator(val, connectedValue[rule]);
        break;
      case "notEmpty":
        isValid = isValid && notEmptyValidator(val);
        break;
      case "isCarMake":
        isValid = isValid && isCarMakeValidator(val, connectedValue);
        break;
      case "isCarModel":
        isValid = isValid && isCarModelValidator(val, connectedValue);
        break;
      case "isYear":
        isValid = isValid && isCarYearValidator(val, connectedValue);
        break;
      case "isColor":
        isValid = isValid && isCarColorValidator(val, connectedValue);
        break;
      case "isProperCarInfo":
        isValid = isValid && isProperCarInfoValidator(val);
        break;
      default:
        isValid = true;
    }
  }

  return isValid;
};

const emailValidator = val => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    val
  );
};

const internationalPhoneValidator = val => {
  var regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

  if (regex.test(val)) {
      return true
  } else {
      return false
  }

};

const isNotEmptyValidator = (val) => {
    if(val){
      return true
    }
    return false;
};

const minLengthValidator = (val, minLength) => {
  console.log(val);
  return val.length >= minLength;
};

const numberValidator = (val) => {
  return !isNaN(parseFloat(val)) && isFinite(val);
};

const isBooleanValidator = val => {
  return typeof val === "boolean"
};

const isAlwaysTrueValidator = val => {
  return typeof val === "boolean" && val;
};

const usZipCodeValidator = (val) => {
  var regex = /^[0-9]{5}(?:-[0-9]{4})?$/;

  if (regex.test(val)) {
      return true
  } else {
      return false
  }
};

const isLengthValidator = (val, size) => {
  return val.length === size
};

const minValueValidator = (val, minValue) => {
  return val >= minValue;
};

const equalToValidator = (val, checkValue) => {
  return val === checkValue;
};

const notEmptyValidator = val => {
  return val.trim() !== "";
};

const isArrayValidator = val => {
  return val.constructor === Array && val.length > 0
};

const isImageObjectValidator = val => {
  return val && val.constructor === Object && val.uri
};

const isCarMakeValidator = (val) => {
  console.log("isCarMake:  --------------------", val);
  return val && val.length > 0;
  // let data = values.find( item => {
  //   return item.name.toLowerCase() === val.toLowerCase();
  // });
  // return (typeof data !== 'undefined');
};

const isCarModelValidator = (val, values) => {
  console.log("isCarModelValidator:  --------------------", val);
  return val && val.length > 0;
  // let data = values.find( item => {
  //   return item.name.toLowerCase() === val.toLowerCase();
  // });
  // return (typeof data !== 'undefined');
};

const isCarYearValidator = (val, values) => {
  console.log("isCarYearValidator:  --------------------", val);
  return val && val.length > 0;
  // let data = values.find( item => {
  //   return item.name.toLowerCase() === val.toLowerCase();
  // });
  // return (typeof data !== 'undefined');
};
const isCarColorValidator = (val, values) => {
  console.log("isCarColorValidator:  --------------------", val);
  return val && val.length > 0;
  // let data = values.find( item => {
  //   return item.name.toLowerCase() === val.toLowerCase();
  // });
  // return (typeof data !== 'undefined');
};
const isProperCarInfoValidator = (inputs, value) => {
  console.log("isProperCarInfo -----------------------",inputs);
  let valid=true;
  for(input in inputs){
    valid=valid*inputs[input].valid
  }
  console.log("isProperCarInfo ",valid);
  return valid;
}

export default validate;
