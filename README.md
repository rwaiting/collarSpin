# collarSpin

3d rotation

## 1. Getting Started

#### 1.1. Installation

The simplest method is to copy paste this snippet just before your closing `</body>` tag.

```html
<script src="./js/collarSpin.js"></script>
```

#### 1.2. The Basics

```html
<!-- HTML -->
<div class="collar">
    <div class="collarWrapper clearfix">
        <div class="collarItem"></div>
        <div class="collarItem"></div>
        <div class="collarItem"></div>
        <div class="collarItem"></div>
        <div class="collarItem"></div>
        <div class="collarItem"></div>
    </div>
</div>
```
```js
// JavaScript
var spin = new collarSpin(params);
```

## 2. Configuration

#### 2.1. Practical Example

```js
var spin = new collarSpin({
    speed: 20
});
```

#### 2.2. The Starting Defaults

```js
// The rotation speed, the smaller the roll, the faster it rolls
speed: 10,

// The default value
showerWidth: 600,
showerHeight: 300,
container: 'collarWrapper',
list: 'collarItem',
prevBtn: '',
nextBtn: '',

```
