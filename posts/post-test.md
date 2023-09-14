---
title: 'Test my latest post'
date: '2023-09-14'
---

# Examples of various markdown notations

1. foo
2. bar
    1. fizz
    2. buzz

- hoge huga
- Highlight
    - normal text
    - (Same with asterisk or hyphen.)
        - _italics_
        - **bold**
        - ***bold and italics***
    - ~~strikethrough~~

Sub-script:  
H<sub>2</sub>SO<sub>4</sub>  
log<sub>2</sub>8 = 3

Super-script:  
x<sup>2</sup> + y<sup>2</sup> = 1

[x] checked

[ ] unchecked

table

| foo | bar |
| --- | --- |
| fizz | buzz |
| hoge | huga |

link test:[Google](https://www.google.com/ "Google")

image test

![test](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png "test")


`inline code`

> blockquote

---

### Code block

```html
<div>
  <p>test</p>
</div>
```

```css
.test {
  color: red;
}
```

```js
const test = 'test';
```

```jsx
const Test = () => {
  return (
    <div>
      <p>test</p>
    </div>
  );
};
```

```ts
const test: string = 'test';
```

```tsx
const Test = (): JSX.Element => {
  return (
    <div>
      <p>test</p>
    </div>
  );
};
```

```json
{
  "test": "test"
}
```

```bash
$ echo 'test'
```
    
```diff
- const test = 'test';
+ const test = "test";
```


# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6


なお、GitHubのREADME.mdは独自ルールがあるので注意。
JSONなどマークダウン中での外部ファイルの読み込みは基本的にできない。

https://docs.github.com/ja/github/writing-on-github/basic-writing-and-formatting-syntax