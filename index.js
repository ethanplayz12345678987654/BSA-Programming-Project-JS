document.body.innerHTML = `
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background: #f2f7f1;
      color: #173b1a;
      padding: 40px;
    }

    h1 {
      color: #236b2a;
    }

    .buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
      margin: 25px 0;
    }

    button {
      background: #2e7d32;
      color: white;
      border: none;
      padding: 12px 18px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 16px;
    }

    button:hover {
      background: #1b5e20;
    }

    #factBox {
      max-width: 600px;
      margin: 25px auto;
      padding: 20px;
      background: white;
      border-radius: 10px;
      box-shadow: 0 3px 10px #bbb;
      font-size: 18px;
      min-height: 40px;
    }
  </style>

  <h1>Programming Merit Badge</h1>
  <p>Click a button to learn more about BSA.</p>

  <div class="buttons">
    <button id="historyButton">HI</button>
    <button id="missionButton">BYE</button>
  </div>

  <div id="factBox"></div>
`;

const facts = {
  history: "HalloAlbanian: Përshëndetje Arabic: مرحبا (marhaban) Chinese (Mandarin): 你好 (nǐ hǎo) French: Bonjour German: Hallo Italian: Ciao Japanese: こんにちは (konnichiwa) Korean: 안녕하세요 (annyeonghaseyo)",
  mission: "BYE :0 I DID THIS IN THE MIDDLE OF THE NIGHT"
};

const factBox = document.getElementById("factBox");

document.getElementById("historyButton").addEventListener("click", () => {
  factBox.textContent = facts.history;
});

document.getElementById("missionButton").addEventListener("click", () => {
  factBox.textContent = facts.mission;
});
