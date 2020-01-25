$(function() {

    setHawkTotalCost();

    function setHawkTotalCost() {

        var hawkCost = 1.10;
        var totalHawkCost = 1.10;
        var optionalExtras = 0;

        $('#hawkPicker').change(function() {
            calculateHawkTotalCost();

        });

        $('.hawk').change(function() {
            calculateHawkTotalCost();
        });

        function calculateHawkTotalCost() {
            var noOfHawks;

            noOfHawks = getNumberOfHawks();
            totalOptionExtras = calculateOptionalExtras();
            totalHawkCost = noOfHawks * (hawkCost + totalOptionExtras);

            $('#hawkTotalCost').text(totalHawkCost.toFixed(2));

        }

        function getNumberOfHawks() {
            noOfHawks = $('#hawkPicker').val();
            return noOfHawks;
        }

        function calculateOptionalExtras() {
            var totalOptionalExtras = 0;

            if ($('#stripes').is(':checked')) {
                totalOptionalExtras += 0.02;
            }
            if ($('#coffee').is(':checked')) {
                totalOptionalExtras += 0.01;
            }
            if ($('#paint').is(':checked')) {
                totalOptionalExtras += 0.03;
            }
            console.log(totalOptionalExtras);

            return totalOptionalExtras;

        }
    }

});