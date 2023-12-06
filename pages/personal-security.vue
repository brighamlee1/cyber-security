<template>
    <div class="p-8">
      <h1 class="text-3xl font-medium mb-8 text-center">Personal Security</h1>

      <ul>
        <li>
          Create strong passwords and use them for all your online accounts. A strong password is at least 12 characters long and includes a mix of upper and lowercase letters, numbers, and symbols. Avoid using the
          same password for multiple accounts.
        </li>
        <li>
          Enable two-factor authentication (2FA) for all your important online accounts. 2FA adds an extra layer of security by requiring you to enter a code from your phone or another device in addition to your password.
        </li>
        <li>
          Be careful about what information you share online. Don't share personal information, such as your address, phone number, or date of birth, on social media or other public websites.
        </li>
        <li>
          Be careful about what links you click on. Phishing emails and websites can look like they're from legitimate sources, but they can be used to steal your personal information. Hover over links to see the real URL before you click on them.
        </li>
        <li>
          Keep your software up to date. This includes your operating system, web browser, and other software applications. Updates often include security patches that can protect you from known vulnerabilities.
        </li>
        <li>
          Use a reputable antivirus and anti-malware program. This can help protect your computer from viruses, spyware, and other malware.
        </li>
        <li>
          Be careful about using public Wi-Fi networks. Public Wi-Fi networks are often unsecured, which means that your data can be intercepted by others. If you must use public Wi-Fi, use a VPN to encrypt your traffic.
        </li>
      </ul>
    </div>
</template>

<script setup>
const route = useRoute();

console.log(route);

</script>

<style scoped>
ul {
  @apply flex flex-col gap-4
}
li {
  @apply list-disc
}
</style>
