$(function() {
    var order = {
        unitCost: 0,
        number: 1,
        optionalExtras: 0,
        cost: 0};

    setHawkTotalCost();

    function setHawkTotalCost() {

        var hawkCost = 1.10;
        var lightningCost = 35;

        $(':input').change(function() {

            order.unitCost = 
            order.number = getNumberOfAircraft(order);
            order.optionalExtras = calculateOptionalExtras(aircraftType);
            order.cost = calculateTotalCost($(this));

            $('#hawkTotalCost').text(order.cost.toFixed(2));
        });

        function calculateTotalCost(order) {
            var totalCost;

            
            
             totalCost = noOfAircraft * (hawkCost + order.optionalExtras);

            return totalCost

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