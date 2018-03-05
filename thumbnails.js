window.onload = initPage;
var request;

function initPage(){
	
//find the thumbnails on the page
var thumbs = document.getElementById('thumbnailPane').getElementsByTagName('img');

 //set the handler for each image
 for(var i =0; i < thumbs.length; i++){
	  
	  var image  = thumbs[i];
	  
	  //create the onclick function
	  image.onclick = function(){
		  
		  //find the full-size image name 
		  var detailURL = 'images/' + this.title + '-detail.jpg';
		  
		  document.getElementById('itemDetail').src = detailURL;
		  
		
		  
	  }
	  
	  
  }

}	

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

getDetails(itemName);