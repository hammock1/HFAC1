window.onload = initPage;

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
		  
		  alert(this.title);
		  
	  }
	  
	  
  }

	
	
	
	
	
	
	
	
}	