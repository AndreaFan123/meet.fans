export default function CookiePage() {
  return (
    <div className="max-w-3xl mx-auto my-12 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">服務條款</h1>

      <div className="prose prose-sm max-w-none">
        <h2 className="text-xl font-semibold mb-4">1. 條款接受</h2>
        <p className="mb-6">
          使用 meetFans
          即表示您同意受這些服務條款的約束。如果您不同意這些條款的任何部分，請勿使用我們的服務。
        </p>

        <h2 className="text-xl font-semibold mb-4">2. 用戶帳戶</h2>
        <p className="mb-6">
          您有責任維護您的帳戶憑證的機密性，並對您帳戶下發生的所有活動負責。如果發現任何未經授權使用您帳戶的情況，您必須立即通知我們。
        </p>

        <h2 className="text-xl font-semibold mb-4">3. 用戶內容</h2>
        <p className="mb-6">
          用戶保留其在 meetFans 上發布內容的所有權。通過發布內容，您授予
          meetFans 使用、複製、修改和展示該內容的全球非獨家許可。
        </p>

        <h2 className="text-xl font-semibold mb-4">4. 禁止行為</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>發布不當或冒犯性內容</li>
          <li>騷擾其他用戶</li>
          <li>冒充他人</li>
          <li>嘗試未經授權的訪問</li>
        </ul>

        <h2 className="text-xl font-semibold mb-4">5. 終止服務</h2>
        <p className="mb-6">
          我們保留在任何時候因違反這些條款或任何其他原因而終止或暫停您帳戶的權利。
        </p>

        <h2 className="text-xl font-semibold mb-4">6. 條款變更</h2>
        <p className="mb-6">
          我們可能隨時修改這些條款。在條款變更後繼續使用 meetFans
          即表示接受修改後的條款。
        </p>

        <h2 className="text-xl font-semibold mb-4">7. 聯絡我們</h2>
        <p>
          如果您對這些服務條款有任何問題，請通過 support@meetfans.com
          與我們聯繫。
        </p>
      </div>
    </div>
  );
}
