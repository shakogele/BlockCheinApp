const photoes = [
  {uri: "https://www.yalestore.co.uk/pub/media/wysiwyg/categories/Locks_Category_-_Padlocks.jpg"},
  {uri: "https://www.yalestore.co.uk/pub/media/wysiwyg/categories/Locks_Category_-_Nightlatch.jpg"},
  {uri: "https://images.homedepot-static.com/productImages/34999d49-9500-49b6-b4e8-ed6cd54f476e/svn/brinks-padlocks-173-70001-64_1000.jpg"}
];

export const debounce = (func, wait, immediate) => {
  var timeout;

  return function executedFunction() {
    var context = this;
    var args = arguments;

    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
};

export const getAddressObject = data => {

  let address={};
  for(let component of data.address_components){
    if(component.types[0] === "locality"){
      address.city = component.long_name
    }else if(component.types[0] === "administrative_area_level_1"){
      address.state = component.long_name
    }else if(component.types[0] === "postal_code"){
      address.zipCode = component.long_name
    }
  }
  address.address = data.formatted_address;

  return address

};

export const formatAndReturnActiveJobItem = job => {
    return {
      id: job.id,
      jobId: job.id,
      serviceType: job.serviceType,
      address: {
        address: job.address,
        coordinates: {
          latitude: parseFloat(job.location_lat),
          longitude: parseFloat(job.location_lng)
        }
      },
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting the industrys standard dummy text ever since the 1500s.",
      datetime: new Date(job.dateadded),
      images: photoes
    }
};

export const formatAndReturnJobHistoryItem = job => {
  return  {
    id: job.id,
    jobId: job.id,
    date: job.dateadded,
    price: job.price,
    customer: `${job.firstname} ${job.lastname}`,
    singleJob: {
      jobId: job.id,
      serviceType: job.title,
      serviceTypeIcon: "carLockout",
      dateCreated: job.dateadded,
      address: {
        address: job.address,
        coordinates: {
          latitude: parseFloat(job.location_lat),
          longitude: parseFloat(job.location_lng)
        }
      },
      price: job.price,
      status: job.status,
      technician: {
        id: 1,
        name: "Viktoria Kharshiladze",
        stars: 4.5,
        works: 21,
      },
      jobDescription: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      images: [
        {uri: "https://www.yalestore.co.uk/pub/media/wysiwyg/categories/Locks_Category_-_Padlocks.jpg"},
        {uri: "https://www.yalestore.co.uk/pub/media/wysiwyg/categories/Locks_Category_-_Nightlatch.jpg"},
        {uri: "https://images.homedepot-static.com/productImages/34999d49-9500-49b6-b4e8-ed6cd54f476e/svn/brinks-padlocks-173-70001-64_1000.jpg"}
      ]
    }
  }
};

export const formatAndReturnActiveJobItems = (jobs) => {
  return jobs.map( job => formatAndReturnActiveJobItem(job));
};

export const formatAndReturnJobHistoryItems = (jobs) => {
  return jobs.map( job => formatAndReturnJobHistoryItem(job));
};

export const formatTextForInputs = (text, length) => {
  return text.length > length ? text.substring(1, length)+"..." : text;
};

export const generateRandomSessionTokenForGoogle = () => {
  let currentDate = new Date();
  let currentTimeStamp = currentDate.getTime().toString();
  return currentTimeStamp.substring(currentTimeStamp.length, 3);
};

export const formatAMPM = date => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

export const formatDateTime = date => {
  if(date){
    const dd = date.getDate();
    const mm = date.getMonth();
    const yyyy = date.getFullYear();
    const hh = date.getHours();
    const min = date.getMinutes();
    const dateTime = `${dd<10?'0'+dd:dd}.${mm<10?'0'+mm:mm}.${yyyy} / ${hh<10?'0'+hh:hh} : ${min<10?'0'+min:min}`;
    return dateTime;
  }
  return false;
};

export const formatDate = date => {
  if(date){
    const dd = date.getDate();
    const mm = date.getMonth();
    const yyyy = date.getFullYear();
    const dateTime = `${dd<10?'0'+dd:dd}.${mm<10?'0'+mm:mm}.${yyyy}`;
    return dateTime;
  }
  return false
};

export const formatJobId = jobId => {
  let jobIdInString = jobId.toString();
  for(let i=jobIdInString.length; i<4; i++){
    jobIdInString='0'+jobIdInString;
  }
  return jobIdInString;
};

export const formatPrice = price => {
  if(price){
    return price+"$";
  }
  return false;
};

export const formatPercentage = price => {
  if(price){
    return price+"%";
  }
  return false;
};

export const compareAddresses = (address1, address2) => {
  for(let key in address1){
    if(address1[key] !== address2[key]){
      return false;
    }
  }
  return true;
}
