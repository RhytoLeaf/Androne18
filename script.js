   
    /////////////////////////////////////////////////////////
    //
    // GLOBAL VARIABLES
    //
    ////////////////////////////////////////////////////////
    var droneLocations = [
      // Luigi Colonna,
      // New York City, USA
      "https://images.unsplash.com/photo-1503590608726-d8f4ad9d53c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",

      // Kevin B Leigh, 
      // Kilkenny Castle, Kilkenny, Ireland 
      "https://images.unsplash.com/photo-1519412711294-ea7265523d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80",

      // Izuddin Helmi Adnan, 
      // Kuala Lumpur, Malaysia
      "https://images.unsplash.com/photo-1520851155845-6f90804b3636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1827&q=80",

      // Braeson Holland, 
      // Ottawa, Canada
      "https://images.unsplash.com/photo-1657300890159-c5677e5bdb60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1906&q=80",

      // Daniel Diemer,
      // Positano, Italy
      "https://images.unsplash.com/photo-1683031423342-e247960a6dec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
  ];





  /* -- Glow effect -- */

  const blob = document.getElementById("blob");

  window.onpointermove = event => {
      const {
          clientX,
          clientY
      } = event;

      blob.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
      }, {
          duration: 3000,
          fill: "forwards"
      });
  }

  /* -- Text effect -- */

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let interval = null;

  const screen = document.querySelector(".screen"),
      name = document.querySelector(".name");




  screen.onmouseenter = event => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
          name.innerText = name.innerText
              .split("")
              .map((letter, index) => {
                  if (index < iteration) {
                      return name.dataset.value[index];
                  }

                  return letters[Math.floor(Math.random() * 26)]
              })
              .join("");

          if (iteration >= name.dataset.value.length) {
              clearInterval(interval);
          }

          iteration += 1 / 3;
      }, 30);
  }


  // $(document).ready(function () {

  // });


  //Handles drone locations
  $(document).ready(function () {

      //init drone to 1st in list
      $('.screen-image').css('background-image', "url(" + droneLocations[0] + ")");


      // Event to be triggered
      function triggerEvent() {
          var randomIndex = Math.floor(Math.random() * droneLocations.length);
          // event to execute every 30 seconds goes here
          $('.screen-image').css('background-image', "url(" + droneLocations[randomIndex] + ")");
      }

      // Call the triggerEvent function every 30 seconds (10000 milliseconds)
      setInterval(triggerEvent, 30000);
  });