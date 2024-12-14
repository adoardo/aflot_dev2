function watchScrollModal(isOpen) {
    if (isOpen) {
      if (window.fullpage_api) {
        window.fullpage_api.setMouseWheelScrolling(false)
        window.fullpage_api.setAllowScrolling(false)
      }
    } else {
      if (window.fullpage_api) {
        window.fullpage_api.setMouseWheelScrolling(true)
        window.fullpage_api.setAllowScrolling(true)
      }
    }
}

export default watchScrollModal