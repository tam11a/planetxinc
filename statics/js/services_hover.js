$(".row-cube").mouseenter(function(){
    document.querySelector("#watermark-here").innerHTML = $(this).html();
  });

$(".row-cube").mouseleave(function(){
    document.querySelector("#watermark-here").innerHTML = "";
  });
