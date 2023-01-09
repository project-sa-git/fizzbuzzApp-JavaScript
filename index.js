/**
 * 課題2
 */

// FizzBuzz表示関数
function calculateFizzbuzz() {
  // ボタン押下時に削除
  initDeleteTag();

  // 入力フォームの値を取得
  const fizzNumForm = document.getElementById("fizzNumForm").value;
  const buzzNumForm = document.getElementById("buzzNumForm").value;

  // 整数を判定
  if (
    fizzNumForm === "" ||
    buzzNumForm === "" ||
    Number.isInteger(Number(fizzNumForm)) == false ||
    Number.isInteger(Number(buzzNumForm)) == false
  ) {
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.innerHTML = "整数値を入力してください";
    list.appendChild(li);
    return;
  }

  // 大小並び替え
  let smallNum = 0;
  let largeNum = 0;
  if (buzzNumForm < fizzNumForm) {
    smallNum = buzzNumForm;
    largeNum = fizzNumForm;
  } else {
    smallNum = fizzNumForm;
    largeNum = buzzNumForm;
  }

  // FizzBuzz判定
  for (let i = 1; i < 100; i++) {
    if (i % (smallNum * largeNum) === 0) {
      let list = document.getElementById("list");
      let li = document.createElement("li");
      li.innerHTML = "FizzBuzz " + i;
      list.appendChild(li);
    } else if (i % largeNum === 0) {
      let list = document.getElementById("list");
      let li = document.createElement("li");
      li.innerHTML = "Buzz " + i;
      list.appendChild(li);
    } else if (i % smallNum === 0) {
      let list = document.getElementById("list");
      let li = document.createElement("li");
      li.innerHTML = "Fizz " + i;
      list.appendChild(li);
    }
  }
}

// 表示クリア関数
function initDeleteTag() {
  //[ul]タグを取得
  const ul = document.getElementById("list");
  //[li]の数を取得する
  const len = ul.children.length;
  //[li]の数だけ繰り返す
  for (var i = 0; i < len; i++) {
    //[li]を削除する
    ul.removeChild(ul.children[0]);
  }
}
