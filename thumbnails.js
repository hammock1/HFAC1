window.onload = initPage;

function initPage(){
	
//find the thumbnails on the page
 thumbs = document.getElementById('thumbnailPane').getElementsByTagName('img');
 
 
 //set the handler for each image
 for(var i =0; i < thumbs.length; i++){
	  
	  var image  = thumbs[i];
	  
	  //create the onclick function
	  image.onclick = function(){
		  alert('hello');
		  //find the full-size image name 
		  var detailURL = 'images/' + this.title + '-detail.jpg';
		 // itemName = image.title; 
		  //alert(itemName);
		  document.getElementById('itemDetail').src = detailURL;
		  
		
		  
	  }
	  
	  
  }

}	

