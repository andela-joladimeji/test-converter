var rates = {
    'AUD': 1.3386,
    'BGN': 1.8173,
    'BRL': 3.4008,
    'CAD': 1.3215,
    'CHF': 1.0085,
    'CNY': 6.8799,
    'CZK': 25.124,
    'DKK': 6.9123,
    'EUR': 0.9292,
    'GBP': 0.78977,
    'HKD': 7.7565,
    'HRK': 7.002,
    'HUF': 292.04,
    'IDR': 13286,
    'ILS': 3.7881,
    'INR': 67.372,
    'JPY': 113.93,
    'KRW': 1161.5,
    'MXN': 20.341,
    'MYR': 4.422,
    'NOK': 8.3762,
    'NZD': 1.3913,
    'PHP': 49.679,
    'PLN': 4.1386,
    'RON': 4.1832,
    'RUB': 63.362,
    'SEK': 9.0344,
    'SGD': 1.4191,
    'THB': 35.62,
    'TRY': 3.4079,
    'ZAR': 13.674
}
describe('converterCtrl', function() {
    var scope, converterFactory, returnedRate;
    beforeEach(module('converter'));

    beforeEach(inject(function($rootScope, $controller, _converterFactory_) {
        scope = $rootScope.$new();
        converterFactory = _converterFactory_;

        spyOn(converterFactory, 'getRates').and.callThrough();
        spyOn(converterFactory, 'fetchRatesWithBaseUSD').and.callThrough();
        spyOn(converterFactory, 'convert');
        ctrl = $controller('converterCtrl', {
            $scope: scope,
            converterFactory: converterFactory
        });

        returnedRate = converterFactory.getRates();
    }));

    describe('testing if it is working', function() {
        it('should have getRatesForConversions defined', function() {
            expect(scope.getRatesForConversions).toBeDefined();
        });

        it('should have body defined', function() {
            expect(scope.fetchRatesWithBaseUSD).toBeDefined();
        });

        it('should have body defined', function() {
            expect(scope.convertCurrency).toBeDefined();
        });
        it('getRatesForConversions', function() {
            expect(scope.getRatesForConversions).toHaveBeenCalled;
        });
        it('should return data', function() {
            // expect(scope.getRatesForConversions()).toEqual(returnedRate);
            expect(scope.getRatesForConversions).not.toBeNull();
        });

    });


});
