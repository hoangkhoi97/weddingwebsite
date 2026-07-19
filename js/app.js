// ===== Configuration =====
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwMCSQABITOGJL9_A-hIzfRR0yfwYKUQ7SFayQegSieLXWB7CFrMRayVbNMLX7ep_dJyQ/exec";

// ===== Translations =====
const translations = {
  en: {
    hero: {
      names1: "Adrian & Sophia",
      names2: "Adrian & Sophia",
      dateLabel: "Wedding Date",
      weddingDate: "August 9, 2026",
      photoAlt: "Couple photo",
      countdownDays: "Days",
      countdownHours: "Hrs",
      countdownMinutes: "Min",
      countdownSeconds: "Sec",
    },
    about: {
      groomTitle: "Groom",
      brideTitle: "Bride",
      groomBio:
        "Adrian is an architect who believes great design brings people together. He loves hiking mountain trails, experimenting with film photography, and discovering hidden cafes around the world.",
      brideBio:
        "Sophia is a musician and educator who connects hearts through melody and story. She finds joy in tending her garden, writing poetry at sunrise, and exploring art in every form.",
      groomPhotoAlt: "Adrian",
      bridePhotoAlt: "Sophia",
    },
    venues: {
      ceremonyTitle: "Wedding Ceremony",
      receptionTitle: "Wedding Reception",
      churchName: "[Church Name]",
      churchAddress: "[Church Address]",
      churchTime: "August 9, 2026 | 4:00 PM",
      restaurantName: "[Restaurant Name]",
      restaurantAddress: "[Restaurant Address]",
      restaurantTime: "August 9, 2026 | 6:00 PM",
    },
    rsvp: {
      title: "Wedding Attendance Confirmation",
      nameLabel: "Full Name",
      nameError: "Please enter your name",
      guestCountLabel: "Total guests attending (including you)",
      guestCountError: "Please enter a number between 1 and 10",
      noteLabel: "Note (Optional)",
      notePlaceholder: "A message for the couple...",
      submitButton: "Submit",
      submittingText: "Submitting...",
      editButton: "Edit your response",
      editConfirmMessage:
        "You are about to edit your response. Your current response will remain visible until you submit the updated one.",
      editConfirmCancel: "Cancel",
      editConfirmContinue: "Continue",
      deadlineClosedMessage:
        "Responses are now closed. If you have questions, please contact the couple directly.",
      errorNetwork:
        "Unable to save your response. Please check your connection and try again.",
      errorServer:
        "Something went wrong. Please try again later or contact the couple directly.",
      submittedOn: "Submitted on",
    },
    footer: {
      closing: "We can't wait to celebrate with you!",
      shareLabel: "Share this invitation",
      shareSuccess: "Link copied!",
    },
  },
  vi: {
    hero: {
      tittle: "Wedding Invitation | Hoàng Khôi & Quỳnh Châm",
      names1: "Hoàng Khôi",
      names2: "& Quỳnh Châm",
      dateLabel: "Save The Date",
      weddingDate: "Ngày 09 tháng 08, 2026",
      photoAlt: "Ảnh cặp đôi",
      countdownDays: "Ngày",
      countdownHours: "Giờ",
      countdownMinutes: "Phút",
      countdownSeconds: "Giây",
    },
    about: {
      groomTitle: "Chú Rể",
      brideTitle: "Cô Dâu",
      groomBio:
        "Anh là Hoàng Khôi, 29 tuổi, sinh ra và lớn lên giữa lòng Sài Gòn thân thương. Hành trình trưởng thành đưa anh đến với Nhật Bản – nơi đã dạy anh biết cố gắng, biết trân trọng những điều giản dị. Giữa những tháng năm bộn bề, anh may mắn gặp được người khiến hành trình ấy trở nên ý nghĩa hơn. Hôm nay, anh mong được cùng em viết tiếp câu chuyện của chúng ta bằng sự yêu thương, đồng hành và cùng xây dựng một mái ấm bình yên.",
      brideBio:
        "Em là Quỳnh Châm, 28 tuổi, cô gái sinh ra và lớn lên trên mảnh đất Hưng Yên thân thương. Em mang theo những ước mơ và niềm tin đến Nhật Bản – nơi đã dạy em sự mạnh mẽ, kiên nhẫn và biết trân trọng những yêu thương. Giữa hành trình ấy, em gặp được người khiến trái tim muốn bình yên, muốn cùng nhau sẻ chia. Hôm nay, em hạnh phúc khi được cùng anh viết tiếp câu chuyện của chúng ta bằng tình yêu và sự đồng hành.",
      groomPhotoAlt: "Chú Rể",
      bridePhotoAlt: "Cô Dâu",
    },
    venues: {
      ceremonyTitle: "Lễ Cưới",
      receptionTitle: "Tiệc Cưới",
      churchName: "Narashino Catholic Church",
      churchAddress: "1385-2 Nagasakucho, Hanamigawa Ward, Chiba, 262-0044",
      churchTime: "Ngày 09 tháng 08, 2026 | 16:00",
      restaurantName: "Ngon Quán",
      restaurantAddress: "1 Chome-1-7 Yachiyodaiminami, Yachiyo, Chiba 276-0033",
      restaurantTime: "Ngày 09 tháng 08, 2026 | 18:00",
    },
    rsvp: {
      title: "Xác Nhận Tham Dự",
      nameLabel: "Họ và Tên",
      nameError: "Vui lòng nhập tên của bạn",
      guestCountLabel: "Tổng số khách tham dự (bao gồm bạn)",
      guestCountError: "Vui lòng nhập số từ 1 đến 10",
      noteLabel: "Lời nhắn",
      notePlaceholder: "Đôi lời nhắn nhủ cho chúng mình, nhớ hát tặng chúng mình một bài nhé!",
      submitButton: "Gửi",
      submittingText: "Đang gửi...",
      editButton: "Sửa thông tin",
      editConfirmMessage:
        "Bạn sắp sửa thông tin xác nhận. Thông tin hiện tại sẽ vẫn hiển thị cho đến khi bạn gửi thông tin mới.",
      editConfirmCancel: "Hủy",
      editConfirmContinue: "Tiếp tục",
      deadlineClosedMessage:
        "Đã hết hạn xác nhận tham dự. Nếu bạn có câu hỏi, vui lòng liên hệ trực tiếp với cặp đôi.",
      errorNetwork:
        "Không thể gửi xác nhận. Vui lòng kiểm tra kết nối và thử lại.",
      errorServer:
        "Đã xảy ra lỗi. Vui lòng thử lại sau hoặc liên hệ trực tiếp với cặp đôi.",
      submittedOn: "Đã gửi vào",
    },
    footer: {
      closing: "Niềm vui của chúng mình trọn vẹn hơn khi có bạn hiện diện!",
      shareLabel: "Chia sẻ lời mời!",
      shareSuccess: "Đã sao chép liên kết!",
    },
  },
  ja: {
    hero: {
      tittle: "結婚式のご招待 | コイ & チャム",
      names1: "Hoang Khoi",
      names2: "& Quynh Cham",
      dateLabel: "挙式日",
      weddingDate: "2026年8月9日",
      photoAlt: "カップルの写真",
      countdownDays: "日",
      countdownHours: "時間",
      countdownMinutes: "分",
      countdownSeconds: "秒",
    },
    about: {
      groomTitle: "新郎",
      brideTitle: "新婦",
      groomBio:
        "私はコイ、29歳です。生まれ育った場所は、愛する故郷・ホーチミンです。人生の歩みの中で、私は日本という新たな場所へと導かれ、そこでの経験を通じて、努力することの大切さや、日々の何気ない幸せを大切にする心を学びました。慌ただしく過ぎる日々の中で、私は幸運にも、この人生の旅をより意味あるものにしてくれる大切な人に出会うことができました。今日という特別な日に、愛と支え合う気持ちを大切にしながら、あなたと共に歩む新しい物語を紡ぎ、温かく穏やかな家庭を築いていきたいと思います。",
      brideBio:
        "私はチャム、28歳です。愛する故郷、フンイエンの地で生まれ育ちました。夢と希望を胸に日本へ渡り、そこで過ごした日々は、私に強さや忍耐する心、そして人との温かなつながりを大切にすることを教えてくれました。そんな人生の旅の途中で、心から安らげる場所のような存在となり、共に歩み、支え合いたいと思える大切な人に出会いました。今日という特別な日に、あなたと共に愛と支え合う気持ちを大切にしながら、二人の新しい物語を紡いでいけることを幸せに思います。",
      groomPhotoAlt: "新郎",
      bridePhotoAlt: "新婦",
    },
    venues: {
      ceremonyTitle: "挙式",
      receptionTitle: "披露宴",
      churchName: "カトリック習志野教会",
      churchAddress: "〒262-0044 千葉県千葉市花見川区長作町１３８５−２",
      churchTime: "2026年8月9日 | 16:00",
      restaurantName: "ゴン クアン ベトナムレストラン",
      restaurantAddress: "〒276-0033 千葉県八千代市八千代台南１丁目１−７",
      restaurantTime: "2026年8月9日 | 18:00",
    },
    rsvp: {
      title: "ご出席確認",
      nameLabel: "お名前",
      nameError: "お名前を入力してください",
      guestCountLabel: "出席者総数（あなたを含む）",
      guestCountError: "1から10の数字を入力してください",
      noteLabel: "メッセージ（任意）",
      notePlaceholder: "カップルへのメッセージ...",
      submitButton: "送信",
      submittingText: "送信中...",
      editButton: "情報を編集",
      editConfirmMessage:
        "返信情報を編集しようとしています。現在の情報は、新しい情報を送信するまで表示されたままになります。",
      editConfirmCancel: "キャンセル",
      editConfirmContinue: "続行",
      deadlineClosedMessage:
        "お返事の締切が過ぎました。ご質問がある場合は、カップルに直接ご連絡ください。",
      errorNetwork:
        "返信の送信に失敗しました。接続を確認して、もう一度お試しください。",
      errorServer:
        "エラーが発生しました。後でもう一度お試しになるか、カップルに直接ご連絡ください。",
      submittedOn: "送信日",
    },
    footer: {
      closing: "お会いできるのを楽しみにしています！",
      shareLabel: "招待状をシェア",
      shareSuccess: "リンクをコピーしました！",
    },
  },
};

