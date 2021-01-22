// https://github.com/farhanabsar21/javascript-problem-solving-assignment

//** Kilometer - Meter Converter */

function kilometerToMeter(kilo){
    var meter = kilo * 1000;
    // check if the kilometer is negative
    if(kilo < 0){
        return "no negetive input allowed!";
    }else{
        return meter;
    }
}



//** Total Budget Calculator */

function budgetCalculator(clock,phone,laptop){
    var clockPrice = clock * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    
    var total = clockPrice + phonePrice + laptopPrice;
    // we can include <= condition so that user can not put 0 product input
    // but the instruction was only for negetive numbers
    if(clock < 0 || phone < 0 || laptop < 0){
        return "product cannot be negetive!";
    }else{
        return total;
    }
}




//** Hotel Cost Calculator */

function hotelCost(night){
    var totalCost = 0;
    // cost calculating for first 10 nights
    if(night <= 10){
        if(night <= 0){
            return "night can not be 0 or negative!";
        }else{
            var totalCost = night * 100;
            return totalCost;
        }
    }
    // cost calculating for second 10 nights
    else if(night <= 20){
        var firstTenNight = 10 * 100;
        var extraRemainNight = night - 10;
        // we are not sure how many nights he will spend in the second part
        var extraRemainCost = extraRemainNight * 80;
        var totalCost = firstTenNight + extraRemainCost;
        return totalCost;
    }
    // cost calculating after 20 nights
    else{
        var firstTenNight = 10 * 100;
        var secongTenNight = 10 * 80;
        var extraRemainNight = night - 20;
        // we are not sure how many nights he will spend in the third part
        var extraRemainCost = extraRemainNight * 50;
        var totalCost = firstTenNight + secongTenNight + extraRemainCost;
        return totalCost;
    }
}



//** Finding largest string in an array */


function megaFriend(friends){
    if((friends == "") && (friends.length == 0)){
        return "Please put a string value!";
    }else{
        var megaFriend = "";

        //cycle through the input to separate single element 
        for (var i = 0; i < friends.length; i++) {
            // if any single element is bigger than the initial megaFriend value
            // then put the new value in megaFriend
            if (friends[i].length > megaFriend.length) {
                megaFriend = friends[i];
            }
        }
        return megaFriend;
    }
}
