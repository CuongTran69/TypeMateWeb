// TypeMate Web Demo & Interactivity
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("demo-search-input");
  const demoList = document.getElementById("demo-list");

  const sampleSnippets = [
    { trigger: ";chao", preview: "Dạ em chào anh/chị ạ! Em có thể hỗ trợ gì cho mình hôm nay ạ?" },
    { trigger: ";bank", preview: "Số tài khoản: 1903xxxxxx - Techcombank - Chủ TK: TRAN QUOC CUONG" },
    { trigger: ";hotline", preview: "Hotline hỗ trợ kỹ thuật 24/7: 1900 xxxx (Nhánh 1)" },
    { trigger: ";ship", preview: "Đơn hàng của anh/chị đã được bàn giao cho đơn vị vận chuyển ViettelPost." },
    { trigger: ";camon", preview: "Cảm ơn quý khách đã tin tưởng và ủng hộ sản phẩm của chúng tôi!" },
    { trigger: ";mail", preview: "Trân trọng,\nĐội ngũ Hỗ trợ Khách hàng - TypeMate" }
  ];

  if (searchInput && demoList) {
    searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      demoList.innerHTML = "";

      const filtered = sampleSnippets.filter(
        (s) => s.trigger.toLowerCase().includes(query) || s.preview.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        demoList.innerHTML = `
          <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.9rem;">
            Không tìm thấy mẫu câu nào khớp với "${e.target.value}". Bạn có thể tạo mẫu câu mới bất kỳ lúc nào!
          </div>
        `;
        return;
      }

      filtered.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = `demo-snippet-item ${index === 0 ? "active" : ""}`;
        div.innerHTML = `
          <div class="demo-snippet-info">
            <span class="demo-trigger">${item.trigger}</span>
            <span class="demo-preview">${item.preview}</span>
          </div>
          <span class="hotkey-badge">${index === 0 ? "Enter để Copy" : "Copy"}</span>
        `;
        div.addEventListener("click", () => {
          navigator.clipboard.writeText(item.preview).then(() => {
            alert(`Đã sao chép vào bộ nhớ tạm: "${item.preview}"`);
          }).catch(() => {});
        });
        demoList.appendChild(div);
      });
    });
  }
});

