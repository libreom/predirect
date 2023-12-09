const permissionsToRequest = {
  origins: [
    "*://*.youtube.com/*",
    "*://*.youtube-nocookie.com/*",
    "*://*.twitter.com/*",
    "*://*.x.com/*",
    "*://*.medium.com/*",
    "*://*.tiktok.com/*",
    "*://*.quora.com/*",
    "*://*.fandom.com/*",
    "*://*.imdb.com/*",
    "*://*.genius.com/*",
    "*://*.goodreads.com/*",
    "*://*.imgur.com/*",
    "*://*.pixiv.net/*",
    "*://*.urbandictionary.com/*",
    "*://*.ultimate-guitar.com/*",
    "*://*.twitch.tv/*",
    "*://*.instagram.com/*",
    "*://*.wolframalpha.com/*",
    "*://*.bandcamp.com/*",
    "*://*.tumblr.com/*",
    "*://*.soundcloud.com/*",
  ],
};
async function requestPermissions() {
  function onResponse(response) {
    if (response) {
      console.log("Permission was granted");
      permissionStatus.textContent =
        "Permissions granted and functionality will work normally.";
      permissionStatus.style.color = "green";
    } else {
      console.log("Permission was refused");
      permissionStatus.textContent =
        "Permissions refused and functionality will NOT work ";
      permissionStatus.style.color = "red";
    }
    return browser.permissions.getAll();
  }

  const response = await browser.permissions.request(permissionsToRequest);
  const currentPermissions = await onResponse(response);

  console.log(`Current permissions:`, currentPermissions);
}
document
  .querySelector("#request")
  .addEventListener("click", requestPermissions);
