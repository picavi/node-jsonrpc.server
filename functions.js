var result = [
    {"posId": 1, "prodDesc": "FancyProduct", "prod": "0815-12345", "src": "A504", "dest": "B123"},
    {"posId": 2, "prodDesc": "AwesomeProduct", "prod": "0815-12346", "src": "A505", "dest": "B459"}
];

var functions = {


    'getPicklist': function(){    
        return result;
    },

    'getPick': function(posId){
        return posId;
    }

};

module.exports = functions;