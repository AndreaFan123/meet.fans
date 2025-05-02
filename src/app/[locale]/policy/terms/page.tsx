export default function TermePage() {
  return (
    <div className="max-w-3xl mx-auto my-12 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">服務條款</h1>

      <div className="prose prose-sm max-w-none">
        <h2 className="text-xl font-semibold mb-4">1. 服務使用條款</h2>
        <p className="mb-6">
          歡迎使用 meetFans
          平台。使用本服務即表示您同意遵守以下條款和條件。如果您不同意這些條款，請停止使用我們的服務。
        </p>

        <h2 className="text-xl font-semibold mb-4">2. 帳戶註冊與安全</h2>
        <p className="mb-6">
          您必須提供準確和完整的註冊信息。您有責任保護帳戶密碼的安全，並對所有使用您帳戶進行的活動負責。如發現任何未經授權的使用，請立即通知我們。
        </p>

        <h2 className="text-xl font-semibold mb-4">3. 用戶行為準則</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>尊重其他用戶的權利和隱私</li>
          <li>不得發布違法、有害或冒犯性的內容</li>
          <li>不得從事任何形式的騷擾或欺凌行為</li>
          <li>不得進行未經授權的商業活動</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">4. 智慧財產權</h2>
        <p className="mb-6">
          平台上的所有內容，包括但不限於文字、圖像、標誌和軟體，均受智慧財產權法律保護。未經明確許可，不得複製、修改或分發這些內容。
        </p>

        <h2 className="text-xl font-semibold mb-4">5. 活動組織與參與</h2>
        <p className="mb-6">
          活動組織者必須遵守當地法律法規，並確保活動安全。參與者需自行承擔參加活動的風險，平台不對活動中可能發生的意外負責。
        </p>

        <h2 className="text-xl font-semibold mb-4">6. 付款和退款政策</h2>
        <p className="mb-6">
          所有通過平台進行的付款必須使用我們認可的支付方式。退款政策將根據具體情況和活動規定執行。
        </p>

        <h2 className="text-xl font-semibold mb-4">7. 服務變更與終止</h2>
        <p className="mb-6">
          我們保留隨時修改或終止服務的權利，並可能在必要時暫停或永久關閉用戶帳戶。
        </p>

        <h2 className="text-xl font-semibold mb-4">8. 免責聲明</h2>
        <p className="mb-6">
          本平台不對用戶之間的糾紛或損失承擔責任。我們不保證服務不會中斷或出現錯誤。
        </p>

        <h2 className="text-xl font-semibold mb-4">9. 聯絡方式</h2>
        <p>
          如有任何問題或疑慮，請通過 terms@meetfans.com
          與我們聯繫。我們將在收到您的訊息後儘快回覆。
        </p>
      </div>
    </div>
  );
}
