var MyApp = (function(){
    function init(uid, mid){
        alert("from app js");
        console.log("uid:", uid);
        console.log("mid:", mid);
    }

    return {
        _init: function(uid, mid){
            init(uid, mid);
        },
    };
})();
