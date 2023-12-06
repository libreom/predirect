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
  pixiv: "",
  udInstance: "",
};
const youtubeInstances = [
  "anontube.lvkaszus.pl",
  "inv.citw.lgbt",
  "inv.in.projectsegfau.lt",
  "inv.tux.pizza",
  "inv.us.projectsegfau.lt",
  "invidious.asir.dev",
  "invidious.fdn.fr",
  "invidious.io.lol",
  "invidious.lunar.icu",
  "invidious.nerdvpn.de",
  "invidious.no-logs.com",
  "invidious.private.coffee",
  "invidious.protokolla.fi",
  "invidious.slipfox.xyz",
  "iv.datura.network",
  "iv.ggtyler.dev",
  "iv.melmac.space",
  "iv.nboeck.de",
  "vid.priv.au",
  "vid.puffyan.us",
  "yewtu.be",
  "yt.artemislena.eu",
  "yt.cdaut.de",
  "yt.drgnz.club",
  "piped.lunar.icu",
  "piped.privacydev.net",
  "piped.smnz.de",
  "piped.adminforge.de",
  "piped.hostux.net",
];
const twitterInstances = [
  "n.biendeo.com",
  "n.opnxng.com",
  "n.populas.no",
  "nitter.1d4.us",
  "nitter.adminforge.de",
  "nitter.catsarch.com",
  "nitter.cz",
  "nitter.dafriser.be",
  "nitter.esmailelbob.xyz",
  "nitter.in.projectsegfau.lt",
  "nitter.io.lol",
  "nitter.ktachibana.party",
  "nitter.moomoo.me",
  "nitter.net",
  "nitter.no-logs.com",
  "nitter.nohost.network",
  "nitter.oksocial.net",
  "nitter.poast.org",
  "nitter.privacydev.net",
  "nitter.projectsegfau.lt",
  "nitter.salastil.com",
  "nitter.soopy.moe",
  "nitter.tinfoil-hat.net",
  "nitter.unixfox.eu",
  "nitter.woodland.cafe",
];
const mediumInstances = [
  "scribe.rip",
  "scribe.citizen4.eu",
  "scribe.bus-hit.me",
  "sc.vern.cc",
  "m.opnxng.com",
];
const tiktokInstances = [
  "proxitok.pabloferreiro.es",
  "proxitok.pussthecat.org",
  "tok.habedieeh.re",
  "tok.artemislena.eu",
  "tok.adminforge.de",
  "proxitok.lunar.icu",
  "proxitok.privacy.com.de",
];
const quoraInstances = [
  "quetre.iket.me",
  "quetre.pussthecat.org",
  "quetre.esmailelbob.xyz",
  "quetre.privacydev.net",
  "quetre.catsarch.com",
  "quetre.frontendfriendly.xyz",
];
const fandomInstances = [
  "breezewiki.com",
  "antifandom.com",
  "breezewiki.pussthecat.org",
  "bw.hamstro.dev",
  "bw.projectsegfau.lt",
  "breeze.hostux.net",
  "bw.artemislena.eu",
  "nerd.whatever.social",
  "breezewiki.frontendfriendly.xyz",
  "breeze.nohost.network",
  "z.opnxng.com",
  "breezewiki.hyperreal.coffee",
  "breezewiki.catsarch.com",
  "breeze.mint.lgbt",
  "breezewiki.woodland.cafe",
];
const imdbInstances = [
  "libremdb.pussthecat.org",
  "libremdb.esmailelbob.xyz",
  "libremdb.iket.me",
  "binge.whatever.social",
  "libremdb.lunar.icu",
  "libremdb.catsarch.com",
  "libremdb.frontendfriendly.xyz",
];
const geniusInstances = [
  "dumb.privacydev.net",
  "dm.vern.cc",
  "sing.whatever.social",
  "dumb.lunar.icu",
  "dumb.esmailelbob.xyz",
];
const ytmusicInstances = [
  "beatbump.io",
  "bb.vern.cc",
  "bb.ggtyler.dev",
  "hyperpipe.surge.sh",
  "hyperpipe.esmailelbob.xyz",
  "listen.whatever.social",
  "music.adminforge.de",
  "music.pfcd.me",
  "listen.whateveritworks.org",
  "hyperpipe.frontendfriendly.xyz",
  "hyperpipe.drgns.space",
  "hyperpipe.projectsegfau.lt",
  "hp.ggtyler.dev",
  "hyperpipe.lunar.icu",
];
const goodreadsInstances = [
  "biblioreads.eu.org",
  "biblioreads.vercel.app",
  "biblioreads.mooo.com",
  "bl.vern.cc",
  "biblioreads.lunar.icu",
  "read.whateveritworks.org",
  "biblioreads.privacyfucking.rocks",
  "read.seitan-ayoub.lol",
];
const imgurInstances = [
  "rimgo.pussthecat.org",
  "rimgo.bus-hit.me",
  "rim.odyssey346.dev",
  "rimgo.hostux.net",
  "rimgo.lunar.icu",
  "rimgo.kling.gg",
  "rimgo.projectsegfau.lt",
  "rimgo.catsarch.com",
];
const pixivInstances = [
  "pixivfe.exozy.me",
  "pix.chaotic.ninja",
  "art.whateveritworks.org",
];
const udInstances = ["rd.vern.cc", "ruraldictionary.esmailelbob.xyz"];
function eventualUpdateRules() {
  chrome.storage.sync.get(
    ["redirectServices", "customInstances"],
    function (savedData) {
      const savedRedirectServices =
        savedData.redirectServices || defaultRedirectServices;
      const customInstances =
        savedData.customInstances || defaultCustomInstances;
      updateRules(savedRedirectServices, customInstances);
      console.log("eventually updated rules");
    }
  );
}
eventualUpdateRules();
function getRandomInstance(instances) {
  return instances[Math.floor(Math.random() * instances.length)];
}

