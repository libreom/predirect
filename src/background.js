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
  twitch: false,
  instagram: false,
  wolframAlpha: false,
  bandcamp: true,
  tumblr: true,
  soundcloud: true,
  reddit: true,
  instructables: true,
  knowyourmeme: true,
  search: false,
  translate: true,
  snopes: false,
  reuters: false,
  stackoverflow: false,
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
  ultimateGuitarInstance: "",
  twitchInstance: "",
  instagramInstance: "",
  wolframAlphaInstance: "",
  bandcampInstance: "",
  tumblrInstance: "",
  soundcloudInstance: "",
  redditInstance: "",
  instructablesInstance: "",
  knowyourmemeInstance: "",
  searchInstance: "",
  translateInstance: "",
  snopesInstance: "",
  reutersInstance: "",
  stackoverflowInstance: "",
};
const youtubeInstances = [
  "inv.n8pjl.ca",
  "inv.tux.pizza",
  "inv.us.projectsegfau.lt",
  "invidious.drgns.space",
  "invidious.fdn.fr",
  "invidious.lunar.icu",
  "invidious.nerdvpn.de",
  "invidious.private.coffee",
  "invidious.projectsegfau.lt",
  "invidious.protokolla.fi",
  "invidious.slipfox.xyz",
  "iv.datura.network",
  "iv.ggtyler.dev",
  "iv.melmac.space",
  "iv.nboeck.de",
  "vid.priv.au",
  "vid.puffyan.us",
  "yewtu.be",
  "youtube.owacon.moe",
  "yt.artemislena.eu",
  "yt.cdaut.de",
  "yt.drgnz.club",
  "piped.lunar.icu",
  "piped.privacydev.net",
  "piped.smnz.de",
  "piped.adminforge.de",
];
const twitterInstances = [
  "n.opnxng.com",
  "n.populas.no",
  "nitter.adminforge.de",
  "nitter.catsarch.com",
  "nitter.cz",
  "nitter.esmailelbob.xyz",
  "nitter.eu.projectsegfau.lt",
  "nitter.in.projectsegfau.lt",
  "nitter.io.lol",
  "nitter.ktachibana.party",
  "nitter.mint.lgbt",
  "nitter.moomoo.me",
  "nitter.net",
  "nitter.nohost.network",
  "nitter.oksocial.net",
  "nitter.poast.org",
  "nitter.privacydev.net",
  "nitter.projectsegfau.lt",
  "nitter.salastil.com",
  "nitter.soopy.moe",
  "nitter.tux.pizza",
  "nitter.unixfox.eu",
  "nitter.woodland.cafe",
];
const mediumInstances = [
  "scribe.rip",
  "scribe.bus-hit.me",
  "sc.vern.cc",
  "m.opnxng.com",
  "libmedium.batsense.net",
  "md.vern.cc",
  "medium.hostux.net",
  "read.sudovanilla.com",
  "medium.rip",
];
const tiktokInstances = [
  "proxitok.pabloferreiro.es",
  "proxitok.pussthecat.org",
  "tok.habedieeh.re",
  "tok.artemislena.eu",
  "tok.adminforge.de",
  "tik.hostux.net",
  "proxitok.lunar.icu",
];
const quoraInstances = [
  "quetre.iket.me",
  "quetre.pussthecat.org",
  "quetre.esmailelbob.xyz",
  "quetre.privacydev.net",
  "quetre.blackdrgn.nl",
  "quetre.lunar.icu",
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
  "ld.vern.cc",
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
  "rimgo.totaldarkness.net",
  "rimgo.bus-hit.me",
  "imgur.artemislena.eu",
  "rimgo.vern.cc",
  "rim.odyssey346.dev",
  "i.habedieeh.re",
  "rimgo.hostux.net",
  "ri.zzls.xyz",
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
const ultimateGuitarInstances = ["freetar.androidloves.me"];
const twitchInstances = [
  "safetwitch.drgns.space",
  "safetwitch.projectsegfau.lt",
  "stream.whateveritworks.org",
  "safetwitch.datura.network",
  "ttv.vern.cc",
  "safetwitch.frontendfriendly.xyz",
  "ttv.femboy.band",
  "twitch.seitan-ayoub.lol",
  "st.ggtyler.dev",
  "safetwitch.lunar.icu",
  "twitch.sudovanilla.com",
];
const instagramInstances = [
  "proxigram.privacyfrontends.repl.co",
  "proxigram.protokolla.fi",
  "proxigram.kyun.li",
  "proxigram.drgns.space",
  "ig.opnxng.com",
];
const wolframAlphaInstances = [
  "wolfree.chickenkiller.com",
  "wolfree.crabdance.com",
  "wolfree.gitlab.io",
  "wolfree.glitch.me",
  "wolfree.ignorelist.com",
  "wolfree.jumpingcrab.com",
  "wolfree.my.to",
  "wolfree.netlify.app",
  "wolfree.on.fleek.co",
  "wolfree.onrender.com",
  "wolfree.pages.dev",
  "wolfree.privatedns.org",
  "wolfree.strangled.net",
  "wolfree.twilightparadox.com",
  "wolfree.uk.to",
  "wolfree.us.to",
  "wolfreealpha.chickenkiller.com",
  "wolfreealpha.crabdance.com",
  "wolfreealpha.gitlab.io",
  "wolfreealpha.glitch.me",
  "wolfreealpha.ignorelist.com",
  "wolfreealpha.jumpingcrab.com",
  "wolfreealpha.my.to",
  "wolfreealpha.netlify.app",
  "wolfreealpha.on.fleek.co",
  "wolfreealpha.onrender.com",
  "wolfreealpha.pages.dev",
  "wolfreealpha.privatedns.org",
  "wolfreealpha.strangled.net",
  "wolfreealpha.twilightparadox.com",
  "wolfreealpha.uk.to",
  "wolfreealpha.us.to",
];
const redditInstances = [
  "l.opnxng.com",
  "libreddit.bus-hit.me",
  "libreddit.lunar.icu",
  "libreddit.northboot.xyz",
  "libreddit.oxymagnesium.com",
  "libreddit.privacydev.net",
  "libreddit.projectsegfau.lt",
  "libreddit.strongthany.cc",
  "lr.artemislena.eu",
  "reddit.invak.id",
  "reddit.simo.sh",
  "reddit.utsav2.dev",
  "safereddit.com",
];
const bandcampInstances = ["tent.sny.sh", "tent.bloat.cat", "tn.vern.cc"];
const tumblrInstances = ["pb.bloat.cat"];
const soundcloudInstances = ["tubo.migalmoreno.com"];
const udInstances = ["rd.vern.cc", "ruraldictionary.esmailelbob.xyz"];
const instructablesInstances = ["ds.vern.cc"];
const knowyourmemeInstances = ["mm.vern.cc"];
const searchInstances = [
  "search.bus-hit.me",
  "searxng.site",
  "search.demoniak.ch",
  "priv.au",
  "search.rhscz.eu",
  "searx.be",
  "search.hbubli.cc",
  "search.im-in.space",
  "searx.kutay.dev",
  "opnxng.com",
];
const translateInstances = [
  "mozhi.aryak.me",
  "translate.bus-hit.me",
  "nyc1.mz.ggtyler.dev",
];
const snopesInstances = ["sd.vern.cc"];
const reutersInstances = ["neuters.de"];
const stackoverflowInstances = [
  "code.whatever.social",
  "ao.vern.cc",
  "overflow.smnz.de",
  "overflow.lunar.icu",
  "overflow.adminforge.de",
  "overflow.hostux.net",
  "overflow.projectsegfau.lt",
  "anonoverflow.frontendfriendly.xyz",
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
  const randUltimateGuitarInstance =
    customInstances.ultimateGuitarInstance ||
    getRandomInstance(ultimateGuitarInstances);
  const randTwitchInstance =
    customInstances.twitchInstance || getRandomInstance(twitchInstances);
  const randInstagramInstance =
    customInstances.instagramInstance || getRandomInstance(instagramInstances);
  const randWolframAlphaInstance =
    customInstances.wolframAlphaInstance ||
    getRandomInstance(wolframAlphaInstances);
  const randBandcampInstance =
    customInstances.bandcampInstance || getRandomInstance(bandcampInstances);
  const randTumblrInstance =
    customInstances.tumblrInstance || getRandomInstance(tumblrInstances);
  const randSoundcloudInstance =
    customInstances.soundcloudInstance ||
    getRandomInstance(soundcloudInstances);
  const randRedditInstance =
    customInstances.redditInstance || getRandomInstance(redditInstances);
  const randInstructablesInstance =
    customInstances.instructablesInstance ||
    getRandomInstance(instructablesInstances);
  const randknowyourmemeInstance =
    customInstances.knowyourmemeInstance ||
    getRandomInstance(knowyourmemeInstances);
  const randsearchInstance =
    customInstances.searchInstance || getRandomInstance(searchInstances);
  const randtranslateInstance =
    customInstances.translateInstance || getRandomInstance(translateInstances);
  const randsnopesInstance =
    customInstances.snopesInstance || getRandomInstance(snopesInstances);
  const randreutersInstance =
    customInstances.reutersInstance || getRandomInstance(reutersInstances);
  const randstackoverflowInstance =
    customInstances.stackoverflowInstance ||
    getRandomInstance(stackoverflowInstances);

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
    redirectRules.push({
      id: 1,
      priority: 1,
      condition: {
        urlFilter: "||youtube.com",
        resourceTypes: ["main_frame"],
        excludedInitiatorDomains: [randYoutubeInstance],
        excludedRequestDomains: ["accounts.youtube.com", "studio.youtube.com"],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: { scheme: "https", host: randYoutubeInstance },
        },
      },
    });
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
    redirectRules.push({
      id: 6,
      priority: 1,
      condition: {
        regexFilter: "^https://t\\.co/(.*)$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randTwitterInstance}/t.co/\\1`,
        },
      },
    });
    redirectRules.push({
      id: 7,
      priority: 1,
      condition: {
        regexFilter: "^https://(pbs|video)\\.twimg\\.com/(.*)$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randTwitterInstance}/pic/\\1.twimg.com/\\2`,
        },
      },
    });
  }

  if (parameterRedirectServices.medium) {
    redirectRules.push(createRedirectRule(8, "medium.com", randMediumInstance));
  }
  if (parameterRedirectServices.tiktok) {
    redirectRules.push(createRedirectRule(9, "tiktok.com", randTiktokInstance));
  }
  if (parameterRedirectServices.quora) {
    redirectRules.push(createRedirectRule(10, "quora.com", randQuoraInstance));
  }
  if (parameterRedirectServices.fandom) {
    redirectRules.push({
      id: 11,
      priority: 2,
      condition: {
        regexFilter: "^https://(.*)\\.fandom\\.com/(.*)$",
        resourceTypes: ["main_frame"],
        excludedRequestDomains: ["www.fandom.com"],
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
    redirectRules.push(createRedirectRule(12, "imdb.com", randImdbInstance));
  }
  if (parameterRedirectServices.genius) {
    redirectRules.push(
      createRedirectRule(13, "genius.com", randGeniusInstance)
    );
  }
  if (parameterRedirectServices.ytmusic) {
    redirectRules.push({
      id: 14,
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
      createRedirectRule(15, "goodreads.com", randgoodreadsInstance)
    );
  }
  if (parameterRedirectServices.imgur) {
    redirectRules.push(createRedirectRule(16, "imgur.com", randimgurInstance));
    redirectRules.push({
      id: 17,
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
    redirectRules.push(createRedirectRule(18, "pixiv.net", randpixivInstance));
    redirectRules.push({
      id: 19,
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
      createRedirectRule(20, "urbandictionary.com", randUDInstance)
    );
  }
  if (parameterRedirectServices.ultimateGuitar) {
    redirectRules.push(
      createRedirectRule(21, "ultimate-guitar.com", randUltimateGuitarInstance)
    );
  }
  if (parameterRedirectServices.twitch) {
    redirectRules.push(createRedirectRule(22, "twitch.tv", randTwitchInstance));
  }
  if (parameterRedirectServices.instagram) {
    redirectRules.push(
      createRedirectRule(23, "instagram.com", randInstagramInstance)
    );
  }
  if (parameterRedirectServices.wolframAlpha) {
    redirectRules.push(
      createRedirectRule(24, "wolframalpha.com", randWolframAlphaInstance)
    );
  }
  if (parameterRedirectServices.bandcamp) {
    redirectRules.push(
      createRedirectRule(25, "bandcamp.com", randBandcampInstance)
    );
    redirectRules.push({
      id: 26,
      priority: 2,
      condition: {
        regexFilter: "^https://(.*)\\.bandcamp\\.com/$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randBandcampInstance}/artist.php?name=\\1`,
        },
      },
    });
    redirectRules.push({
      id: 27,
      priority: 3,
      condition: {
        regexFilter: "^https://(.*)\\.bandcamp\\.com/(track|album)/(.*)$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randBandcampInstance}/release.php?artist=\\1&type=\\2&name=\\3`,
        },
      },
    });
    redirectRules.push({
      id: 28,
      priority: 2,
      condition: {
        regexFilter: "^https://bandcamp\\.com/search\\?q=(.*)$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randBandcampInstance}/search.php?query=\\1`,
        },
      },
    });
  }
  if (parameterRedirectServices.tumblr) {
    redirectRules.push(
      createRedirectRule(29, "tumblr.com", randTumblrInstance)
    );
    redirectRules.push({
      id: 30,
      priority: 2,
      condition: {
        regexFilter: "^https://(.*)\\.tumblr\\.com/(.*)$",
        resourceTypes: ["main_frame"],
        excludedRequestDomains: ["www.tumblr.com"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randTumblrInstance}/\\1/\\2`,
        },
      },
    });
    redirectRules.push({
      id: 31,
      priority: 3,
      condition: {
        regexFilter: "^https://(.*)\\.tumblr\\.com/post/(.*)$",
        resourceTypes: ["main_frame"],
        excludedRequestDomains: ["www.tumblr.com"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randTumblrInstance}/\\1/\\2`,
        },
      },
    });
  }
  if (parameterRedirectServices.soundcloud) {
    redirectRules.push({
      id: 32,
      priority: 2,
      action: {
        type: "redirect",
        redirect: {
          url: `https://${randSoundcloudInstance}/kiosk?serviceId=1`,
        },
      },
      condition: {
        urlFilter: "||soundcloud.com/|",
        resourceTypes: ["main_frame"],
        excludedInitiatorDomains: [randSoundcloudInstance],
      },
    });
    redirectRules.push({
      id: 33,
      priority: 1,
      condition: {
        regexFilter: "^https://soundcloud\\.com/(.*)$",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randSoundcloudInstance}/stream?url=https://soundcloud.com/\\1`,
        },
      },
    });
  }
  if (parameterRedirectServices.reddit) {
    redirectRules.push(
      createRedirectRule(34, "reddit.com", randRedditInstance)
    );
  }
  if (parameterRedirectServices.instructables) {
    redirectRules.push(
      createRedirectRule(35, "instructables.com", randInstructablesInstance)
    );
  }
  if (parameterRedirectServices.knowyourmeme) {
    redirectRules.push(
      createRedirectRule(36, "knowyourmeme.com", randknowyourmemeInstance)
    );
  }
  if (parameterRedirectServices.search) {
    redirectRules.push({
      id: 37,
      priority: 1,
      condition: {
        urlFilter: "||www.google.com/search",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: {
            scheme: "https",
            host: randsearchInstance,
            queryTransform: {
              removeParams: [
                "client",
                "sclient",
                "source",
                "aq",
                "pq",
                "sa",
                "swrnum",
                "as_q",
                "oi",
                "resnum",
                "sourceid",
                "ie",
                "gs_lcrp",
                "oq",
                "newwindow",
                "safe",
                "pws",
                "complete",
                "as_qdr",
                "adtest",
              ],
            },
          },
        },
      },
    });
  }
  if (parameterRedirectServices.translate) {
    redirectRules.push({
      id: 38,
      priority: 1,
      condition: {
        urlFilter: `||translate.google.com`,
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          transform: {
            scheme: "https",
            host: randtranslateInstance,
            queryTransform: { removeParams: ["op"] },
          },
        },
      },
    });
  }
  if (parameterRedirectServices.snopes) {
    redirectRules.push(
      createRedirectRule(39, "snopes.com", randsnopesInstance)
    );
  }
  if (parameterRedirectServices.reuters) {
    redirectRules.push(
      createRedirectRule(40, "reuters.com", randreutersInstance)
    );
  }
  if (parameterRedirectServices.stackoverflow) {
    redirectRules.push(
      createRedirectRule(41, "https?:\/{2}(?:([a-zA-Z0-9-]+)\.)?stackoverflow\.com\/questions", randstackoverflowInstance)
    );
    redirectRules.push({
      id: 42,
      priority: 1,
      condition: {
        regexFilter: "https?:\/{2}(?:([a-zA-Z0-9-]+)\.)?stackexchange\.com\/questions",
        resourceTypes: ["main_frame"],
      },
      action: {
        type: "redirect",
        redirect: {
          regexSubstitution: `https://${randstackoverflowInstance}/exchange/\\1/questions/\\2`,
        },
      },
    });
  }
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42,
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
