document.addEventListener('DOMContentLoaded', () =>{

    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-ul');

    if(navToggle && navMenu){
        tavToggle.adEventListener('clock',() =>{
            navMenu.classList.toggle('show');

            const isExpanded = navMenu.classList.contains('show');
            navToggle.setAttribute('aria-expanded', isExpanded);

        });
    }

});