// ===== Utility: Nested Object Access =====
function getNestedValue(obj, path) {
  return path.split(".").reduce((current, key) => current?.[key], obj);
}

// ===== Language System =====
function getStoredLanguage() {
  try {
    return localStorage.getItem("weddingLang");
  } catch (e) {
    return null;
  }
}

function storeLanguage(lang) {
  try {
    localStorage.setItem("weddingLang", lang);
  } catch (e) {
    console.warn("Could not store language preference:", e);
  }
}

function detectBrowserLanguage() {
  const navLang = navigator.language || navigator.userLanguage;
  if (navLang && navLang.startsWith("ja")) {
    return "ja";
  }
  return "vi";
}

function getCurrentLanguage() {
  const stored = getStoredLanguage();
  if (stored && translations[stored]) return stored;
  return detectBrowserLanguage();
}

function switchLanguage(lang) {
  if (!translations[lang]) return;

  document.documentElement.lang = lang;
  storeLanguage(lang);

  // Update all data-i18n-key elements
  document.querySelectorAll("[data-i18n-key]").forEach((el) => {
    const key = el.dataset.i18nKey;
    const value = getNestedValue(translations[lang], key);
    if (value !== undefined) {
      el.textContent = value;
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-key-placeholder]").forEach((el) => {
    const key = el.dataset.i18nKeyPlaceholder;
    const value = getNestedValue(translations[lang], key);
    if (value !== undefined) {
      el.placeholder = value;
    }
  });

  // Update alt text
  document.querySelectorAll("[data-i18n-key-alt]").forEach((el) => {
    const key = el.dataset.i18nKeyAlt;
    const value = getNestedValue(translations[lang], key);
    if (value !== undefined) {
      el.alt = value;
    }
  });

  // Update language switcher UI
  document.querySelectorAll(".language-switcher button").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update RSVP read-only view if visible
  const existingData = getStoredRsvp();
  const readonlyView = document.querySelector(".rsvp-readonly");
  if (
    existingData &&
    readonlyView &&
    !readonlyView.classList.contains("hidden")
  ) {
    showReadOnly(existingData);
  }
}

