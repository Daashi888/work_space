function get_pass_or_failure(x, y, z) {
    let sum = x + y + z
    if (sum >= 60) {//60以上であれば合格。
        console.log("合格");
    }
}

get_pass_or_failure(1, 30, 30);