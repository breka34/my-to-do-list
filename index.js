function newElement() {
    var li = document.createElement("li");
      var inputValue = document.getElementById("myInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("myUl").appendChild(li);
      }
      document.getElementById("myInput").value = "";
    
    
    }

    function openForm() {
        document.getElementById('myForm').style.display = 'block';
    }
    function closeForm() {
        document.getElementById('myForm').style.display = 'none';
    }

    