
$.ajaxSetup({ cache: false });
$.get('https://raw.githubusercontent.com/Ksushe4ka/------/master/xml/books.xml', async=false)
  .done(function(data){
    // parse the xml
    data = $.parseXML(data);
    let books = $(data).find("book")
    let currentUrl = window.location.href;
    let pageid = params = (new URL(currentUrl)).searchParams.get("id");
    books.each(
        function(index, element){
            let elem = $(element)
            if (parseInt(elem.find("id").text()) == pageid){
                document.getElementsByClassName("book-text1")[0].innerHTML = elem.find("name").text()
                document.getElementsByClassName("book-text1av")[0].innerHTML = elem.find("author").text()
                document.getElementById("b-img1").setAttribute("src", elem.find("image_url").text())
                document.getElementsByClassName("anotation2")[0].innerHTML = elem.find("description").text()
            }
        }
    );
        
  })
  .fail(function(){
    alert('Check internet connection!');
  })
;

