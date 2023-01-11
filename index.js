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
    !fizzNumForm ||
    !buzzNumForm ||
    !Number.isInteger(Number(fizzNumForm)) ||
    !Number.isInteger(Number(buzzNumForm))
  ) {
    const list = document.getElementById("list");
    const li = document.createElement("li");
    li.innerHTML = "整数値を入力してください";
    list.appendChild(li);
    return;
  }

  // FizzBuzz判定
  for (let i = 1; i < 100; i++) {
    if (i % (fizzNumForm * buzzNumForm) === 0) {
      const list = document.getElementById("list");
      const li = document.createElement("li");
      li.innerHTML = "FizzBuzz " + i;
      list.appendChild(li);
    } else if (i % buzzNumForm === 0) {
      const list = document.getElementById("list");
      const li = document.createElement("li");
      li.innerHTML = "Buzz " + i;
      list.appendChild(li);
    } else if (i % fizzNumForm === 0) {
      const list = document.getElementById("list");
      const li = document.createElement("li");
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
  for (let i = 0; i < len; i++) {
    //[li]を削除する
    ul.removeChild(ul.children[0]);
  }
}
