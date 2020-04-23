document.write("Hello world");

// for (let i = 0; i < 10; i++ ) {
//     if (i % 2 === 0 ) continue;
//     console.log (i);


 function scoreCheck() {
    let testScore = document.getElementById('score').value
if (testScore >= 80) {
    document.write("合格です！おめでとうございます！");
} else if (testScore >= 70) {
    document.write("惜しい！　あと少し！");
} else{
    document.write("不合格です！　もう少し勉強しましょう");
}

}
