function isValidEmail(email) {
  // Checks if includes @
  if ( !email.includes("@") ) {
    return false;
  }
  const user = email.substring(0, email.indexOf("@"));
  const domain = email.substring(email.indexOf("@")+ 1, email.length);
  
  if ((user.length >=1) && // Exists name
    (domain.length >=3) && // Exists domain
    (user.search("@")==-1) && // Not exists another @
    (domain.search("@")==-1) && // Not exists another @
    (user.search(" ")==-1) && // Not exists spaces
    (domain.search(" ")==-1) && // Not exists spaces
    (domain.search(".")!=-1) && // Exists dot
    (domain.indexOf(".") >=1)&& // Exists domain name
    (domain.lastIndexOf(".") < domain.length - 1)) {
    return true;
  } else {
    return false;
  }
}
