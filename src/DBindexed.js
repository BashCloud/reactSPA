var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
export let open = indexedDB.open("reactSPA", 1);
open.onupgradeneeded = function() {
    var db = open.result;
    var store1 = db.createObjectStore("comments",{keyPath: "id",autoIncrement: true });
    var store2 = db.createObjectStore("photos",{autoIncrement: true });
    var store3 = db.createObjectStore("todos",{autoIncrement: true });
    var store4 = db.createObjectStore("posts",{autoIncrement: true });
    
};
export function addToDB(query,data) {
    var db = open.result;
    var tx = db.transaction(query, "readwrite"); 
    tx.objectStore(query).put(data); 
    // Close the db when the transaction is done
    tx.oncomplete = function() {
        db.close();
    };
}