let defaultRedirectServices = {
  youtube: true,
  twitter: true,
  medium: true,
  tiktok: true,
};
let defaultCustomInstances = {
  youtubeInstance: "",
  twitterInstance: "",
  mediumInstance: "",
  tiktokInstance: "",
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

  function createRedirectRule(id, filter, instance) {
    return {
      id: id,
      priority: 1,
      condition: {
        urlFilter: `||${filter}`,
        resourceTypes: ["main_frame"],
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
      createRedirectRule(1, "youtube.com", getRandomInstance(youtubeInstances))
    );
  }

  if (parameterRedirectServices.twitter) {
    redirectRules.push(
      createRedirectRule(2, "twitter.com", getRandomInstance(twitterInstances))
    );
    redirectRules.push(
      createRedirectRule(3, "x.com", getRandomInstance(twitterInstances))
    );
  }

  if (parameterRedirectServices.medium) {
    redirectRules.push(
      createRedirectRule(4, "medium.com", getRandomInstance(mediumInstances))
    );
  }
  if (parameterRedirectServices.tiktok) {
    redirectRules.push(
      createRedirectRule(5, "tiktok.com", getRandomInstance(tiktokInstances))
    );
  }
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [1, 2, 3, 4, 5],
    addRules: redirectRules,
  });
  console.log("Updated Rules:");
  console.log(redirectRules);
}

setInterval(eventualUpdateRules, 10 * 60 * 1000);

chrome.runtime.onMessage.addListener(function (message) {
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
