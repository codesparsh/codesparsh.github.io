// Typed Effect
let typed_strings = ['Developer','Designer' , 'Freelancer', 'Engineer']
new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
});

window.onscroll = function() {resumeScroll()};

function resumeScroll() {
    resumeHeight = window.innerHeight*2;
    resumeSection = document.getElementById('resume');
    // document.body.classList.remove("dark-theme")

  if(document.documentElement.scrollTop >= resumeSection.offsetTop-window.innerHeight/2){
      document.body.classList.add("dark-theme")
  }
  else{
    document.body.classList.remove("dark-theme")
  }
}







