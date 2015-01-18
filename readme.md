metro
=====

AngularJs Metro like in Windows 8 Metro

![metro](https://lh4.googleusercontent.com/proxy/uPfCQYcvCKop5uxIX4dsp_D6cibATryeEiIvqwk_pW3AW4zuvZGCF-Ay0Sfnbh-PFLU4YZs22FD0cII40P0E4YT7hm90lnalQKhcuo1F=w426-h239-p)

##New release - metro v2
Now project includes Bourbon, Neat, GSAP, randomColor, fontawesome, gridster, modernizr. Why?
First version was for presentation, now boss says he likes it, and wants it to be better. 

##Why should i use it?
- Simple directive `<metro></metro>`, soon will be available for old browsers as `<div metro></div>`
- Fully customizable, althought it will be much like Windows 8 Metro, it will have many customization options. Directives were separated, so each has own template, which can be easily modified in `src/components/metro/components/src/modules` folder
- SASS support, with Bourbon it gets really joy to customize
- Minimum requirements, backend only might have tiny models for tile. Requires only `title`,`dynamic`,`icon`,`html`(or `iframe src`) and that's all. Other options are self assignable.
- Also tiles can have child tiles, really deep nesting.


Project is still in development.
##Want Demo??
Run `git clone https://github.com/vko-online/metro.git && cd metro && npm install && bower install gulp`

##Prerequisites
- Some backend for iframes(`string`) inside tiles
- Be creative, make it better that Microsoft!
- Be smart. Use sublime; just kidding

##What we have
- Lazy compilation, DOM stays clear - anti-overload
- Keyboard shortcuts
- <s>Velocity.js</s> GSAP animation
- No routing! Single Powerfull directive
- Tile format (needs clever rethink)
- Deep child linking
- Green potatoes ![sweetie](http://imdocuk.com/content/5/0/7/15077/93620808carre_photo_dossier.jpg)

##Todo
- Better engine, Much better And PoWerRFullL!
- Animations Everywhere! with Staggering
- <s>Js `Row-Column-Height-Width-BgColor` generator algo</s>
- Clever input.search like in sublime
- Grab some beer and have fun =)

The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
