var counter=0;
function adduser()
{
    var input1=document.getElementById('fname').value;
    var input2=document.getElementById('date').value;

    var html='<div class="row" id="data'+counter+'"style="margin-bottom:15px;">'+
    '<div class="col-md-3 col-sm-6 col-xs-5">'+
    '<input type="text" class="form-control" value="'+input1+'"disabled>'+
    '</div>'+
    '<div class="col-md-3 col-sm-6 col-xs-5">'+
    '<input type="text" class="form-control" value="'+input2+'"disabled>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
    '<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit'+counter+'">Edit</button>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
    '<button type="button" class="btn btn-success" onclick="update(this.id)" id="update'+counter+'">Update</button>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
    '<button type="button" class="btn btn-danger" onclick="remove(this.id)" id="delete'+counter+'">Delete</button>'+
    '</div>'+
    '</div>'

    document.getElementById('userlist').insertAdjacentHTML('beforeend',html);
    counter++;
}
function edit(editId){
  
    var parent =   document.getElementById(editId).parentNode.parentNode;
          var child = parent.firstChild.firstChild;
          child.removeAttribute('disabled');
          console.log(child);
        }
        
  function update(updateId){
    var parent =   document.getElementById(updateId).parentNode.parentNode;
          var child = parent.firstChild.firstChild;
          child.setAttribute("disabled",'disabled');
          console.log(child);
        }
        
  function remove(deleteId){
    var parent =   document.getElementById(deleteId).parentNode.parentNode;
          parent.remove();
          console.log(parent);
        }



        function validateEmail(email) 
        {
          var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
          return re.test(email);
        }