function initLanguage() {
  const lang = getCurrentLanguage();
  switchLanguage(lang);

  document.querySelectorAll(".language-switcher button").forEach((btn) => {
    btn.addEventListener("click", () => switchLanguage(btn.dataset.lang));
  });
}

// ===== RSVP Form =====
function initRsvp() {
  const form = document.querySelector(".rsvp-form");
  const section = document.querySelector(".rsvp");

  if (!form || !section) return;

  // Check deadline
  const deadlineStr = section.dataset.rsvpDeadline;
  if (deadlineStr) {
    const deadline = new Date(deadlineStr);
    if (isNaN(deadline.getTime())) {
      console.warn("Invalid RSVP deadline format:", deadlineStr);
    } else if (new Date() > deadline) {
      showClosedView();
      return;
    }
  }

  // Check for existing RSVP with brief loading state
  showLoading();
  const existingData = getStoredRsvp();

  setTimeout(() => {
    if (existingData) {
      showReadOnly(existingData);
    } else {
      showForm();
    }
  }, 100);

  // Inline validation
  const nameInput = form.querySelector("#rsvp-name");
  const guestsInput = form.querySelector("#rsvp-guests");

  if (nameInput) {
    nameInput.addEventListener("blur", () => validateField(nameInput, "name"));
  }
  if (guestsInput) {
    guestsInput.addEventListener("blur", () =>
      validateField(guestsInput, "guests"),
    );
  }

  // Form submission
  form.addEventListener("submit", handleSubmit);

  // Edit button
  const editBtn = document.querySelector(".edit-btn");
  if (editBtn) {
    editBtn.addEventListener("click", handleEdit);
  }
}

