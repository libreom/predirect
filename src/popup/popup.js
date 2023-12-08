document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const inputs = document.querySelectorAll("input[type='text']");
  const instances = {
    youtube: document.getElementById("youtubeInstance"),
    twitter: document.getElementById("twitterInstance"),
    medium: document.getElementById("mediumInstance"),
    tiktok: document.getElementById("tiktokInstance"),
    quora: document.getElementById("quoraInstance"),
    fandom: document.getElementById("fandomInstance"),
    imdb: document.getElementById("imdbInstance"),
    genius: document.getElementById("geniusInstance"),
    ytmusic: document.getElementById("ytmusicInstance"),
    goodreads: document.getElementById("goodreadsInstance"),
    imgur: document.getElementById("imgurInstance"),
    pixiv: document.getElementById("pixivInstance"),
    ud: document.getElementById("udInstance"),
    ultimateGuitar: document.getElementById("ultimateGuitarInstance"),
    twitch: document.getElementById("twitchInstance"),
    instagram: document.getElementById("instagramInstance"),
    wolframAlpha: document.getElementById("wolframAlphaInstance"),
    bandcamp: document.getElementById("bandcampInstance"),
    tumblr: document.getElementById("tumblrInstance"),
    soundcloud: document.getElementById("soundcloudInstance"),
  };

  // Load saved preferences from storage
  chrome.storage.sync.get(
    ["redirectServices", "customInstances"],
    function (data) {
      let defaultRedirectServices = {
        youtube: true,
        twitter: true,
        medium: true,
        tiktok: true,
        quora: true,
        fandom: true,
        imdb: true,
        genius: true,
        ytmusic: true,
        goodreads: true,
        imgur: true,
        pixiv: true,
        ud: true,
        ultimateGuitar: true,
        twitch: true,
        instagram: true,
        wolframAlpha: true,
        bandcamp: true,
        tumblr: true,
        soundcloud: true,
      };
      let defaultCustomInstances = {
        youtubeInstance: "",
        twitterInstance: "",
        mediumInstance: "",
        tiktokInstance: "",
        quoraInstance: "",
        fandomInstance: "",
        imdbInstance: "",
        geniusInstance: "",
        ytmusicInstance: "",
        goodreadsInstance: "",
        imgurInstance: "",
        pixivInstance: "",
        udInstance: "",
        ultimateGuitarInstance: "",
        twitchInstance: "",
        instagramInstance: "",
        wolframAlphaInstance: "",
        bandcampInstance: "",
        tumblrInstance: "",
        soundcloudInstance: "",
      };
      const savedRedirectServices =
        data.redirectServices || defaultRedirectServices;
      const customInstances = data.customInstances || defaultCustomInstances;

      if (savedRedirectServices) {
        checkboxes.forEach((checkbox) => {
          checkbox.checked = savedRedirectServices[checkbox.id];
        });
      }
      if (customInstances) {
        inputs.forEach((input) => {
          input.value = customInstances[input.id];
        });
      }
    }
  );

  function saveOptions() {
    const redirectServices = {
      youtube: document.getElementById("youtube").checked,
      twitter: document.getElementById("twitter").checked,
      medium: document.getElementById("medium").checked,
      tiktok: document.getElementById("tiktok").checked,
      quora: document.getElementById("quora").checked,
      fandom: document.getElementById("fandom").checked,
      imdb: document.getElementById("imdb").checked,
      genius: document.getElementById("genius").checked,
      ytmusic: document.getElementById("ytmusic").checked,
      goodreads: document.getElementById("goodreads").checked,
      imgur: document.getElementById("imgur").checked,
      pixiv: document.getElementById("pixiv").checked,
      ud: document.getElementById("ud").checked,
      ultimateGuitar: document.getElementById("ultimateGuitar").checked,
      twitch: document.getElementById("twitch").checked,
      instagram: document.getElementById("instagram").checked,
      wolframAlpha: document.getElementById("wolframAlpha").checked,
      bandcamp: document.getElementById("bandcamp").checked,
      tumblr: document.getElementById("tumblr").checked,
      soundcloud: document.getElementById("soundcloud").checked,
    };
    const customInstances = {
      youtubeInstance: instances.youtube.value || "",
      twitterInstance: instances.twitter.value || "",
      mediumInstance: instances.medium.value || "",
      tiktokInstance: instances.tiktok.value || "",
      quoraInstance: instances.quora.value || "",
      fandomInstance: instances.fandom.value || "",
      imdbInstance: instances.imdb.value || "",
      geniusInstance: instances.genius.value || "",
      ytmusicInstance: instances.ytmusic.value || "",
      goodreadsInstance: instances.goodreads.value || "",
      imgurInstance: instances.imgur.value || "",
      pixivInstance: instances.pixiv.value || "",
      udInstance: instances.ud.value || "",
      ultimateGuitarInstance: instances.ultimateGuitar.value || "",
      twitchInstance: instances.twitch.value || "",
      instagramInstance: instances.instagram.value || "",
      wolframAlphaInstance: instances.wolframAlpha.value || "",
      bandcampInstance: instances.bandcamp.value || "",
      tumblrInstance: instances.tumblr.value || "",
      soundcloudInstance: instances.soundcloud.value || "",
    };

    // Save preferences to storage
    chrome.storage.sync.set({ redirectServices, customInstances });
    chrome.runtime.sendMessage({
      type: "updateOptions",
      redirectServices,
      customInstances,
    });
  }

  // Add change event listeners to checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", saveOptions);
  });
  inputs.forEach((input) => {
    input.addEventListener("input", saveOptions);
  });
});
