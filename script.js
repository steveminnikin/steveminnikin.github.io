$(function() {

    setHawkTotalCost();

    function setHawkTotalCost() {

        var hawkCost = 1.10;
        var totalHawkCost = 1.10;
        var optionalExtras = 0;

        $('#hawkPicker').change(function() {
            var noOfHawks;

            noOfHawks = getNumberOfHawks();
            totalHawkCost = calculateHawkTotalCost(noOfHawks, optionalExtras);

            $('#hawkTotalCost').text(totalHawkCost);

        });

        $('#stripes').change(function() {
            calculateOptionalExtras();

            $('#hawkTotalCost').text(totalHawkCost);
        });

        function calculateHawkTotalCost(noOfHawks, optionalExtras) {
            return (noOfHawks * (hawkCost + optionalExtras)).toFixed(2);
        }

        function getNumberOfHawks() {
            noOfHawks = $('#hawkPicker').val();
            return noOfHawks;
        }

        function calculateOptionalExtras(params) {
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


            return totalOptionalExtras;

        }
    }

});