function validateField(input, type) {
  const lang = getCurrentLanguage();
  const errorEl = input.parentElement.querySelector(".error");
  if (!errorEl) return true;

  let errorKey = null;

  if (type === "name") {
    if (!input.value.trim()) {
      errorKey = "rsvp.nameError";
    }
  } else if (type === "guests") {
    const val = parseInt(input.value);
    if (isNaN(val) || val < 1 || val > 10) {
      errorKey = "rsvp.guestCountError";
    }
  }

  if (errorKey) {
    const message = getNestedValue(translations[lang], errorKey);
    errorEl.textContent = message || "";
    input.setAttribute("aria-invalid", "true");
    return false;
  } else {
    errorEl.textContent = "";
    input.removeAttribute("aria-invalid");
    return true;
  }
}

function validateForm() {
  const nameInput = document.querySelector("#rsvp-name");
  const guestsInput = document.querySelector("#rsvp-guests");
  const nameValid = nameInput ? validateField(nameInput, "name") : false;
  const guestsValid = guestsInput ? validateField(guestsInput, "guests") : true;
  return nameValid && guestsValid;
}

async function handleSubmit(e) {
  e.preventDefault();

  // Honeypot check
  const honeypot = document.querySelector(".honeypot");
  if (honeypot && honeypot.value) {
    return;
  }

  if (!validateForm()) return;

  const form = e.target;
  const submitBtn = form.querySelector(".submit-btn");
  const errorBanner = form.querySelector(".error-banner");
  const lang = getCurrentLanguage();

  // Disable button, show loading
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.dataset.originalText = submitBtn.textContent;
    submitBtn.textContent = getNestedValue(
      translations[lang],
      "rsvp.submittingText",
    );
  }
  if (errorBanner) {
    errorBanner.classList.add("hidden");
  }

  // Gather data
  const nameInput = form.querySelector("#rsvp-name");
  const name = nameInput ? nameInput.value.trim() : "";
  const guestsInput = form.querySelector("#rsvp-guests");
  const guestCount = guestsInput ? parseInt(guestsInput.value) : 1;
  const noteInput = form.querySelector("#rsvp-note");
  const note = noteInput ? noteInput.value.trim() : "";
  // Reuse existing rsvpId and createdAt if editing, otherwise generate new
  const existing = getStoredRsvp();
  const rsvpId = existing?.rsvpId || crypto.randomUUID?.() || Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
  const createdAt = existing?.createdAt || new Date().toISOString();
  const updatedAt = new Date().toISOString();

  // Network timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        rsvpId,
        name,
        guestCount,
        note,
        createdAt,
        updatedAt,
        website: "",
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.error || "Server error");
    }

    // Save to localStorage
    try {
      localStorage.setItem(
        "weddingRsvp",
        JSON.stringify({
          rsvpId,
          name,
          guestCount,
          note,
          createdAt,
          updatedAt,
        }),
      );
    } catch (e) {
      console.warn("localStorage unavailable:", e);
    }

    showReadOnly({
      rsvpId,
      name,
      guestCount,
      note,
      updatedAt,
    });
  } catch (error) {
    clearTimeout(timeoutId);
    console.error("RSVP submission failed:", error);

    let errorKey = "rsvp.errorNetwork";
    if (error.name === "AbortError") {
      errorKey = "rsvp.errorNetwork";
    } else if (
      error.message &&
      (error.message.includes("Server error") ||
        error.message.includes("Rate limit"))
    ) {
      errorKey = "rsvp.errorServer";
    }

    const message = getNestedValue(translations[lang], errorKey);
    if (errorBanner) {
      errorBanner.textContent = message;
      errorBanner.classList.remove("hidden");
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent =
        submitBtn.dataset.originalText ||
        getNestedValue(translations[lang], "rsvp.submitButton");
    }
  }
}

