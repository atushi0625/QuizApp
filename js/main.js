$(function() {
	// 解答の確認
	var check = function() {
		// 問題の答え
		var q1 = $("input[name=q1]:checked").val();
		var q2 = $("input[name=q2]:checked").val();
		var q3 = $("input[name=q3]:checked").val();

		// 答え合わせ
		var right = 0;
		if (q1 == 2) {right += 1;}  /* right = right + 1;と同じ意味*/ 
		if (q2 == 3) {right += 1;}
		if (q3 == 3) {right += 1;}

		// 正答率を表示
		var percent = Math.floor(right / 3 * 100);
		var text = "正答率は " + percent + " ％でした。";
		$("#res").empty().append(text);

		if (percent == 0) {
			$("#res").css({background: "#666", color: "#fff"});
		} else
		if (percent == 100) {
			$("#res").css({background: "#faa", color: "#000"});
		} else {
			$("#res").css({background: "#fff", color: "#000"});
		}
	};

	// 解答の確認ボタンにイベントを追加
	$("#btnCheck").click(check);
});

const a = 5;
switch(a){
	case 4:
		console.log("|大吉|");
		break;
	case 3:
		console.log("|中吉|");
		break;
	case 6:
		console.log("将吉");
		break;

		default:
			console.log("一致しませんでした");
			break;
}

// let number = 7;
// while(number <= 100){
// console.log(number);
// number +=1;
// }

// for(let i = 1; i <=70; i++){
// 	if(i==60){
// 		console.log("限界");
// 	}else{
// 		console.log(i);
// 	}
// }

let color = ['red','blue','black','yello'];
for(let i=0; i<color.length; i++ ){
	if(i==1){
		console.log(color[i]+"だよ");  //blueだよ
	}else{
		console.log(i+"でした"); //0でした、２でした、３でした
	}
}

let kickboxers = [
	{name:"那須川天心",age:21},
	{name:"武尊",age:29},
	{name:"魔裟斗",age:38},
];
// console.log(kickboxer[1].name);
for(let i = 0; i<kickboxers.length; i++){
	let kickboxer = kickboxers[i];

	console.log(`名前は${kickboxer.name}です`);

	if(kickboxers.age===undefined){
		console.log("年齢は秘密だよ");
	}else{
		console.log(`${kickboxer.age}歳です`);
	}
}
