function calculateShipping(amount) {
    if (amount < 3000) {
        console.log("送料は500円です");
    } else if (amount >= 3000) {
        console.log("送料無料です");
    }
}

calculateShipping(5000);