// ===== RSVP View Management =====
function showForm() {
  const form = document.querySelector(".rsvp-form");
  const readonlyView = document.querySelector(".rsvp-readonly");
  const closedView = document.querySelector(".rsvp-closed");
  const loadingView = document.querySelector(".rsvp-loading");

  if (form) form.classList.remove("hidden");
  if (readonlyView) readonlyView.classList.add("hidden");
  if (closedView) closedView.classList.add("hidden");
  if (loadingView) loadingView.classList.add("hidden");

  // Clear error messages
  if (form) {
    form.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
    form
      .querySelectorAll("[aria-invalid]")
      .forEach((el) => el.removeAttribute("aria-invalid"));

    // Reset submit button text
    const submitBtn = form.querySelector(".submit-btn");
    if (submitBtn) {
      const lang = getCurrentLanguage();
      submitBtn.textContent = getNestedValue(translations[lang], "rsvp.submitButton");
      submitBtn.disabled = false;
    }
  }
}

function showReadOnly(data) {
  const form = document.querySelector(".rsvp-form");
  const readonlyView = document.querySelector(".rsvp-readonly");
  const closedView = document.querySelector(".rsvp-closed");
  const loadingView = document.querySelector(".rsvp-loading");

  if (form) form.classList.add("hidden");
  if (readonlyView) readonlyView.classList.remove("hidden");
  if (closedView) closedView.classList.add("hidden");
  if (loadingView) loadingView.classList.add("hidden");

  const lang = getCurrentLanguage();
  const card = readonlyView.querySelector(".response-card");
  if (!card) return;

  const nameEl = card.querySelector(".response-name");
  if (nameEl) {
    nameEl.textContent = data.name;
  }

  const guestsEl = card.querySelector(".response-guests");
  if (guestsEl) {
    if (data.guestCount) {
      guestsEl.textContent = `${getNestedValue(translations[lang], "rsvp.guestCountLabel")}: ${data.guestCount}`;
      guestsEl.style.display = "block";
    } else {
      guestsEl.style.display = "none";
    }
  }

  const noteEl = card.querySelector(".response-note");
  if (noteEl) {
    if (data.note) {
      noteEl.textContent = `${getNestedValue(translations[lang], "rsvp.noteLabel")}: ${data.note}`;
      noteEl.style.display = "block";
    } else {
      noteEl.style.display = "none";
    }
  }

  const dateEl = card.querySelector(".response-date");
  if (dateEl) {
    const date = new Date(data.updatedAt);
    const dateStr = date.toLocaleDateString(lang === "vi" ? "vi-VN" : "ja-JP");
    dateEl.textContent = `${getNestedValue(translations[lang], "rsvp.submittedOn")} ${dateStr}`;
  }
}

function showClosedView() {
  const form = document.querySelector(".rsvp-form");
  const readonlyView = document.querySelector(".rsvp-readonly");
  const closedView = document.querySelector(".rsvp-closed");
  const loadingView = document.querySelector(".rsvp-loading");

  if (form) form.classList.add("hidden");
  if (readonlyView) readonlyView.classList.add("hidden");
  if (closedView) closedView.classList.remove("hidden");
  if (loadingView) loadingView.classList.add("hidden");
}

function showLoading() {
  const form = document.querySelector(".rsvp-form");
  const readonlyView = document.querySelector(".rsvp-readonly");
  const closedView = document.querySelector(".rsvp-closed");
  const loadingView = document.querySelector(".rsvp-loading");

  if (form) form.classList.add("hidden");
  if (readonlyView) readonlyView.classList.add("hidden");
  if (closedView) closedView.classList.add("hidden");
  if (loadingView) loadingView.classList.remove("hidden");
}

