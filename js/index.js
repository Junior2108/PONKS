const miniatures = document.querySelectorAll(".hero_work_thumb_image img");
const imagePrincipale = document.getElementById("MainImage");

miniatures.forEach(mini => {
  mini.addEventListener("click", () => {
  imagePrincipale.src = mini.src.replace("100", "500"); 
    });
    });