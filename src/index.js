(()=>{
  
  const $menuBtn = document.getElementById('js-menu');
  const $nav = document.getElementById('js-nav');
  const $removeBtn = document.getElementById('js-remove')

  $menuBtn.addEventListener('click',()=>{
    $nav.classList.add("in-nav");
    $menuBtn.classList.add("re-btn")

    $removeBtn.addEventListener('click',(e)=>{
      e.preventDefault();
      $nav.classList.remove("in-nav");
    $menuBtn.classList.remove("re-btn")
    
  });
});

  //スクロールイベント
  window.addEventListener('scroll',()=>{
    const $section = document.querySelectorAll('section');
    let scrollHeight = window.pageYOffset;

    if(scrollHeight >= 200){
      $section[0].classList.add("animation");
    }
    if(scrollHeight >= 650){
      $section[1].classList.add("animation");
    }
    if(scrollHeight >= 1290){
      $section[2].classList.add("animation");
    }
  });

    



   
  



})();