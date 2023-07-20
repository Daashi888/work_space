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

// console.log(get_achievement(50, 30, 30));

function get_pass_or_failure(x, y, z) {
    let sum = x + y + z
    if (sum >= 60) {//60以上であれば合格。
        console.log("合格");
    }
}

console.log(get_pass_or_failure(1, 20, 30));

function judgement(x, y, z) {

    let achievement = get_achievement(x, y, z);  //関数の結果（戻り値）
    let pass_or_failure = get_pass_or_failure(x, y, z);  //関数の結果（戻り値）
    return (`あなたの成績は${achievement}です。${pass_or_failure}です！`);

}

// console.log(judgement(60,100,40));