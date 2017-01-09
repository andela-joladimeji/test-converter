app.factory('converterFactory', function($http) {
    var url = 'http://api.fixer.io/latest';
    return {
        getRates: function() {
            return $http.get(url);
        },
        fetchRatesWithBaseUSD: function() {
            return $http.get(url + '?base=USD');
        }
    }
});




