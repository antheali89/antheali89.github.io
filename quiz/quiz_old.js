function getAnswers() {

    //my own algorithm
    var total_cc = 0;
    var total_da = 0;
    var total_ecore = 0;
    var cc_weight, da_weight, ecore_weight;
    var checked = 0;
    
    var fabric = document.getElementsByName("fabric");
    var scent = document.getElementsByName("scent");
    var freeDay = document.getElementsByName("freeDay");
    var pet = document.getElementsByName("pet");
    var food = document.getElementsByName("food");
    var qLocation = document.getElementsByClassName("questionBanner");
  
    //fabric 
    for (var fabricChoice in fabric) {
      if (fabric[fabricChoice].checked) {
        
        checked++;
        switch (fabric[fabricChoice].value) {
          case "linen":
            cc_weight = 4;
            da_weight = 2;
            ecore_weight = 1;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "leather":
            cc_weight = 1;
            da_weight = 4;
            ecore_weight = 3;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "spandex":
            cc_weight = 0;
            da_weight = 2;
            ecore_weight = 4;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "denim":
            cc_weight = 3;
            da_weight = 3;
            ecore_weight = 3;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
        }
        window.scrollTo(0, qLocation[1].offsetTop);
      }
    }
  
    //scent
    for (var scentChoice in scent) {
      if (scent[scentChoice].checked) {
        checked++;
        switch (scent[scentChoice].value) {
          case "bread":
            cc_weight = 4;
            da_weight = 3;
            ecore_weight = 1;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "leather1":
            cc_weight = 2;
            da_weight = 3;
            ecore_weight = 4;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "jasmine":
            cc_weight = 4;
            da_weight = 2;
            ecore_weight = 1;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "gas":
            cc_weight = 0;
            da_weight = 2;
            ecore_weight = 4;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
        }
        window.scrollTo(0, qLocation[2].offsetTop);
      }
    }
  
    //free day
    for (var freeDayChoice in freeDay) {
      if (freeDay[freeDayChoice].checked) {
        checked++;
        switch (freeDay[freeDayChoice].value) {
          case "reading":
            cc_weight = 3;
            da_weight = 4;
            ecore_weight = 2;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "baking":
            cc_weight = 4;
            da_weight = 3;
            ecore_weight = 1;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "sleeping":
            cc_weight = 2;
            da_weight = 1;
            ecore_weight = 4;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "hiking":
            cc_weight = 4;
            da_weight = 3;
            ecore_weight = 2;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
        }
        window.scrollTo(0, qLocation[3].offsetTop);
      }
    }

    //pet
    
    for (var petChoice in pet) {
      if (pet[petChoice].checked) {
        checked++;
        switch (pet[petChoice].value) {
          case "whitecat":
            cc_weight = 2;
            da_weight = 2;
            ecore_weight = 0;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "blackcat":
            cc_weight = 1;
            da_weight = 3;
            ecore_weight = 4;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "dog":
            cc_weight = 3;
            da_weight = 2;
            ecore_weight = 2;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "bunny":
            cc_weight = 4;
            da_weight = 2;
            ecore_weight = 1;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
        }
        window.scrollTo(0, qLocation[4].offsetTop);
      }
    }

    //food
    for (var foodChoice in food) {
      if (food[foodChoice].checked) {
        checked++;
        switch (food[foodChoice].value) {
          case "cafe":
            cc_weight = 3;
            da_weight = 3;
            ecore_weight = 3;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "upscale":
            cc_weight = 1;
            da_weight = 4;
            ecore_weight = 3;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "park":
            cc_weight = 4;
            da_weight = 3;
            ecore_weight = 1;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
          case "hole":
            cc_weight = 1;
            da_weight = 2;
            ecore_weight = 4;
            total_cc = total_cc + cc_weight;
            total_da = total_da + da_weight;
            total_ecore = total_ecore + ecore_weight;
            break;
        }
        window.scrollTo(0, qLocation[5].offsetTop);
      }
    }

    //music
    
    
    
    //handle results
    if(checked === 5)
    {
      const max_val = Math.max(total_cc, total_da, total_ecore);
      var resultHeader = document.getElementById("resultHeader");
      //var resultImg = document.getElementById("resultImg");

      if(max_val === total_cc)
      {
        resultHeader.innerHTML = "<a href='/cottagecore/ccIndex.html' text-align: center><u> Your personalized aesthetic and products are ready to view! Click Here</u>. </a>";
        /*resultImg.src = "images/cottagecore.jpg";*/

      }
      else if (max_val === total_da)
      {
          resultHeader.innerHTML = "<a href='/darkacademia/DA_Index.html' text-align: center><u> Your personalized aesthetic and products are ready to view! Click Here</u>. </a>";
          /*resultImg.src = "images/darkacademia.jpg";*/
      }
      else
      {
          resultHeader.innerHTML = "<a href='/ecore/eIndex.html' text-align: center><u> Your personalized aesthetic and products are ready to view! Click Here</u>. </a>";
          /*resultImg.src = "images/e-core.jpg";*/

      }
    }
}
  