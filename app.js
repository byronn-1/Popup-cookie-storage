const cookieStorage = {
  getItem: (key) => {
    const cookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {})
    return
  },
  setItem: (key, value) => {
    document.cookie = `${key}=${value}`
  }
}

const storageType = cookieStorage;
const consentPropertyName = 'tdcv_consent';


const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, true);

window.onload = () => {
  if (shouldShowPopup()) {
    const consent = confirm('agree to the terms and conditions of the site');
    if (consent) {
      saveToStorage();
    }
  }
}