switch(this.state.activeServiceType.id_name){
  case "car_lockout":
    let carInputsError = this.validateCarInputs(this.state.carInfo);

    if(carInputsError){
      return {
        "car_lockout": [carInputsError]
      }
    }

  break;
  case "trunk_lockout":

    let carInputsError = this.validateCarInputs(this.state.carInfo);

    if(carInputsError){
      return {
        "trunk_lockout": [carInputsError]
      }
    }

  break;
  case "house_lockout":

    let numberOfLocksError = !this.state.numberOfLocks ? { "numberOfLocks": "Please Provide NumberOfLocks"} : null;
    let imagesError = !this.state.orderImages.length ? { "orderImages": "Please Provide Order Images" } : null;
    if(numberOfLocksError || imagesError){
      return {
        "house_lockout": [numberOfLocksError, imagesError]
      }
    }

  break;
  case "storage_unit_lockout":

    let imagesError = !this.state.orderImages.length ? { "orderImages": "Please Provide Order Images" } : null;
    if(imagesError){
      return {
        "storage_unit_lockout": [imagesError]
      }
    }

  break;
  case "lockout_general":

    let imagesError = !this.state.orderImages.length ? { "orderImages": "Please Provide Order Images" } : null;
    let orderDescriptionError = !this.state.orderDescription ? { "orderDescription": "Please Provide Order Description" } : null;
    if(imagesError||orderDescriptionError){
      return {
        "lockout_general": [imagesError, orderDescriptionError]
      }
    }

  break;
  case "change_locks":

    let imagesError = !this.state.orderImages.length ? { "orderImages": "Please Provide Order Images" } : null;
    let lockTypeError = !this.state.lockType ? { "lockType": "Please Provide Order Lock Type" } : null;
    let residentialSwitchError = !this.state.residentialSwitch ? { "residentialSwitch": "Please Provide Residential or Commertial"} : null;
    let numberOfLocksError = !this.state.numberOfLocks ? { "numberOfLocks": "Please Provide NumberOfLocks"} : null;
    if(imagesError || lockTypeError || numberOfLocksError || residentialSwitchError){
      return {
        "change_locks": [imagesError, orderDescriptionError, numberOfLocksError, residentialSwitchError]
      }
    }

  break;
  case "rekey":

    let imagesError = !this.state.orderImages.length ? { "orderImages": "Please Provide Order Images" } : null;
    let lockTypeError = !this.state.lockType ? { "lockType": "Please Provide Order Lock Type" } : null;
    let residentialSwitchError = !this.state.residentialSwitch ? { "residentialSwitch": "Please Provide Residential or Commertial"} : null;
    let numberOfLocksError = !this.state.numberOfLocks ? { "numberOfLocks": "Please Provide NumberOfLocks"} : null;
    if(imagesError || lockTypeError || numberOfLocksError || residentialSwitchError){
      return {
        "rekey": [imagesError, orderDescriptionError, numberOfLocksError, residentialSwitchError]
      }
    }

  break;
  case "car_key":

    let carInputsError = this.validateCarInputs(this.state.carInfo);
    let keyTypeError = !this.state.keyType ? { "keyType": "Please Provide Order Key Type" } : null;

    if(carInputsError || keyTypeError){
      return {
        "car_key": [carInputsError, keyTypeError]
      }
    }

  break;
  case "change_car_door_locks":

    let carInputsError = this.validateCarInputs(this.state.carInfo);
    let imagesError = !this.state.orderImages.length ? { "orderImages": "Please Provide Order Images" } : null;

    if(carInputsError || imagesError){
      return {
        "change_car_door_locks": [carInputsError, imagesError]
      }
    }

  break;
  case "key_extraction":

    let imagesError = !this.state.orderImages.length ? { "orderImages": "Please Provide Order Images" } : null;
    let lockTypeError = !this.state.lockType ? { "lockType": "Please Provide Order Lock Type" } : null;
    let residentialSwitchError = !this.state.residentialSwitch ? { "residentialSwitch": "Please Provide Residential or Commertial"} : null;
    let numberOfLocksError = !this.state.numberOfLocks ? { "numberOfLocks": "Please Provide NumberOfLocks"} : null;
    if(imagesError || lockTypeError || numberOfLocksError || residentialSwitchError){
      return {
        "key_extraction": [imagesError, orderDescriptionError, numberOfLocksError, residentialSwitchError]
      }
    }

  break;
  case "key_extraction_from_car":

    let carInputsError = this.validateCarInputs(this.state.carInfo);
    let ignDoorSwitchError = !this.state.ignDoorSwitch ? { "ignDoorSwitch": "Please Provide Order IGN/DOOR" } : null;
    let imagesError = !this.state.orderImages.length ? { "orderImages": "Please Provide Order Images" } : null;

    if(carInputsError || imagesError || ignDoorSwitchError){
      return {
        "key_extraction_from_car": [carInputsError, imagesError, ignDoorSwitchError]
      }
    }

  break;
  case "safe":

    let lcSwitchError = !this.state.lcSwitch ? { "lcSwitch": "Please Provide Order Lockout or Change" } : null;
    let imagesError = !this.state.orderImages.length ? { "orderImages": "Please Provide Order Images" } : null;
    let orderDescriptionError = !this.state.orderDescription ? { "orderDescription": "Please Provide Order Description" } : null;
    if(lcSwitchError || imagesError || orderDescriptionError){
      return {
        "safe": [lcSwitchError, imagesError, orderDescriptionError]
      }
    }

  break;
  case "panic_bar":

    let lcrSwitchError = !this.state.lcrSwitch ? { "lcrSwitch": "Please Provide Order Lockout or Change" } : null;
    let imagesError = !this.state.orderImages.length ? { "orderImages": "Please Provide Order Images" } : null;
    if(lcrSwitchError || imagesError ){
      return {
        "panic_bar": [lcrSwitchError, imagesError]
      }
    }
  break;
}
