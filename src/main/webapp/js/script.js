function get(id) {
	return document.getElementById(id);
}

function validate(id) {
	var valid = true;
  var listName;  
  if(get("listName"+id) != null) {
		listName = get("listName"+id).value;
	  if(listName != null && listName != "") {
			alert(listName);
		} else {
			alert("Le nom de la liste ne peux pas être vide");
			valid = false;
		}
	}
	
  if(!valid) {
      return false;
  }
  else {
    if (confirm('Êtes vous sûr de vouloir renommer la liste en "' + listName + '" ?')) {
			get('list'+ id).submit();
		}
  }
}

function validateNewArticle() {
	
}

function confirmListDeletion(id) {
	var result = false
	if(confirm('Êtes vous sûr de vouloir supprimer la liste ?')) {
		get('deleteListForm'+ id).submit();
		result = true;
	}
	return result;
}

function confirmListReset() {
	var result = false
	if(confirm('Êtes vous sûr de vouloir réinitialiser la liste ?')) {
		get('listReset').submit();
		result = true;
	}
	return result;
}