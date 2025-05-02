export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto my-12 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">隱私權政策</h1>

      <div className="prose prose-sm max-w-none">
        <h2 className="text-xl font-semibold mb-4">1. 資料收集</h2>
        <p className="mb-6">
          我們收集的個人資料包括但不限於：姓名、電子郵件地址、使用者名稱及其他您自願提供的資訊。我們也會自動收集某些技術資料，如IP地址、瀏覽器類型及裝置資訊。
        </p>

        <h2 className="text-xl font-semibold mb-4">2. 資料使用</h2>
        <p className="mb-6">我們使用收集的資料來：</p>
        <ul className="list-disc pl-6 mb-6">
          <li>提供和改進我們的服務</li>
          <li>個人化您的使用體驗</li>
          <li>處理您的交易</li>
          <li>與您溝通重要通知</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">3. 資料分享</h2>
        <p className="mb-6">
          除非獲得您的明確同意，我們不會與第三方分享您的個人資料。但在某些情況下，如法律要求或保護我們的權利，我們可能需要披露某些資訊。
        </p>

        <h2 className="text-xl font-semibold mb-4">4. 資料安全</h2>
        <p className="mb-6">
          我們採用適當的技術和組織措施來保護您的個人資料，防止未經授權的訪問、更改、披露或銷毀。
        </p>

        <h2 className="text-xl font-semibold mb-4">5. Cookie 使用</h2>
        <p className="mb-6">
          我們使用 Cookie
          和類似技術來改善用戶體驗、分析網站流量並提供個人化內容。您可以通過瀏覽器設置控制
          Cookie 的使用。
        </p>

        <h2 className="text-xl font-semibold mb-4">6. 您的權利</h2>
        <p className="mb-6">您有權：</p>
        <ul className="list-disc pl-6 mb-6">
          <li>訪問您的個人資料</li>
          <li>更正不準確的資料</li>
          <li>要求刪除您的資料</li>
          <li>反對資料處理</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">7. 政策更新</h2>
        <p className="mb-6">
          我們可能會不定期更新此隱私權政策。重大變更時，我們會通過電子郵件或網站通知通知您。
        </p>

        <h2 className="text-xl font-semibold mb-4">8. 聯絡我們</h2>
        <p>
          如果您對我們的隱私權政策有任何疑問，請發送電子郵件至
          privacy@meetfans.com 與我們聯繫。
        </p>
      </div>
    </div>
  );
}
