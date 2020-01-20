
                var rIndex,
                table = document.getElementById("table");
            
            function checkEmptyInput() {
                var isEmpty = false,
                    fname = document.getElementById("fname").value,
                    lname = document.getElementById("lname").value;
                   
                if (fname==="")
                 {
                    alert("First Name Connot Be Empty");
                    isEmpty = true;
                }
                else if (lname==="")
                {
                   alert("Last Name Connot Be Empty");
                   isEmpty = true;
               }
               else if (age==="")
                {
                   alert("date of birth Connot Be Empty");
                   isEmpty = true;
               }
               else if (gendor==="")
               {
                  alert("Email Connot Be Empty");
                  isEmpty = true;
              }
              else if (username==="")
              {
                 alert("user name Connot Be Empty");
                 isEmpty = true;
             }
              else if (email==="")
              {
                 alert("email Connot Be Empty");
                 isEmpty = true;
             }


                return isEmpty;
                        }
                        function add() {
                          
                            if (!checkEmptyInput()) {
                                var newRow = table.insertRow(table.length),
                                    cell1 = newRow.insertCell(0),
                                    fname = document.getElementById("fname").value;
                                    cell1.innerHTML = fname;
                                    var newRow = table.insertRow(table.length),
                                    cell1 = newRow.insertCell(0),
                                    lname = document.getElementById("lname").value;
                                    cell1.innerHTML = lname;
                                    var newRow = table.insertRow(table.length),
                                    cell1 = newRow.insertCell(0),
                                   age = document.getElementById("age").value;
                                    cell1.innerHTML = age;
                                    var newRow = table.insertRow(table.length),
                                    cell1 = newRow.insertCell(0),
                                    gendor = document.getElementById("gendor").value;
                                    cell1.innerHTML = gendor;
                                    var newRow = table.insertRow(table.length),
                                    cell1 = newRow.insertCell(0),
                                   username = document.getElementById("username").value;
                                    cell1.innerHTML = username;
                                    var newRow = table.insertRow(table.length),
                                    cell1 = newRow.insertCell(0),
                                    email = document.getElementById("email").value;
                                    cell1.innerHTML = email;
                                    var newRow = table.insertRow(table.length),
                                    cell1 = newRow.insertCell(0);
                                   
                                    cell1.innerHTML ="<button   id='button' ;>Register</button>";
                                  

                                   
                            }
                        }

