import type { Metadata } from "next";
import PolicyLayout from "@/components/PolicyLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — The Changelog",
  description: "The Changelog privacy policy. We collect minimal data and never sell your information.",
};

export default function PrivacyPage() {
  return (
    <PolicyLayout title="PRIVACY POLICY" updated="APRIL 2026">

      <p>
        The Changelog ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy
        explains what information we collect, how we use it, and your rights regarding that information.
      </p>

      <h2>1. INFORMATION WE COLLECT</h2>
      <p>We collect the minimum data necessary to provide the app:</p>
      <ul>
        <li>
          <strong>Anonymous Device ID</strong> — A randomly generated identifier unique to your app
          installation. This is not tied to your identity, Apple ID, Google account, or any personal
          information.
        </li>
        <li>
          <strong>Reading Statistics</strong> — Article read counts, session counts, and session duration.
          These are stored locally on your device and optionally synced anonymously to our servers to
          restore stats if you reinstall.
        </li>
        <li>
          <strong>Category Preferences</strong> — Which news categories you've selected. Stored locally
          on your device.
        </li>
        <li>
          <strong>Feedback Messages</strong> — If you choose to submit feedback, we receive the message
          text. No name or email is required or associated with feedback.
        </li>
      </ul>

      <h2>2. INFORMATION WE DO NOT COLLECT</h2>
      <ul>
        <li>Your name, email address, or any personally identifiable information</li>
        <li>Location data of any kind</li>
        <li>Device identifiers such as IDFA, GAID, or hardware IDs</li>
        <li>Browsing history outside the app</li>
        <li>Photos, contacts, or any other device permissions</li>
        <li>Payment information — the app is entirely free</li>
      </ul>

      <h2>3. HOW WE USE INFORMATION</h2>
      <p>The anonymous device ID is used solely to:</p>
      <ul>
        <li>Authenticate API requests (so we can serve your personalized news feed)</li>
        <li>Restore your reading statistics if you reinstall the app</li>
        <li>Prevent abuse of our API</li>
      </ul>
      <p>
        Reading statistics are used to power the in-app Stats screen. They are never used for
        advertising, profiling, or sold to third parties.
      </p>

      <h2>4. DATA STORAGE</h2>
      <p>
        Data is stored on servers hosted by DigitalOcean (serverless PostgreSQL) in the Canada. The provider maintain industry-standard security practices.
        Your anonymous device ID and aggregate stats are the only data stored server-side.
      </p>

      <h2>5. THIRD-PARTY SERVICES</h2>
      <p>The Changelog uses the following third-party services:</p>
      <ul>
        <li>
          <strong>Google AdMob</strong> — for displaying advertisements. AdMob may collect certain device
          information as outlined in Google's Privacy Policy. We use AdMob's standard configuration
          without enabling personalised advertising.{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            Google's Privacy Policy ↗
          </a>
        </li>
        <li>
          <strong>Firebase Analytics</strong> — for anonymous app usage analytics (screen views, session
          counts). No user-identifiable data is sent.{" "}
          <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer">
            Firebase Privacy ↗
          </a>
        </li>
        <li>
          <strong>Anthropic Claude API</strong> — used server-side to generate article summaries. We send
          only article text (no user data) to the API.
        </li>
      </ul>

      <h2>6. DATA RETENTION</h2>
      <p>
        Anonymous device records are retained for up to 12 months of inactivity, after which they are
        automatically deleted. You may request deletion at any time by contacting us.
      </p>

      <h2>7. YOUR RIGHTS</h2>
      <p>
        Since we collect no personally identifiable information, most traditional data rights are
        automatically satisfied. However, you may:
      </p>
      <ul>
        <li>
          Request deletion of your anonymous device record by emailing us with your device token
          (visible in app settings)
        </li>
        <li>
          Clear your local reading history at any time via Settings → Reading → Clear read history
        </li>
        <li>Delete the app at any time to remove all locally stored data</li>
      </ul>

      <h2>8. CHILDREN'S PRIVACY</h2>
      <p>
        The Changelog is not directed at children under 13. We do not knowingly collect information
        from children. If you believe a child has provided us with information, please contact us and
        we will delete it promptly.
      </p>

      <h2>9. CHANGES TO THIS POLICY</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify users of material changes
        through the app. Continued use of the app after changes constitutes acceptance of the updated
        policy.
      </p>

      <h2>10. CONTACT</h2>
      <p>
        Questions about this Privacy Policy? Contact us at:{" "}
        <a href="mailto:hello@sharvarid.dev@gmail.com">sharvarid.dev@gmail.com</a>
      </p>

    </PolicyLayout>
  );
}
