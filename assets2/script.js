var activeClass = "is-active"
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need from the array
  }
};
forEach(document.querySelectorAll(".dropdown_list span.dropdown"), function (index, value) {
  value.addEventListener('click', function() {
        //console.log(value.classList);
        if ( !value.classList.contains(activeClass) ) {
            var el = document.querySelectorAll(".dropdown_list span.dropdown");
            var i; for (i = 0; i < el.length; i++) {
                el[i].classList.remove(activeClass);
            }
            value.classList.toggle(activeClass);
        } else
        if ( value.classList.contains(activeClass) ) {
            value.classList.remove(activeClass);
        }
  })
});
document.addEventListener('click', function(e) {
  // Dropdown Select Toggle
  var el = document.querySelectorAll(".dropdown_list span.dropdown")
  var e=e? e : window.event;
    var event_element=e.target? e.target : e.srcElement;
  if (!event_element.closest(".dropdown_list")){
    //console.log(event_element.closest(".dropdown_list"));
    var i; for (i = 0; i < el.length; i++) {
      el[i].classList.remove(activeClass);
    }
  }
}, false);