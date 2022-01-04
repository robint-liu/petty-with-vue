
/**
 * @jest-environment jsdom
 */


test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter')
      done()
    } catch (error) {
      done(error)
      console.log("error:", error);
    }
  }
  fetchData(callback)
})

function fetchData(callback) {
  fetch("https://www.google-analytics.com/j/collect?v=1&_v=j93&a=234137850&t=pageview&_s=1&dl=https%3A%2F%2Fcn.vuejs.org%2Fv2%2Fguide%2Fcomponents.html&ul=zh-cn&de=UTF-8&dt=%E7%BB%84%E4%BB%B6%E5%9F%BA%E7%A1%80%20%E2%80%94%20Vue.js&sd=24-bit&sr=1366x768&vp=567x631&je=0&_u=IADAAAABAAAAAC~&jid=1051673125&gjid=198996337&cid=530121429.1626601593&tid=UA-46852172-3&_gid=560126771.1634462865&_r=1&_slc=1&z=1039119888", {
    "headers": {
      "accept": "*/*",
      "accept-language": "zh-CN,zh;q=0.9",
      "cache-control": "no-cache",
      "content-type": "text/plain",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Chromium\";v=\"94\", \"Google Chrome\";v=\"94\", \";Not A Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    "referrer": "https://cn.vuejs.org/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "",
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(res => res.text()).then(callback)
}

window.fetch = jest.fn(() => {
  return Promise.resolve({
    status: 200,
    text: () => {
      return Promise.resolve("peanut butter")
    }
  })
})