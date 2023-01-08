console.log("working");
let carret = document.getElementsByClassName("caret");
let nested = document.getElementById("nested");
let i;
var data = JSON.parse(localStorage.getItem("jsonData"));
// console.log(jsonData);
// console.log(typeof jsonData);

// for (i = 0; i < carret.length; i++) {
//   carret[i].addEventListener("click", function () {
//     this.parentElement.querySelector(".nested").classList.toggle("active");
//     this.classList.toggle("caret-down");
//   });
// }

// for (const key in jsonData) {
//   if (jsonData.hasOwnProperty(key)) {
//     const element = jsonData[key];
//     let newLI = document.createElement("li");
//     if (element.length) {
//         console.log(element);
//         for (let i = 0; i < element.length; i++) {
//             for(const key in element[i]){
//                 const newElement = element[i][key]
//                 let data = `${key}:${newElement}`;
//                 let newContent = document.createTextNode(data);
//                 newLI.appendChild(newContent);
//                 carret.appendChild(newLI);
//             }
            
//         }
//     } else {
//       let data = `${key}:${element}`;
//       let newContent = document.createTextNode(data);
//       newLI.appendChild(newContent);
//       nested.appendChild(newLI);
//     }
//     // console.log(key+": ", element);
//   }
// }


$(document).ready(function() {
    function format_for_treeview(data, arr) {
      for (var key in data) {
        if (Array.isArray(data[key]) || data[key].toString() === "[object Object]") {
          // when data[key] is an array or object
          var nodes = [];
          var completedNodes = format_for_treeview(data[key], nodes);
          arr.push({
            text: key,
            nodes: completedNodes
          });
          
        } else {
          // when data[key] is just strings or integer values
          arr.push({
            text: key + " : " + data[key]
          });
        }
      }
      return arr;
    }
  
 
    $("#my-treeview").treeview({
      color: "#428bca",
      expandIcon: "glyphicon glyphicon-stop",
      collapseIcon: "glyphicon glyphicon-unchecked",
      showTags: true,
      data: format_for_treeview(data, [])
    });
  
  });