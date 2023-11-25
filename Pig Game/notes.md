# <span style = "color: #4c8aed;"> **DOM and DOM Manipulation** </span>

<span style = "color: #4cedc7;"><span style = "color: red;">**DOM**</span> stands for:
<br />
<span style="color: green;">**D**</span>ocument
<br />
<span style="color: green">**O**</span>bject
<br />
<span style="color: green">**M**</span>odel
</span>
<br />

## <span style = "color: #4c8aed;"> _What is the DOM?_ </span>

---

<span style="color: #4cedc7;"><span style="color: red;">DOM</span> is the structured representation of HTML documents. It allows javascript to access HTML elements and styles to manipulate them.</span>

<br />

<span style="color: #4cedc7;">The <span style="color: red;">DOM</span> is a tree structure generated as soon as the browser loads and is a complete representation of the HTML page itself. Anything that is on the HTML page **must** be in the DOM tree so it can be manipulated in many complex ways.</span>

<br />

## <span style = "color: #4c8aed;"> _DOM Tree in detail_ </span>

---

<span style="color: green;">Document</span> <is style="color: #4cedc7;">is a special object we have access to in javascript and serves as an entry point into the </span> <span style="color: red;">DOM</span>. <span style="color: #4cedc7;">For example, to select an object within the page, you would have to start at the document so it would look like this:</span>

<span style = "color: yellow">

```javscript
document.querySelector()
```

<span style="color: green;">HTML</span> <is style="color: #4cedc7;"> is the root element in all HTML documents</span>

<span style="color: green;">Head & Body</span> <is style="color: #4cedc7;"> are normally the two child elements of HTML and they are adjacent from each other(they are siblings)</span>

<span style="color: green;">Title & Section</span> <is style="color: #4cedc7;"> are child elements of the head & body and contain the section of the page and the title</span>

<span style="color: green;">The rest...</span> <is style="color: #4cedc7;"> are elements that are in the page such as paragraphs, forms, inputs, etc. All of the information in the tree from here on depends on how the page is nested and what the page contains.</span>

<span style="color: yellow;">See an example of a <span style = "color: red">DOM</span> Tree below:</span>
<br />
<img src = "../starter/DOM.png">

<br />

## <span style = "color: #4c8aed"> _A few other notes regrading the DOM..._ </span>

---

<span style = "color: #4cedc7;">The <span style = "color: red;">DOM</span> and all the properties used to manipulate the DOM are **NOT** a part of javascript. They are part of a web API that **CAN** interact with javascript.</span>

<span style = "color: #4cedc7;">**API** stands for:
<br />
<span style="color: green;">**A**</span>pplication
<br />
<span style="color: green">**P**</span>rogramming
<br />
<span style="color: green">**I**</span>nterface
</span>

<br />

# <span style = "color: #4c8aed;"> **Javascript DOM Manipulation Tools** </span>

<span style = "color: #4cedc7;">The tools required to manipulate the DOM are extremely important and will help you progress as a programmer.</span>

<br />

## <span style = "color: #4c8aed;"> _The document.querySelector()..._ </span>

---

<span style = "color: #4cedc7;">The <span style = "color: red;">**document.querySelector()**</span>is the most basic tool in manipulating the <span style = "color: red;">DOM</span>, yet one of the most used. The <span style = "color: red;">**document.querySelector()**</span> takes the class or id in as an argument (to select an element), and can even change the entire element. For example, if you wanted to change the text content of an paragraph "x" on a page, you would have to add .textcontent on the end of the <span style = "color: red;">**document.querySelector()**</span>(_See example below👇_). To change a object on the page you must add a specific selector on the end of the selector.</span>

```html
<!--Some HTML...-->
<p class="x">Some text</p>
```

```javascript
document.querySelector('.x') = 'Javascript is cool!';
```

## <span style = "color: #4c8aed;"> _The 'click' property..._ </span>

---

<span style = "color: #4cedc7;">The <span style = "color: red;">'click'</span> property is an argument in the querySelector that allows an event to harppen when a button is clicked. Notice that this can only be used when there is an event listener and this is a argument **in** the event listener.</span>

```HTML
<button class = "btn check">Check!</button>
```

```javascript
document.querySelector('.check').addEventListener('click', function () {
  //                      The 'click' property is here👆
  console.log(document.querySelector('.guess').value);
});
```

<br />

## <span style = "color: #4c8aed;"> _The Event listener..._ </span>

---

<span style = "color: #4cedc7;">The <span style = "color: red;">.addEventListener</span> is a tool in javascript that takes in a event to listen for as an argument (<span style = "color: yellow;"> An event is something that happens on the page such as a click, input, etc...</span>).</span>

```HTML
<button class = "btn check">Check!</button>
```

```javascript
document.querySelector('.check').addEventListener('click', function () {
  //                      The 'click' property is here👆
  console.log(document.querySelector('.guess').value);
});
```

NOTICE: This is a function but the javascript engine DOES automatically call it, so we do not have to

<br />

## <span style = "color: #4c8aed;"> _The .style property..._ </span>

---

<span style = "color: #4cedc7;">You can style properties in css through the <span style = "color: red;">DOM</span> by the <span style = "color: red;">.style</span> property. This takes place after the argument in the querySelector(). After this selector you may select what you want to change about the property (background-color, color, etc.)</span>

<br />

## <span style = "color: #4c8aed;"> _The DRY Principle..._ </span>
---
<span style = "color: #4cedc7;"> <span style = "color: red;">The DRY principle</span> (*Don't repeat yourself*) is the principle which states that you should never repeat code. When we have duplicate code and there is an error, we have to change it in a lot of areas. This can be a nightmare to fix, so the <span style = "color: red;">DRY Principle</span> fixes that. **Refactoring** is the process of identifying and fixing code that repeats itself.</span>

<br />

## <span style = "color: #4c8aed;"> _Adding and removing classes..._ </span>
---

<span style = "color: #4cedc7;"> You can add and remove classes by using the <span style = "color: red;">.classList</span> property and then <span style = "color: red;">.add</span> or <span style = "color: red;">.remove</span>. This will simply add a already specified class to the element. Keep in mind that when you specify the class to be added after <span style = "color: red;">.add</span> or <span style = "color: red;">.remove</span>, you must ***NOT*** put a dot before the class name.</span>

<br />

NOTICE: When specifying classes to add or remove do NOT use a dot before the class or id name 

<br />

## <span style = "color: #4c8aed;"> _Keypress event..._ </span>
---

<span style = "color: #4cedc7;">A <span style = "color: red;">keypress event</span> is simply when a key is pressed. There are multiple types of <span style = "color: red;">keypress events:</span> <span style = "color: red;">keyup,</span> <span style = "color: red;">keydown,</span> and <span style = "color: red;">keypress.</span> Definitions are as follows:</span>

<span style="color: green">1) Keypress</span><span style="color: violet"> --> </span><span style="color: #4cedc7">Run continuously as we *keep* our finger on the key</span>

<span style="color: green">2) Keyup</span><span style="color: violet"> --> </span><span style="color: #4cedc7">Run while our key is *off* they keyboard</span>

<span style="color: green">3) Keydown</span><span style="color: violet"> --> </span><span style="color: #4cedc7">Run while we press *down* on the key</span>