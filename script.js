
// display or hide plus / minus icon based on .collapse .show calss
displayPlusMinus();

// get all collapsable items (triggers and contents)
var faqTitiles = document.querySelectorAll('.faq-title');
var faqPlus = document.querySelectorAll('.plus');
var faqMinus = document.querySelectorAll('.minus');
var faqsContent = document.querySelectorAll('.faq-content');

// toggle collapse on click of faq title
faqTitiles.forEach(function (faq, index) {
    toggleIcon(faq, index);
});

// toggle collapse on clickk of +
faqPlus.forEach(function (faq, index) {
    toggleIcon(faq, index);
});

// toggle collapse on clickk of -
faqMinus.forEach(function (faq, index) {
    toggleIcon(faq, index);
});


// function for toggle + & - icon
// Based on the availibilty of .show in the faq contents toggle the display property of + / - img 
function displayPlusMinus() {
    var faqsContent = document.querySelectorAll('.faq-content');
    faqsContent.forEach(function (content, index) {
        if (content.classList.contains('show')) {
            var faqNo = index + 1;
            var faqSelector = 'faq-' + faqNo.toString() + '-p';
            var faqDeSelector = 'faq-' + faqNo.toString() + '-m';
            document.getElementsByClassName(faqSelector)[0].style.display = 'none';
            document.getElementsByClassName(faqDeSelector)[0].style.display = 'block';
        } else {
            var faqNo = index + 1;
            var faqSelector = 'faq-' + faqNo.toString() + '-m';
            var faqDeSelector = 'faq-' + faqNo.toString() + '-p';
            document.getElementsByClassName(faqSelector)[0].style.display = 'none';
            document.getElementsByClassName(faqDeSelector)[0].style.display = 'block';
        }
    })
}


// function for toggling faq contents
// faq contents is toggled by bootstrap "collapse"
// However this function toggle the +/- sign and also hide any opend faq othing than the clicked one.
function toggleIcon (faq, index){
    faq.addEventListener('click', function (e) {
        setTimeout(function () {
            faqsContent.forEach(function (content, i) {
                if(index !== i){
                    if (content.classList.contains('show')) {
                        content.classList.remove('show');
                    }
                }
            });
            displayPlusMinus();
        }, 500);
        
    })
}