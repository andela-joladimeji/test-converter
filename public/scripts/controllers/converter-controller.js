app.controller('converterCtrl', function($scope, converterFactory){
  $scope.getRatesForConversions = function(){
      converterFactory.getRates().then(function(response){
      $scope.rates = response.data.rates;
      return $scope.rates;
    }).catch(function(e){
      console.error(e);
    });
  };

  $scope.fetchRatesWithBaseUSD = function(){
    converterFactory.fetchRatesWithBaseUSD().then(function(response){
      $scope.rates = response.data.rates;
      return $scope.rates;
    });
  };

  $scope.convertCurrency = function(amount){
    $scope.convertedAmount = amount / $scope.selectedCurrency;
    return $scope.convertedAmount;
  };

});