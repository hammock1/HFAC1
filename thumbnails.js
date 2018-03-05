window.onload = initPage;
var itemName;
var request;
var thumbs;

function initPage(){
	
//find the thumbnails on the page
 thumbs = document.getElementById('thumbnailPane').getElementsByTagName('img');
 
 
 //set the handler for each image
 for(var i =0; i < thumbs.length; i++){
	  
	   image  = thumbs[i];
	  
	  //create the onclick function
	  image.onclick = function(){
		  
		  //find the full-size image name 
		  var detailURL = 'images/' + this.title + '-detail.jpg';
		  itemName = this.title; 
		  document.getElementById('itemDetail').src = detailURL;
		  getDetails(itemName);	
		  
		
		  
	  }
	  
	  
  }

}
//this create a request object
function createRequests(){
	try{
		
	request = new XMLHttpRequest();

 			
	}catch(tryMs){
		try{
	request = new ActiveXObject('Msxml2.XMLHTTP');
		} catch(otherMS){
			try{
				
	request = new ActiveXObject('Microsoft.XMLHTTP');			
			}catch(failed){
			
          request = null;			
				
			}
			
			
		}
		
	}
	return request;
	
}
//this get the details of the image 
function getDetails(itemName){
	
	request = createRequests();
	
	if(request == null){
	alert('unable to create request');
	return;
	}
	
	var url = 'getDetails.php?ImageID=' + escape(itemName);
	request.open('GET', url, true);
	request.onreadystatechange = displayDetails;
	request.send(null);
	
	
	
	
}
//this displays the details of the image
function displayDetails(){
	if(request.readyState == 4){
		
		if(request.status == 200){
			detailDiv = document.getElementById('description');
			detailDiv.innerHTML = request.responseText;

		}
		
		
	}
	
	
}


