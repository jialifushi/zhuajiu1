// 使用输入抓阄
document.getElementById("start").addEventListener("click", function () {
  const input = document.getElementById("input").value.trim();
  const candidates = input.split("\n").filter(item => item.trim() !== "");
  if (candidates.length === 0) {
    alert("请输入候选项！");
    return;
  }
  pickRandom(candidates);
});

// 使用配置文件抓阄
document.getElementById("start-config").addEventListener("click", function () {
  fetch("/config.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("加载配置文件失败！");
      }
      return response.json();
    })
    .then(data => {
      const candidates = data.candidates || [];
      if (candidates.length === 0) {
        alert("配置文件中没有可用的候选项！");
        return;
      }
      pickRandom(candidates);
    })
    .catch(error => {
      console.error(error);
      alert("抓阄失败，请检查配置文件！");
    });
});

// 随机选择候选项并显示结果
function pickRandom(candidates) {
  const randomIndex = Math.floor(Math.random() * candidates.length);
  const winner = candidates[randomIndex];
  const resultDiv = document.getElementById("result");

  // 显示结果并添加动画
  resultDiv.innerHTML = `<p>🎉 恭喜：<strong>${winner}</strong></p>`;
  resultDiv.classList.add("shake");

  // 移除动画效果以便重新触发
  setTimeout(() => resultDiv.classList.remove("shake"), 500);
}
