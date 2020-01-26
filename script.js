$(function() {

    setHawkTotalCost();

    function setHawkTotalCost() {

        var hawkCost = 1.10;
        var lightningCost = 35;

        $(':input').change(function() {
            calculateTotalCost($(this));
        });

        function calculateTotalCost(aircraftType) {
            var noOfAircraft;

            noOfAircraft = getNumberOfAircraft(aircraftType);
            totalOptionExtras = calculateOptionalExtras(aircraftType);
            totalCost = noOfAircraft * (hawkCost + totalOptionExtras);

            $('#hawkTotalCost').text(totalCost.toFixed(2));

        }

        function getNumberOfAircraft(aircraftType) {
            noOfAircraft = aircraftType.val();
            return noOfAircraft;
        }

        function calculateOptionalExtras(aircraft) {
            var totalOptionalExtras = 0;

            $(':checkbox').each(function() {
                if (this.checked) {
                    totalOptionalExtras += Number(this.value);
                }
            });

            // if ($('#stripes').is(':checked')) {
            //     totalOptionalExtras += $(this).val();
            // }
            // if ($('#coffee').is(':checked')) {
            //     totalOptionalExtras += 0.01;
            // }
            // if ($('#paint').is(':checked')) {
            //     totalOptionalExtras += 0.03;
            // }
            console.log(totalOptionalExtras);

            return totalOptionalExtras;

        }
    }

});