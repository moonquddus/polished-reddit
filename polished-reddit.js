// ==UserScript==
// @name         Polished Reddit
// @namespace    https://github.com/moonquddus/
// @version      0.1
// @description  Adds mobile responsiveness 
// @author       Moon Quddus
// @match        *://old.reddit.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict'

    document.querySelector('body').classList.add('mq-enhancements')

    const cssFilePath = 'https://moonquddus.github.io/polished-reddit/polished-reddit.css'
    const linkElement = document.createElement('link')
    linkElement.rel = 'stylesheet'
    linkElement.type = 'text/css'
    linkElement.href = cssFilePath
    document.head.appendChild(linkElement)
})
