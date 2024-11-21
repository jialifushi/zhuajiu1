document.getElementById("start").addEventListener("click", function () {
  const input = document.getElementById("input").value.trim();
  const candidates = input.split("\n").filter(item => item.trim() !== "");
  if (candidates.length === 0) {
    alert("请输入候选项！");
    return;
  }
  // 随机选出一个候选项
  const randomIndex = Math.floor(Math.random() * candidates.length);
  const winner = candidates[randomIndex];
  // 显示结果并添加动画
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>🎉 恭喜：<strong>${winner}</strong></p>`;
  resultDiv.classList.add("shake");
  // 移除动画效果以便重新触发
  setTimeout(() => resultDiv.classList.remove("shake"), 500);
});
