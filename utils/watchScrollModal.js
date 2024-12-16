function watchScrollModal(isOpen) {
  console.log(isOpen)
  
  if (window.fullpage_api) {
    if (isOpen) {
      window.fullpage_api.setMouseWheelScrolling(false)
      window.fullpage_api.setAllowScrolling(false)
    } else {
      window.fullpage_api.setMouseWheelScrolling(true)
      window.fullpage_api.setAllowScrolling(true)
    }
  } else {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }
}

export default watchScrollModal