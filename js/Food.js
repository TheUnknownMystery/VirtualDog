class Food {

    constrctor(FoodS, lastFed) {

    }
    getFoodStock() {

        var getFoodRef = database.ref("FoodS")
        getFoodRef.on("value", function (data) {

            lastFed = data.val();


        })

    }

    updateStock(number) {

        database.ref("/").update({

            FoodS: number

        })



    }
}


