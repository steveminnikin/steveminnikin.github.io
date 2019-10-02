$(function() {

    setHawkTotalCost();

    function setHawkTotalCost() {

        var hawkCost = 1.10;
        var totalHawkCost;

        $('#hawkPicker').change(function() {
            var noOfHawks;

            noOfHawks = getNumberOfHawks();
            totalHawkCost = calculateHawkTotalCost(noOfHawks, 1);

            function getNumberOfHawks() {
                noOfHawks = $('#hawkPicker').val();
                return noOfHawks;
            }

            function calculateHawkTotalCost(noOfHawks, totalOptionalExtras) {
                return (noOfHawks * hawkCost * totalOptionalExtras).toFixed(2);
            }

            $('#hawkTotalCost').text(totalHawkCost);

            calculateOptionalExtras();

            function calculateOptionalExtras() {

                var hawkOptions = {
                    stripes: $('#stripes').is(':checked'),
                    coffee: $('#coffee').is(':checked'),
                    paint: $('#paint').is(':checked'),
                };



                console.log(hawkOptions);
            }
        });


    }

});