function getStoredRsvp() {
  try {
    const data = localStorage.getItem("weddingRsvp");
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
}

function handleEdit() {
  const lang = getCurrentLanguage();
  const message = getNestedValue(translations[lang], "rsvp.editConfirmMessage");

  showConfirmModal(message, () => {
    const data = getStoredRsvp();
    if (data) {
      const form = document.querySelector(".rsvp-form");
      const nameInput = form.querySelector("#rsvp-name");
      const guestsInput = form.querySelector("#rsvp-guests");
      const noteInput = form.querySelector("#rsvp-note");

      if (nameInput) nameInput.value = data.name || "";
      if (guestsInput) guestsInput.value = data.guestCount || 1;
      if (noteInput) noteInput.value = data.note || "";

      showForm();
    }
  });
}

function showConfirmModal(message, onConfirm) {
  const overlay = document.getElementById("confirm-modal");
  const messageEl = overlay.querySelector(".modal-message");
  const cancelBtn = overlay.querySelector(".modal-btn-cancel");
  const confirmBtn = overlay.querySelector(".modal-btn-confirm");

  messageEl.textContent = message;
  overlay.classList.add("active");

  function cleanup() {
    overlay.classList.remove("active");
    cancelBtn.removeEventListener("click", onCancel);
    confirmBtn.removeEventListener("click", onConfirmClick);
    overlay.removeEventListener("click", onOverlayClick);
    document.removeEventListener("keydown", onKeydown);
  }

  function onCancel() {
    cleanup();
  }

  function onConfirmClick() {
    cleanup();
    onConfirm();
  }

  function onOverlayClick(e) {
    if (e.target === overlay) cleanup();
  }

  function onKeydown(e) {
    if (e.key === "Escape") cleanup();
  }

  cancelBtn.addEventListener("click", onCancel);
  confirmBtn.addEventListener("click", onConfirmClick);
  overlay.addEventListener("click", onOverlayClick);
  document.addEventListener("keydown", onKeydown);
}

// ===== Countdown Timer =====
function initCountdown() {
  const countdownEl = document.querySelector(".countdown");
  if (!countdownEl) return;

  const weddingDateStr = countdownEl.dataset.weddingDate;
  if (!weddingDateStr) return;

  const weddingDate = new Date(weddingDateStr).getTime();
  const daysEl = document.getElementById("countdown-days");
  const hoursEl = document.getElementById("countdown-hours");
  const minutesEl = document.getElementById("countdown-minutes");
  const secondsEl = document.getElementById("countdown-seconds");

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minutesEl.textContent = "00";
      secondsEl.textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ===== Scroll Animations =====
function initScrollAnimations() {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  sections.forEach((section) => observer.observe(section));
}

// ===== Share Button =====
function initShareButton() {
  const shareBtn = document.querySelector(".share-btn");
  if (!shareBtn) return;

  shareBtn.addEventListener("click", async () => {
    const lang = getCurrentLanguage();
    const shareUrl = window.location.href;
    const shareTitle = document.title;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: getNestedValue(translations[lang], "footer.shareLabel"),
          url: shareUrl,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          copyToClipboard(shareUrl, lang);
        }
      }
    } else {
      copyToClipboard(shareUrl, lang);
    }
  });
}

function copyToClipboard(text, lang) {
  const successMsg = getNestedValue(translations[lang], "footer.shareSuccess");
  const btn = document.querySelector(".share-btn");

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showCopiedFeedback(btn, successMsg);
      })
      .catch(() => {
        fallbackCopy(text, successMsg);
      });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand("copy");
    const btn = document.querySelector(".share-btn");
    showCopiedFeedback(btn, successMsg);
  } catch (err) {
    console.error("Copy failed:", err);
  }

  document.body.removeChild(textarea);
}

function showCopiedFeedback(btn, successMsg) {
  if (!btn) return;
  const originalText = btn.textContent;
  btn.textContent = successMsg;
  btn.classList.add("copied");
  setTimeout(() => {
    btn.textContent = originalText;
    btn.classList.remove("copied");
  }, 2000);
}

// ===== Initialization =====
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initCountdown();
  initScrollAnimations();
  initRsvp();
  initShareButton();
});
