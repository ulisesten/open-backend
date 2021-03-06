
/**@Utils */
function getEl(id){
    return document.getElementById(id);
}

function newEl(el){
    return document.createElement(el);
}

var queryHeaders = {
    'Content-Type': 'application/json; charset=utf-8'
}

/**GET functions */
function getData(url, callback){

    fetch( url, {
        credentials: 'include',
        headers: queryHeaders,
        method: 'GET'
    }).then( res => {
        if( !res.ok ){
            console.log('getProduct: Error');
            return;
        }

        return res.json();

    }).then( res=> {
        if( res !== null ){
            callback(res)
        }
    });

}

var imageStorageUrl = "https://res.cloudinary.com/djlzeapiz/image/upload/q_20/v1573315852/";

function productCard(product){
    return `<div class="card">
        <div class="img-container">
            <img class="cardImage" src=${imageStorageUrl + product.image_array[0]} alt="imagen del producto" >
        </div>
        <div class="product-info-container">
            <h2 class="product-name">${product.product_name}</h2>
            <p class="price">$${product.price}</p>
            <!-- <p>${product.description}</p> -->
        </div>
    </div>`;
}

function productCallback(res){
    console.log( res );
    res.forEach( el=> {
        var card = productCard(el);
        getEl('products').innerHTML += card;
    })
}

function coverCard(res,index){
    return `<img id="${index}" class="page" src="${imageStorageUrl + res.cover_id}">`;
}

function coverCallback(res){
    console.log('covers',res);
    var pager = getEl('view-pager');
    var index = 1;

    res.forEach( el=> {
        var page = coverCard( el, index++ );
        pager.innerHTML += page;
        //pagerSlider(pager, index);
        if(index === res.length + 1){
        
            slider();
            
        }
    })
}


/**Image slider */
var timeOnSlide = 3,
    timeBetweenSlides = 1,
    animationString = 'animation',
    animation = false,
    keyframeprefix = '',
    domPrefixes = 'Webkit Moz O Khtml'.split(' '),
    pfx = '',
    slidy = getEl('view-pager');

function slider(){

    if (slidy.style.animationName !== undefined) { animation = true; } 
    
    if( animation === false ) {
      for( var i = 0; i < domPrefixes.length; i++ ) {
        if( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
          pfx = domPrefixes[ i ];
          animationstring = pfx + 'Animation';
          keyframeprefix = '-' + pfx.toLowerCase() + '-';
          animation = true;
          break;
        }
      }
    }

    if( animation === false ) {
        // animate in JavaScript fallback
      } else {
        var images = slidy.getElementsByTagName("img"),
            firstImg = images[0], 
            // get the first image inside the "slidy" element.
            imgWrap = firstImg.cloneNode(false);  // copy it.
        slidy.appendChild(imgWrap); // add the clone to the end of the images
        var imgCount = images.length, // count the number of images in the slide, including the new cloned element
            totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
            slideRatio = (timeOnSlide / totalTime)*100, // determine the percentage of time an induvidual image is held static during the animation
            moveRatio = (timeBetweenSlides / totalTime)*100, // determine the percentage of time for an individual movement
            basePercentage = 100/imgCount, // work out how wide each image should be in the slidy, as a percentage.
            position = 0, // set the initial position of the slidy element
            css = document.createElement("style"); // start marking a new style sheet
        css.type = "text/css";
        css.innerHTML += "#view-pager { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; // set the width for the slidy container
        css.innerHTML += "#view-pager img { float: left; width: " + basePercentage + "%; }\n";
        css.innerHTML += "@"+keyframeprefix+"keyframes slidy {\n"; 
        for (i=0;i<(imgCount-1); i++) { // 
          position+= slideRatio; // make the keyframe the position of the image
          css.innerHTML += position+"% { left: -"+(i * 100)+"%; }\n";
          position += moveRatio; // make the postion for the _next_ slide
          css.innerHTML += position+"% { left: -"+((i+1) * 100)+"%; }\n";
      }
        css.innerHTML += "}\n";
        css.innerHTML += "#view-pager { left: 0%; "+keyframeprefix+"transform: translate3d(0,0,0); "+keyframeprefix+"animation: "+totalTime+"s slidy infinite; }\n"; // call on the completed keyframe animation sequence
      document.body.appendChild(css); // add the new stylesheet to the end of the document
      }      
}


/**Side Bar */
var toggleMenu = getEl('toggle-menu');
var toggledMenu = getEl('toggled-menu');
var sideBarMenu = getEl('sidebar-menu');

toggleMenu.addEventListener('click', ()=>{
    sideBarMenu.style.transform = 'translateX(0%)';
    toggleMenu.style.display = 'none';
    toggledMenu.style.display = 'block';
});

toggledMenu.addEventListener('click', ()=>{
    sideBarMenu.style.transform = 'translateX(-100%)';
    toggleMenu.style.display = 'block';
    toggledMenu.style.display = 'none';
});


/**User Info */
var mUsername = localStorage.username;
var mId = localStorage.id;

if( mId === undefined || mUsername === undefined)
    window.location.href = '/ingresar';
else {


/**Getting covers */
getData( '/getCovers', coverCallback ); 
/**Getting products */
getData( '/getProducts', productCallback) ;





var OAUTH2_CLIENT_ID = '1079857387021-bn8f0g6f7v6l15p0idl9lalsvim0l69q.apps.googleusercontent.com';
var OAUTH2_SCOPES = [
  'https://www.googleapis.com/auth/youtube'
];

// Upon loading, the Google APIs JS client automatically invokes this callback.
googleApiClientReady = function() {
  gapi.auth.init(function() {
    alert('client ready');
    window.setTimeout(checkAuth, 1);
  });
}

// Attempt the immediate OAuth 2.0 client flow as soon as the page loads.
// If the currently logged-in Google Account has previously authorized
// the client specified as the OAUTH2_CLIENT_ID, then the authorization
// succeeds with no user intervention. Otherwise, it fails and the
// user interface that prompts for authorization needs to display.
function checkAuth() {
  alert('authorizing..');
  gapi.auth.authorize({
    client_id: OAUTH2_CLIENT_ID,
    scope: OAUTH2_SCOPES,
    immediate: true
  }, handleAuthResult);
}

// Handle the result of a gapi.auth.authorize() call.
function handleAuthResult(authResult) {
  if (authResult && !authResult.error) {
    // Authorization was successful. Hide authorization prompts and show
    // content that should be visible after authorization succeeds.
    $('.pre-auth').hide();
    $('.post-auth').show();
    loadAPIClientInterfaces();
  } else {
    // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
    // client flow. The current function is called when that flow completes.
    $('#login-link').click(function() {
      gapi.auth.authorize({
        client_id: OAUTH2_CLIENT_ID,
        scope: OAUTH2_SCOPES,
        immediate: false
        }, handleAuthResult);
    });
  }
}

// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// https://developers.google.com/api-client-library/javascript/dev/dev_jscript#loading-the-client-library-and-the-api
function loadAPIClientInterfaces() {
  gapi.client.load('youtube', 'v3', function() {
    handleAPILoaded();
  });
}


// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    alert('api loaded');
    $('#search-button').attr('disabled', false);
  }
  
  // Search for a specified string.
  function search() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet'
    });
  
    request.execute(function(response) {
      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');
    });
  }





}/**else end */





