function openCity(evt,cityName){
  //declare all varibles


  //Get all elements with class="tabcontent" and hide them
  let tabcontent = document.getElementsByClassName('tabcontent')
  // get a node list of all the info. loop through them all and set there styles to display
    for (let i = 0; i< tabcontent.length; i++){
      tabcontent[i].style.display = "none";
    }

    //Get all the elements with class="tablinks" and remove the class "active"
  let tablinks = document.getElementsByClassName('tablinks');
  // get a node list of the buttons. loop through them and replace all the active classes with ''
      for (let i = 0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace('active','')
      }

      //Show the current tab, and add on active class to the button that opened the tab
      document.getElementById(cityName).style.display = "block";
      console.log(document.getElementById(cityName).style.display)
      // get the element with the id of cityName and set the style to display block
      // set the class name of the element and add active to it
      evt.currentTarget.className+= ' active';
}