function updateRules(parameterRedirectServices, customInstances) {
  const redirectRules = [];

  const randYoutubeInstance =
    customInstances.youtubeInstance || getRandomInstance(youtubeInstances);
  const randTwitterInstance =
    customInstances.twitterInstance || getRandomInstance(twitterInstances);
  const randMediumInstance =
    customInstances.mediumInstance || getRandomInstance(mediumInstances);
  const randTiktokInstance =
    customInstances.tiktokInstance || getRandomInstance(tiktokInstances);
  const randQuoraInstance =
    customInstances.quoraInstance || getRandomInstance(quoraInstances);
  const randFandomInstance =
    customInstances.fandomInstance || getRandomInstance(fandomInstances);
  const randImdbInstance =
    customInstances.imdbInstance || getRandomInstance(imdbInstances);
  const randGeniusInstance =
    customInstances.geniusInstance || getRandomInstance(geniusInstances);
  const randytmusicInstance =
    customInstances.ytmusicInstance || getRandomInstance(ytmusicInstances);
  const randgoodreadsInstance =
    customInstances.goodreadsInstance || getRandomInstance(goodreadsInstances);
  const randimgurInstance =
    customInstances.imgurInstance || getRandomInstance(imgurInstances);
  const randpixivInstance =
    customInstances.pixivInstance || getRandomInstance(pixivInstances);
  const randUDInstance =
    customInstances.udInstance || getRandomInstance(udInstances);

  function createRedirectRule(id, filter, instance) {
    return {
      id: id,
      priority: 1,
      condition: {
        urlFilter: `||${filter}`,
        resourceTypes: ["main_frame"],
        excludedInitiatorDomains: [instance],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: { scheme: "https", host: instance },
        },
      },
    };
  }

  if (parameterRedirectServices.youtube) {
    redirectRules.push(
      createRedirectRule(1, "youtube.com", randYoutubeInstance)
    );
    redirectRules.push({
      id: 2,
      priority: 1,
      condition: {
        urlFilter: "||youtube.com/embed",
        resourceTypes: ["sub_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: { scheme: "https", host: randYoutubeInstance },
        },
      },
    });
    redirectRules.push({
      id: 3,
      priority: 1,
      condition: {
        urlFilter: "||youtube-nocookie.com/embed",
        resourceTypes: ["sub_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: { scheme: "https", host: randYoutubeInstance },
        },
      },
    });
  }

  if (parameterRedirectServices.twitter) {
    redirectRules.push(
      createRedirectRule(4, "twitter.com", randTwitterInstance)
    );
    redirectRules.push(createRedirectRule(5, "x.com", randTwitterInstance));
  }

  if (parameterRedirectServices.medium) {
    redirectRules.push(createRedirectRule(6, "medium.com", randMediumInstance));
  }
  if (parameterRedirectServices.tiktok) {
    redirectRules.push(createRedirectRule(7, "tiktok.com", randTiktokInstance));
  }
  if (parameterRedirectServices.quora) {
    redirectRules.push(createRedirectRule(8, "quora.com", randQuoraInstance));
  }
  if (parameterRedirectServices.fandom) {
    redirectRules.push({
      id: 9,
      priority: 2,
      condition: {
        regexFilter: "^https://(.*)\\.fandom\\.com/(.*)$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randFandomInstance}/\\1/\\2`,
        },
      },
    });
  }
  if (parameterRedirectServices.imdb) {
    redirectRules.push(createRedirectRule(10, "imdb.com", randImdbInstance));
  }
  if (parameterRedirectServices.genius) {
    redirectRules.push(
      createRedirectRule(11, "genius.com", randGeniusInstance)
    );
  }
  if (parameterRedirectServices.ytmusic) {
    redirectRules.push({
      id: 12,
      priority: 2,
      condition: {
        urlFilter: `||music.youtube.com`,
        resourceTypes: ["main_frame"],
        excludedInitiatorDomains: [randytmusicInstance],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: { scheme: "https", host: randytmusicInstance },
        },
      },
    });
  }
  if (parameterRedirectServices.goodreads) {
    redirectRules.push(
      createRedirectRule(13, "goodreads.com", randgoodreadsInstance)
    );
  }
  if (parameterRedirectServices.imgur) {
    redirectRules.push(createRedirectRule(14, "imgur.com", randimgurInstance));
    redirectRules.push({
      id: 15,
      priority: 2,
      condition: {
        regexFilter: "^https?://i\\.stack\\.imgur\\.com(/.*)?$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randimgurInstance}/stack\\1
          `,
        },
      },
    });
  }
  if (parameterRedirectServices.pixiv) {
    redirectRules.push(createRedirectRule(16, "pixiv.net", randpixivInstance));
    redirectRules.push({
      id: 17,
      priority: 2,
      condition: {
        regexFilter: "^https?://www?.pixiv\\.net/en(/.*)?$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randpixivInstance}\\1
          `,
        },
      },
    });
  }
  if (parameterRedirectServices.ud) {
    redirectRules.push(
      createRedirectRule(18, "urbandictionary.com", randUDInstance)
    );
  }

  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    ],
    addRules: redirectRules,
  });
  console.log("Updated Rules:");
  console.log(redirectRules);
  console.log(parameterRedirectServices);
  console.log(customInstances);
}

async function checkAlarmState() {
  const alarm = await chrome.alarms.get("updateRulesAlarm");

  if (!alarm) {
    await chrome.alarms.create("updateRulesAlarm", {
      delayInMinutes: 3,
      periodInMinutes: 3,
    });
  }
}

checkAlarmState();
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm && alarm.name === "updateRulesAlarm") {
    eventualUpdateRules();
    console.log("Alarm fired");
  }
});
chrome.runtime.onMessage.addListener((message) => {
  if (
    message &&
    message.type === "updateOptions" &&
    message.redirectServices &&
    message.customInstances
  ) {
    redirectServices = message.redirectServices;
    customInstances = message.customInstances;
    updateRules(redirectServices, customInstances);
  }
});
