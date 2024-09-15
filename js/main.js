(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Image comparison
    $(".twentytwenty-container").twentytwenty({});


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);


const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const faqItem = toggle.parentElement;
    faqItem.classList.toggle("active");
  });
});
 // Function to open the popup with term details
 function openPopup(termId) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const termDetails = document.getElementById('termDetails');
    const termHead = document.getElementById('termHead');
    const termHeadContent = document.getElementById('termHeadContent');

    // Get the details based on termId
    const termElement = document.querySelector(`.term[data-term-id="${termId}"]`);
    const termDetailsId = termElement.getAttribute('data-term-details-id');
    const termDetailsElement = document.getElementById(termDetailsId);
    const termDetailsText = termDetailsElement ? termDetailsElement.innerHTML : '';

    // Set term details based on termDetailsText
   // termDetails.innerHTML = termDetailsText;

    // Set the term header to the text of the clicked term
    termHead.textContent = termElement.textContent.trim();

    // Set the innerHTML of termHeadContent as detailsElement content
    termHeadContent.innerHTML = termDetailsElement.innerHTML;

    // Show the overlay and popup
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');

    // Hide the overlay and popup
    overlay.style.display = 'none';
    popup.style.display = 'none';
}
    
    
    
    // Add click event listeners to each term
  const terms = document.querySelectorAll('.term');
  terms.forEach((term) => {
    term.addEventListener('click', () => {
      const termId = term.getAttribute('data-term-id');
      openPopup(termId);
    });
  });

  function sendMessage(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the message input value
    var message = document.getElementById('messageInput').value;

    // Replace 'yourPhoneNumber' with the actual WhatsApp number
    var phoneNumber = '+256757706210';

    // Create the WhatsApp message link with the &text parameter
    var whatsappLink = 'https://wa.me/' + phoneNumber + '?text=' + encodeURIComponent(message);

    // Open the link in a new window or redirect the current window
    window.open(whatsappLink, '_blank');
}

$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
