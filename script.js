var totalOptionalExtras = 0;
var noOfAircraft = 1;

var hawkCost = 1.10;

$(function() {

    setTotalCost();

    function setTotalCost() {


        $('.Picker').change(function(obj) {
            var aircraft = obj.target;

            calculateTotalCost(aircraft);
        });

        $('.Extras').change(function() {

            totalOptionalExtras = calculateOptionalExtras();

            console.log(totalOptionalExtras);

        });

        function calculateTotalCost(aircraft) {

            noOfAircraft = getNumberOfAircaft(aircraft);
            //totalOptionalExtras = calculateOptionalExtras();
            totalCost = noOfAircraft * (hawkCost + totalOptionalExtras);

            $('#hawkTotalCost').text(totalCost.toFixed(2));

        }

        function getNumberOfAircaft(aircraft) {
            var _noOfAircraft;

            _noOfAircraft = aircraft.value;
            return _noOfAircraft;
        }

        function calculateOptionalExtras() {
            var _totalOptionalExtras;


            $(':checkbox').each(function() {
                if (this.checked) {
                    _totalOptionalExtras = this.value;
                }
            });

            return _totalOptionalExtras;

        }
    }

});