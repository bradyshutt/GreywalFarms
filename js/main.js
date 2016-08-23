'use strict'

;(function($) {
    
  $(function pageReady() {
    $('#directions-from-select').change((e) => {
      let v = e.target.value
      console.log(v)
      if (v === 'i5N') {
        console.log('one')
        $('#directions-from-i5SB').hide()
        $('#directions-from-i5NB').show()
      }
      else if (v === 'i5S') {
        console.log('two')
        $('#directions-from-i5NB').hide()
        $('#directions-from-i5SB').show()
      }
    })
  })


})(jQuery)




