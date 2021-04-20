$(".row-cube").mouseenter(function(){
    document.querySelector("#watermark-here").innerHTML = $(this).html();
    document.querySelector(".services-icon").classList.remove("show-svg");
  });

$(".row-cube").mouseleave(function(){
    document.querySelector("#watermark-here").innerHTML = "";
    document.querySelector(".services-icon").classList.add("show-svg");
  });
