const startButton = document.getElementById("startButton");
const homescreen = document.querySelector(".homescreen")

startButton.addEventListener("click" , () => {
    window.location.href = "playscreen.html";
});
const explanationButton = document.getElementById("explanationButton");

const explanationModal = document.getElementById("explanationModal");
const explanationTitle = document.getElementById("explanationTitle");
const explanationText = document.getElementById("explanationText");
const explanationCloseButton = document.getElementById("explanationCloseButton");


//ゲーム説明を表示する
explanationButton.addEventListener("click", () => {

    homescreen.style.display = "none"
    explanationTitle.textContent = "ゲームの遊び方";

    explanationText.innerHTML = `
        <h3>ゲームの目標</h3>

        <p>
        このゲームでは、<strong>30分以内、かつ10日間の間に、所持金を100,000円にすること</strong>がクリア条件です。
        </p>

        <p>
        限られた時間と日数の中で、どのようにお金を増やすかを考えながらゲームを進めましょう。
        </p>


        <h3>1．まずは街を見てみよう</h3>

        <p>
        ゲームを始めると、街のマップが表示されます。
        </p>

        <p>
        街には、お金に関係するさまざまな施設があります。
        それぞれの施設でできることが違うので、施設を選んで内容を確認してみましょう。
        </p>


        <h3>2．お金を増やそう</h3>

        <p>
        ゲームを進めるためには、お金が必要です。
        </p>

        <p>
        仕事をすることでお金を手に入れられます。
        自分の能力や条件によってできる仕事が変わるので、できる仕事を探してみましょう。
        </p>

        <p>
        また、お金を増やす方法は仕事だけではありません。
        自分の状況に合わせて、どの方法を利用するか考えることが大切です。
        </p>


        <h3>3．お金を使おう</h3>

        <p>
        ゲームでは、お金を使ってさまざまな行動をすることができます。
        </p>

        <p>
        ただし、持っているお金をすべて使ってしまうと、
        その後の行動が難しくなることがあります。
        </p>

        <p>
        「今使って大丈夫か」「あとで必要にならないか」を考えながら、お金を使いましょう。
        </p>


        <h3>4．疲労度に注意しよう</h3>

        <p>
        ゲーム中に行動すると、疲労度が上がります。
        </p>

        <p>
        疲労度が高くなると、できる行動が限られることがあります。
        お金だけでなく、自分の疲労度も確認しながら行動しましょう。
        </p>

        <p>
        十分に行動したら、1日を終えて次の日へ進みます。
        </p>


        <h3>5．情報を確認しよう</h3>

        <p>
        街では、お金に関係するニュースを見ることができます。
        </p>

        <p>
        ニュースの内容によっては、ゲーム内のお金の動きに影響することがあります。
        </p>

        <p>
        行動する前に情報を確認して、これからどうするかを考えてみましょう。
        </p>


        <h3>6．計画を立てて進めよう</h3>

        <p>
        ゲームでは、何をするかを自分で決めることができます。
        </p>

        <p>
        「お金を増やすことを優先する」
        「必要な行動のためにお金を残しておく」など、
        自分なりの計画を立ててゲームを進めましょう。
        </p>


        <h3>7．目標を達成しよう</h3>

        <p>
        <strong>30分以内、10日間の間に100,000円を達成できればゲームクリアです。</strong>
        </p>

        <p>
        時間や日数を意識しながら、お金の使い方や増やし方を考えてゲームを進めましょう。
        </p>

        <p>
        大切なのは、ただお金を増やすことだけではありません。
        </p>

        <p>
        <strong>「今、自分は何をするべきか」を考えて行動することが、このゲームのポイントです。</strong>
        </p>
    `;

    explanationModal.style.display = "block";
});


//ゲーム説明を閉じる
explanationCloseButton.addEventListener("click", () => {
    explanationModal.style.display = "none";
    homescreen.style.display = ""
});