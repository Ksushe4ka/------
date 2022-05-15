
$.ajaxSetup({ cache: false });
$.get('https://raw.githubusercontent.com/Ksushe4ka/------/master/xml/books.xml', async=false)
  .done(function(data){
    // parse the xml
    data = $.parseXML(data);
    let books = $(data).find("book")
    books.sort(function(b, a){
      let elem1 = $(a)
      let elem2 = $(b)
      return elem1.find("rating").text() - elem2.find("rating").text()
    })
    books.each(
        function(index, elememt){
            let elem = $(elememt)
            document.getElementById("urls").innerHTML += "<a href='test2.html?id="+elem.find("id").text()+"'>Link#"+elem.find("id").text()+" name: "+elem.find("name").text() +"rating:"+ elem.find("rating").text()+"</a><br>"
        }
    );
        
  })
  .fail(function(){
    alert('Check internet connection!');
  })
;

