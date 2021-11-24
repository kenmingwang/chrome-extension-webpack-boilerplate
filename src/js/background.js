'use strict';
import URLParse from 'url-parse';


chrome.runtime.onInstalled.addListener(function () {
    chrome.runtime.openOptionsPage(() => console.log('options page opened'))
});

chrome.browserAction.onClicked.addListener(function (tab) {
    console.log('onClicked')
    chrome.tabs.create({
        'url': chrome.runtime.getURL("popup.html")
    });
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request.purpose);
        f().then(json => {
            console.log('2:' + json)
            if (request.purpose === "ping") {
                console.log(json)
                sendResponse(json)
            }
        })
        return true
    })

chrome.webRequest.onBeforeSendHeaders.addListener((details) => {
    const {requestHeaders, initiator} = details;
    const url = new URLParse(details.url, '', true);
    const {query: data} = url;
    console.log('OnBeforeSendHeaders:')
    const Headers = [...requestHeaders];
    console.log(url)
    console.log(Headers)
    if (/^chrome-extension:\/\//.test(initiator)) {
        const refererHeader = Headers.find((e) => e.name.toLowerCase() === 'referer');
        if (refererHeader) {
            refererHeader.value = 'https://www.bilibili.com/';
        } else {
            Headers.push({
                name: 'referer',
                value: 'https://www.bilibili.com/',
            });
        }
        if (data && data.requestFrom === 'bilibili-music' && data.requestType === 'audioFromVideo') {
            Headers.push({
                name: 'Range',
                value: 'bytes=0-',
            });
        }
        return {requestHeaders: Headers};
    } else {
        return {requestHeaders};
    }
}, {
    urls: [
        '*://*.bilivideo.com/*',
    ],
}, ['blocking', 'requestHeaders', 'extraHeaders']);



function f() {
    return (
        fetch('https://api.bilibili.com/x/player/playurl?cid=432005850&bvid=BV19u411d7kB&qn=64&fnval=16')
            .then(res => res.json()))
};

