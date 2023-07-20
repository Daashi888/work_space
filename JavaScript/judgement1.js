function get_achievement(x, y, z) {
    // ここにプログラムを記述していきます
    let sum = x + y + z
    if (sum >= 250) { //250以上であればtrue
        return "A";
    } else if (sum >= 200) { //200以上
        return "B";
    } else if (sum >= 100) { //100以上
        return "C";
    } else {
        return "D";

    }
   
}

console.log(get_achievement(50, 30, 30));