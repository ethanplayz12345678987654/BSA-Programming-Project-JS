```javascript
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

  <h1>🌲 BSA Facts</h1>
  <p>Click a button to learn more about BSA.</p>

  <div class="buttons">
    <button id="historyButton">History</button>
    <button id="missionButton">Mission</button>
    <button id="scoutingButton">Scouting</button>
    <button id="valuesButton">Values</button>
  </div>

  <div id="factBox">Select a category to see a fact.</div>
`;

const facts = {
  history: "BSA was founded in the United States in 1910.",
  mission: "BSA helps young people build character, leadership, and citizenship skills.",
  scouting: "Scouting encourages outdoor activities, teamwork, service, and personal growth.",
  values: "Scouting values include being trustworthy, loyal, helpful, friendly, courteous, kind, and brave."
};

const factBox = document.getElementById("factBox");

document.getElementById("historyButton").addEventListener("click", () => {
  factBox.textContent = facts.history;
});

document.getElementById("missionButton").addEventListener("click", () => {
  factBox.textContent = facts.mission;
});

document.getElementById("scoutingButton").addEventListener("click", () => {
  factBox.textContent = facts.scouting;
});

document.getElementById("valuesButton").addEventListener("click", () => {
  factBox.textContent = facts.values;
});
```

Save it as **`script.js`** and connect it to an HTML file with:

```html
<script src="script.js"></script>
```
