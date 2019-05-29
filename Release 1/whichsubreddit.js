var count = 0;
  function whichsubreddit(){
    if(count==0){
    console.log(count)
      let thissubreddit = document.getElementById("typer").value;
      console.log(thissubreddit);
      count+=1;
      console.log(count);
      runpage();
      return thissubreddit;
    }
    if(count>0){
     count=0;
     //aww.remove("img");
     whichsubreddit();}}
    function runpage() {
      var container = document.querySelector("#reload");
      container.innerHTML= ""
      reddit.top(document.getElementById("typer").value).t("day").limit().fetch(function (res) {
      for (var i = 0; i < res.data.children.length; i++) {
        var awwData = res.data.children[i].data;
        var thumbnail = document.createElement("img");
        var aww = document.createElement("img");
        var row = document.createElement("div");
        var left = document.createElement("div");
        var right = document.createElement("div");
        var space = document.createElement("br");
        var link = document.createElement("a");
        link.target ="_blank"
        row.className = "row";
        left.className = "col-xs-4";
        thumbnail.setAttribute("src", awwData.thumbnail);
        link.setAttribute("href", "https://www.reddit.com" + awwData.permalink);
        link.innerText = awwData.title;
        thumbnail.className = "center";
        left.appendChild(link);
        left.appendChild(space);
        left.appendChild(thumbnail);
        row.appendChild(left);
        right.className = "col-xs-8";
        aww.className = "img-responsive";
        aww.setAttribute("src", awwData.url);    
        row.appendChild(right);
        container.appendChild(row);
      }
    });
  };