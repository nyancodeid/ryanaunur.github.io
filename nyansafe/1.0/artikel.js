    var articleDB = {
      "items": [
         {
        "title": "Programmer Sudah Makin Maju",
              "content": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.</p><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.</p><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.</p><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.</p>"
         },
         {
            "title": "Contoh Artikel 2",
           "content": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.</p><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.</p><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.</p><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.</p><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.</p>"
      },
      {
           "title": "Contoh Artikel 3",
           "content": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.<br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.</p><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.</p><br /><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex asperiores exercitationem earum modi, odit quae reiciendis unde deserunt consectetur fuga itaque ipsa sint, saepe assumenda magnam. Neque ex, fuga! Numquam.</p></p>"
      }
     ]
   };
  var index = Math.floor(Math.random() * (articleDB.items.length - 1 + 1));

  $('.title-artikel').text(articleDB.items[index].title);
  $('.post-content').html(articleDB.items[index].content);
