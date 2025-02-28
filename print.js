/*let search = document.queryselector('.nav-search');

document.querySelector('#search-icon').onclick=()=>{
    search.classList.toggle('active');
    cart.classList.remove('active');
    user.classList.remove('active');
}*/


  let cart = document.querySelector(".cart");

document.querySelector("#cart-icon").onclick = () => {
     cart.classList.toggle('active');
    //  search.classList.remove('active');
     user.classList.remove('active');
};


let user = document.querySelector('.user');

document.querySelector("#user-icon").onclick = () =>{
     user.classList.toggle('active');
    //  search.classList.remove('active');
    cart.classList.remove('active');
};


// let navbar = document.querySelector('.navbar');

// document.querySelector("#menu-icon").onclick = () =>{
//   menu.classList.toggle('active');   
//   user.classList.('active');
//     //  search.classList.remove('active');
//     cart.classList.remove('active');
// };
// // Navbar scroll
// let header=document.querySelector('header');

window.addEventListener('scroll',()=>{
header.classList.toggle('shadow',window,scrolly >0);


})

// swiper
var swiper = new Swiper(".new-arrival", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



        // const cityData = {
        //     California: ["Los Angeles", "San Francisco", "San Diego"],
        //     Texas: ["Houston", "Dallas", "Austin"],
        //     Florida: ["Miami", "Orlando", "Tampa"],
        //     Newyork: ["New York City", "Buffalo", "Rochester"]
        // };

        // function updateCities() {
        //     const stateSelect = document.getElementById("state");
        //     const citySelect = document.getElementById("city");
        //     const selectedState = stateSelect.value;

        //     // Clear previous city options
        //     citySelect.innerHTML = '<option value="">-- Select City --</option>';

        //     if (selectedState && cityData[selectedState]) {
        //         const cities = cityData[selectedState];
        //         cities.forEach(city => {
        //             const option = document.createElement("option");
        //             option.value = city;
        //             option.textContent = city;
        //             citySelect.appendChild(option);
        //         });
        //     }
        // }
  