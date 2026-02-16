// ==UserScript==
// @name         Twitter Pink Theme
// @namespace    http://tampermonkey.net/
// @version      0.13
// @description  Gives a cuter look to Twitter
// @author       KantusCorner
// @match        https://twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        GM_addStyle
// @downloadURL  https://raw.githubusercontent.com/CuteGirlLeia/TwitterPinkTheme/main/Pink.user.js
// @updateURL    https://raw.githubusercontent.com/CuteGirlLeia/TwitterPinkTheme/main/Pink.user.js

// ==/UserScript==


//Work in progress


(function() {
    'use strict';

     function addMyStyles() {
        GM_addStyle(`

:root{
  --Light: #f8c8dc;
  --Medium: #ff4a95;
  --Dark: #b7004c;
}

html{
  background-color: var(--Light);
}

/*Logos*/

path{
  fill: var(--Medium) !important;
}

/*Hashtags*/

a.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3.r-1loqt21 {
  color: var(--Dark) !important;
}

/**/


header.css-175oi2r.r-lrvibr.r-1g40b8q.r-obd0qt.r-16y2uox {
  background-color: var(--Light);
}

div.css-175oi2r.r-18kxxzh.r-1wron08.r-onrtq4.r-1awozwy {
  background-color: var(--Light);
}

div.css-175oi2r.r-1oszu61.r-1niwhzg.r-18u37iz.r-16y2uox.r-2llsf.r-13qz1uu.r-1wtj0ep {
  background-color: var(--Light);
}

div.css-146c3p1.r-bcqeeo.r-qvutc0.r-37j5jr.r-q4m81j.r-a023e6.r-rjixqe.r-16dba41 {
  background-color: var(--Light);

}

div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1777fci {
  background-color: var(--Light);
  border-color: var(--Medium);
}

div.css-175oi2r.r-18u37iz.r-136ojw6 {
  background-color: var(--Light);
}

article.css-175oi2r.r-18u37iz.r-1udh08x.r-1c4vpko.r-1c7gwzm.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 {
  border-color: var(--Medium);
  background-color: var(--Light);
}

div.css-175oi2r.r-18u37iz.r-184en5c {
  background-color: var(--Light);
}

div.css-175oi2r.r-14lw9ot.r-jumn1c.r-xd6kpl.r-gtdqiz.r-ipm5af.r-184en5c {
  background-color: var(--Light);
}

div.css-175oi2r.r-3pj75a {
  background-color: var(--Light);
}

div.css-175oi2r.r-1awozwy.r-6koalj.r-eqz5dr.r-16y2uox.r-1h3ijdo.r-1777fci.r-s8bhmr.r-3pj75a.r-1loqt21.r-o7ynqc.r-6416eg.r-1ydqjzz.r-1ny4l3l {
  background-color: var(--Light);
}

div.css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-a023e6.r-rjixqe.r-majxgm.r-1awozwy.r-6koalj.r-18u37iz.r-1pi2tsx.r-1777fci.r-1l7z4oj.r-95jzfe.r-bnwqim {
  background-color: var(--Light);
}

div.css-175oi2r.r-1h8ys4a {
  background-color: var(--Light);
}

span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3 {
  color: var(--Medium);
  border-color: var(--Medium);
}

button.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-1cwvpvk.r-2yi16.r-1qi8awa.r-3pj75a.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l {
  background-color: var(--Light);
}

div.css-175oi2r.r-xoduu5.r-1kihuf0.r-sdzlij.r-1p0dtai.r-hdaws3.r-s8bhmr.r-u8s1d.r-13qz1uu {
  background-color: var(--Medium) !important;
}

div.css-175oi2r.r-14lw9ot.r-jxzhtn.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj {
  border-style: solid;
  border-color: var(--Medium);
}

div.css-175oi2r.r-j5o65s.r-qklmqi.r-1adg3ll.r-1ny4l3l {
  border-color: var(--Medium);
}

div.css-175oi2r.r-109y4c4.r-1sw30gj {
  background-color: var(--Medium);
}

nav.css-175oi2r.r-1awozwy.r-18u37iz.r-j5o65s.r-rull8r.r-qklmqi.TimelineTabs {
  border-color: var(--Medium);
}

div.css-175oi2r.r-18u37iz.r-16y2uox.r-1wbh5a2.r-tzz3ar.r-1pi2tsx.r-buy8e9.r-mfh4gg.r-2eszeu.r-10m9thr.r-lltvgl {
  border-color: var(--Medium);
  background-color: var(--Light);
}

div.css-175oi2r.r-1awozwy.r-14lw9ot.r-18u37iz.r-1wtj0ep.r-13qz1uu.r-184en5c {
  border-color: var(--Medium);
}

div.css-175oi2r.r-j5o65s.r-qklmqi.r-1w6e6rj.r-m5k245.r-13qz1uu.r-1awozwy.r-18u37iz.r-1wtj0ep {
  border-color: var(--Medium);
}
button.css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-1cwvpvk r-2yi16 r-1qi8awa r-3pj75a r-o7ynqc r-6416eg r-icoktb r-1ny4l3l {
 background-color: var(--Light);
}

main.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1habvwh {
  background-color: var(--Light);
}
body {
  background-color: var(--Light);
}
div.css-175oi2r.r-1awozwy.r-l5o3uw.r-18u37iz.r-1wtj0ep.r-xyw6el.r-105ug2t.r-yz1j6i.r-1kihuf0.r-z2wwpe.r-zd98yo {
  border-color: var(--Light);
  background-color: var(--Light);
}
a.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3.r-1wvb978.r-1loqt21 {
  color: var(--Dark) !important;
}
div.css-175oi2r.r-1bimlpy.r-f8sm7e.r-m5arl1.r-16y2uox.r-14gqq1x {
  background-color: var(--Medium);
}
div.css-175oi2r.r-1bimlpy.r-f8sm7e.r-m5arl1.r-1p0dtai.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af {
  background-color: var(--Light);
}
div.css-146c3p1.r-1ttztb7.r-qvutc0.r-37j5jr.r-1gkfh8e.r-56xrmm.r-16dba41.r-1awozwy.r-l5o3uw.r-sdzlij.r-6koalj.r-1q142lx.r-10ptun7.r-1777fci.r-285fr0.r-lrvibr.r-3s2u2q.r-11mg6pl.r-1phboty.r-rs99b7.r-1tjplnt.r-2utimh.r-u8s1d.r-1m4drjs {
  background-color: var(--Light);
  border-color: var(--Light);
}
div a time {
  color: var(--Dark);
}
nav.css-175oi2r.r-1awozwy.r-18u37iz.r-j5o65s.r-rull8r.r-qklmqi {
  border-color: var(--Medium);
}

article.css-175oi2r.r-1mmae3n.r-3pj75a.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 {
  background-color: var(--Light);

}

button:disabled {
  background-color: var(--Light) !important;
}

button.css-175oi2r.r-1mmae3n.r-3pj75a.r-1loqt21.r-1ny4l3l {
  background-color: var(--Light);
}

div.css-175oi2r.r-3pj75a.r-ttdzmv.r-1ifxtd0 {
  margin-bottom: 0px;
}

div.css-146c3p1.r-dnmrzs.r-1udh08x.r-1udbk01.r-3s2u2q.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-1gkfh8e.r-56xrmm.r-majxgm.r-sqpuna.r-1559e4e.r-n7gxbd.r-1sw30gj.r-1ez5h0i {
  color: var(--Light);
  border-color: var(--Medium);
  border-style: solid;
}

div.flex.flex-col.h-full.w-full.justify-center.items-center.flex-grow.gap-6 {
  background-color: var(--Light);
}

div.flex.flex-col.h-full.relative.w-full.border-e {
  background-color: var(--Light);
}

a[data-testid=SideNav_NewTweet_Button]{
  border-color: var(--Medium);
  background-color: rgba(0, 0, 0, 0);
}


article.css-175oi2r.r-18u37iz.r-1udh08x.r-1c4vpko.r-1c7gwzm.r-1ny4l3l {
  background-color: var(--Light);
}

div.css-175oi2r.r-4d76ec {
  background-color: var(--Light);
}

div.r-37j5jr {
  border-color: var(--Medium);

}

div.css-175oi2r.r-6koalj.r-18u37iz.r-1777fci.r-bx70bn.r-13qz1uu {
  background-color: var(--Light);
  border-color: var(--Light);
  margin-bottom: 0px;
  margin-top: 0px;
}

a.css-175oi2r.r-w7s2jr.r-3pj75a.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 {
  background-color: var(--Light) !important;
}

div.css-175oi2r.r-14lw9ot.r-jxzhtn.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x {
  border-color: var(--Medium);
}

li.css-175oi2r.r-1mmae3n.r-3pj75a.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l {
  background-color: var(--Light);
}

div.css-175oi2r {
  border-color: var(--Medium);
}

div.css-175oi2r.r-1kihuf0.r-13qz1uu {
  background-color: var(--Light);
}
div.css-175oi2r.r-14lw9ot.r-jxzhtn.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj {
  background-color: var(--Light)
}

div.css-175oi2r.r-14lw9ot.r-jxzhtn.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj {
  background-color: var(--Light)

}

/* Log in page */
div.css-175oi2r.r-16y2uox.r-1wbh5a2.r-1dqxon3 {
  background-color: var(--Light);
}

button.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-ywje51.r-184id4b.r-eu3ka.r-1ipicw7.r-2yi16.r-1qi8awa.r-3pj75a.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l {
  background-color: var(--Light);
  border-color: var(--Medium);
}

div.L5Fo6c-bF1uUb {
  border-color: var(--Medium);
}

button.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-ywje51.r-184id4b.r-13qz1uu.r-2yi16.r-1qi8awa.r-3pj75a.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l {
  background-color: var(--Light);
  color: var(--Light);
  border-color: var(--Medium);
}

div.css-175oi2r.r-18u37iz.r-16y2uox.r-1wbh5a2.r-1wzrnnt.r-1udh08x.r-xd6kpl.r-is05cd.r-ttdzmv {
  border-color: var(--Medium);
}

label.css-175oi2r.r-1ets6dv.r-z2wwpe.r-rs99b7.r-18u37iz {
  border-color: var(--Medium);
}

div.css-175oi2r.r-1f0wa7y {
  background-color: var(--Light);
}

a.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-19yznuf.r-64el8z.r-1fkl15p.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 {
  background-color: var(--Light) !important;
}

a.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-6gpygo.r-2yi16.r-1qi8awa.r-3pj75a.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 {
  border-color: var(--Medium);
}

div.css-175oi2r.r-42olwf.r-1phboty.r-rs99b7 {
  border-color: #00000000;
}

div.css-175oi2r.r-1awozwy.r-16y2uox.r-1777fci.r-13qz1uu {
  background-color: var(--Light);
}

div.css-175oi2r.r-14lw9ot.r-16y2uox.r-1dqxon3.r-16wqof {
  background-color: var(--Light);
}

button.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-1mnahxq.r-19yznuf.r-64el8z.r-1fkl15p.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l {
  background-color: var(--Light);
  border-color: var(--Medium);
}

button.css-175oi2r.r-l5o3uw.r-sdzlij.r-y3da5r.r-1777fci.r-cnw61z.r-3pj75a.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l {
  background-color: var(--Light);
  border-color: var(--Medium);
}

div.css-175oi2r.r-12181gd.r-1pi2tsx.r-13qz1uu.r-1ny4l3l {
  border-style: dashed;
}

a.css-175oi2r.r-1wtj0ep.r-16x9es5.r-1mmae3n.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 {
  background-color: var(--Light);
}

div.css-175oi2r.r-1awozwy.r-18u37iz.r-1wbh5a2.r-11f147o.r-is05cd {
  background-color: var(--Light);
}

div.css-175oi2r.r-14lw9ot {
  background-color: var(--Light);
}

input.r-30o5oe.r-1dz5y72.r-1niwhzg.r-17gur6a.r-1yadl64.r-deolkf.r-nf76sl.r-homxoj.r-poiln3.r-1b43r93.r-1cwl3u0.r-ero68b.r-1ny4l3l.r-1c4vpko.r-1noe1sz.r-p1pxzi.r-1mnahxq.r-1mdbw0j.r-wk8lta.r-13qz1uu.r-fdjqy7 {
  color: var(--Medium);
}

div.css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-n6v787.r-1cwl3u0.r-16dba41.r-k200y {
  color: var(--Medium);
}

section.css-175oi2r.r-jxzhtn.r-1ua6aaf.r-th6na.r-1phboty.r-1udh08x.r-13awgt0.r-f8sm7e.r-13qz1uu.r-1ye8kvj {
  border-color: var(--Medium);
}

div.public-DraftEditorPlaceholder-root{
  color: var(--Medium);
  padding-left: 5px;
}

div.r-1oszu61.r-1niwhzg.r-vqxq0j.r-deolkf.r-6koalj.r-1mlwlqe.r-eqz5dr.r-1ebb2ja.r-crgep1.r-ifefl9.r-bcqeeo.r-t60dpp.r-bnwqim.r-13wfysu.r-417010> div:first-of-type{
  border: 1px;
  border-color: var(--Medium);
  border-style: dashed;
}
a.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-19yznuf.r-64el8z.r-1fkl15p.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 {
  border: 1px solid var(--Medium) !important;
}

/*Creator Studio*/

div.jf-element.flex.jy49p8z0.j7jzx2w0.j264ize0.j-pj4qdm0.j-4a97u80.j-lm1kid13.j-vdda9x11.j-fh4oj112 {
  background-color: var(--Light);
}

div.jf-element {
  background-color: var(--Light)
}

div.jf-element.flex.j-tfoedk0.j-b6h6ao0.j-wvqvm512.jllpup911.j-sn8jo13 {
  background-color: var(--Medium) 
}

div.jf-element.flex.jy49p8z0.j-48ugzz0.j7jzx2w0.jqq55sj0.j-2z2i6p12.j-cw4uj611.jfw6zwx13 {
  border: 1px solid var(--Medium);
  background-color: var(--Light)
}

p.jf-element {
  color: var(--Medium);
}

/*Revenue Sharing*/

div.jf-element.flex.jy49p8z0.jj7l3ky0.j-obw39b0.j-pj4qdm0.j-lm1kid13.j-vdda9x11.j-fh4oj112 {
  background-color: var(--Light);
}

div.jf-element.flex.j-ou8jrn0.j8vunac0.j7jzx2w0.j9l8jq0.j-lm1kid13.j-vdda9x11.j-fh4oj112 {
  background-color: var(--Light);
}

div.jf-element.flex.jok2zx0.j-bsa7ib0.jfa278c0.j-e9iyso12.j-yc57ou11.j-yc57ou13 {
  background-color: var(--Light);
  border: 1px solid var(--Medium);
}

div.jf-element.flex.j-bd9wn50.j8vunac0.j-by1qh80.jfa278c0 {
  background-color: #00000000;
}

div.jf-element.flex.jy49p8z0.j-48ugzz0.j-2w3lte0.jyks6vd0.j7x4ayn0.jspqp9z12.jmsv1kr11.j9fdi2x13 {
  border-color: var(--Medium)
}

a.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3.r-1loqt21 {
  color: var(--Dark);
}

div.css-175oi2r.r-qocrb3.r-kemksi.r-1h0z5md.r-1jx8gzb.r-f8sm7e.r-13qz1uu.r-1ye8kvj {
  background-color: var(--Light);
}

input.r-30o5oe.r-1dz5y72.r-1niwhzg.r-17gur6a.r-1yadl64.r-deolkf.r-b68nfu.r-homxoj.r-poiln3.r-1b43r93.r-1cwl3u0.r-ero68b.r-1ny4l3l.r-1c4vpko.r-1noe1sz.r-p1pxzi.r-1mnahxq.r-1mdbw0j.r-wk8lta.r-13qz1uu.r-fdjqy7 {
  color: var(--Medium);
}

section.css-175oi2r.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-1udh08x.r-13awgt0.r-f8sm7e.r-13qz1uu.r-1ye8kvj {
  border-color: var(--Medium);
}

div.css-175oi2r.r-l00any.r-109y4c4.r-gu4em3 {
  background-color: var(--Medium);
}

div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj {
  background-color: var(--Light);
}

div.flex.cursor-text{
  background-color: var(--Light);
  border-color: var(--Medium);
}

div.font-chirp.max-w-full.whitespace-pre-wrap.break-words.text-text.text-headline1.font-bold.text-center {
  color: var(--Medium);
}

div.font-chirp.max-w-full.whitespace-pre-wrap.break-words.text-gray-700.text-body.font-normal.text-center.max-w-72 {
  color: var(--Medium);
}

div.font-chirp.max-w-full.whitespace-pre-wrap.break-words.text-inherit.line-clamp-1 {
  color: var(--Medium);
}

button.gap-1.inline-flex.items-center.border.border-solid{
  background-color: var(--Light);
  border: 1px solid var(--Medium)
}

div.bg-gray-0 {
  background-color: var(--Light);
  border: 1px solid var(--Medium);
}

div.css-175oi2r.r-kemksi.r-jumn1c.r-xd6kpl.r-gtdqiz.r-ipm5af.r-184en5c {
  background-color: var(--Light);
}

div.css-175oi2r.r-109y4c4.r-gu4em3 {
  background-color: var(--Medium);
}

nav.css-175oi2r.r-1awozwy.r-18u37iz.r-1igl3o0.r-rull8r.r-qklmqi.TimelineTabs {
  border-color: var(--Medium);
}

div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1ua6aaf.r-th6na.r-1phboty.r-16y2uox.r-184en5c.r-1abdc3e.r-1lg4w6u.r-f8sm7e.r-13qz1uu.r-1ye8kvj {
  background-color: var(--Light);
}

div.css-175oi2r.r-1bnu78o.r-f8sm7e.r-m5arl1.r-16y2uox.r-14gqq1x {
  background-color: var(--Medium);
}

div.css-175oi2r.r-1bnu78o.r-f8sm7e.r-m5arl1.r-1p0dtai.r-1d2f490.r-u8s1d.r-zchlnj.r-ipm5af {
  background-color: var(--Medium);
}


button.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-6gpygo.r-1wron08.r-2yi16.r-1qi8awa.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l {
  border-color: var(--Medium);
}

button.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-2yi16.r-1qi8awa.r-3pj75a.r-1loqt21.r-o7ynqc.r-6416eg.r-1ny4l3l {
background-color: var(--Light);
border-color: var(--Medium);
}

span.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3.r-4qtqp9.r-1a11zyx {
  color: var(--Dark);
}

nav.r-1igl3o0 {
  border-color: var(--Medium);
}

div.css-146c3p1.r-1ttztb7.r-qvutc0.r-37j5jr.r-1gkfh8e.r-56xrmm.r-16dba41.r-1awozwy.r-168457u.r-sdzlij.r-6koalj.r-1q142lx.r-10ptun7.r-1777fci.r-285fr0.r-lrvibr.r-3s2u2q.r-1xc7w19.r-1phboty.r-rs99b7.r-1tjplnt.r-2utimh.r-u8s1d.r-1m4drjs {
  background-color: var(--Light);
}

a.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-6gpygo.r-2yi16.r-1qi8awa.r-3pj75a.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 {
  border-color: var(--Medium);
}

div.css-175oi2r.r-1pi2tsx.r-13qz1uu[style] {
background-color: var(--Medium);  
}

a.css-175oi2r.r-sdzlij.r-1phboty.r-rs99b7.r-lrvibr.r-6gpygo.r-2yi16.r-1qi8awa.r-3pj75a.r-o7ynqc.r-6416eg.r-1ny4l3l.r-1loqt21 {
  border-color: var(--Medium);
}
`);
    }
    function onReady(callback) {
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            callback();
        } else {
            window.addEventListener('DOMContentLoaded', callback);
        }
    }

    onReady(() => {
        addMyStyles();
    });
})();