class: center, middle

# Node.js Streams as a piece of cake 🍰

.center[Andrey Bidinotto] <img src="./img/twitter.png" style='height: 20px; width: 20px;'/> [@andreymoser](http://twitter.com/andreymoser)


.center[[12th Node.js POA Meetup](https://www.meetup.com/pt-BR/Node-js-Porto-Alegre-Meetup/events/255164211/)] November 2018


---

# Why streams?

.center[<img src="./img/gif_stream.gif" style='height: 100%; width: 100%; object-fit: contain'>]

???

Notes...

---

# Stream (Computer Science)

.center[<img src="./img/stream_computing.jpg" style='height: 50%; width: 50%; object-fit: contain'>]

> > "Stream is a sequence of data elements made available over time." (Wikipedia)

???

Notes...

---

# Stream and buffer example

.center[<img src="./img/stream_example.gif" style='height: 60%; width: 60%; object-fit: contain'>]

???

Notes...

---

# Node.js Streams talk topics

--
- Source & Destination (I/O)

--
- Data (object mode)

--
- Stream buffering

--
- Event Emitters

--
- Stream Types

--
- Readable stream 

--
- Writable stream

--
- Streams and pipes

--
- Pipeline

--
- Stream and promises

--
- Highland 

???

Notes...

---

# Source & Destination (I/O)

<img src="./img/node-streams-io.png" style='height: 60%; width: 60%; object-fit: contain'>

???

Notes...

---

# Data: `objectMode`

- String

```javascript
stream.write('hello stream');
```

- Buffer

```javascript
stream.write(Buffer.from('hello stream'));
```

- Custom types (except for `null`)

???

Notes...

---

# Stream buffering

- ### Backpressuring
  * `highWaterMark` mechanism

???

Notes...

---     

# Event Emitters

???

Notes...

---

# Node.js stream types

- ### Readable: *read data (source)*
--

- ### Writable: *write data (destination)*
--

- ### Duplex: *readable and writeble*
--

- ### Transform: *duplex calculated*

???

Notes...

---

# Readable stream 

???

Notes...

---

# Writable stream

???

Notes...

---

# Streams and pipes

???

Notes...

---

# Pipeline

???

Notes...

---

# Stream and promises

???

Notes...

---

# Highland library

???

Notes...


---

# References

- https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93
- http://dominictarr.com
- https://nodejs.org/api/stream.html#stream_stream
- http://highlandjs.org
- http://www.planetoftunes.com/computer/caching-and-streaming.html#.W8tEOhNKiAw

- https://en.wikipedia.org/wiki/Stream_(computing)

- https://nodejs.org/en/docs/guides/backpressuring-in-streams/

- https://www.slideshare.net/sspringer82/streams-in-nodejs
- https://codeburst.io/nodejs-streams-demystified-e0b583f0005
---

# .center[Thank you! :)]

## .center[<img src="./img/twitter.png" style='height: 40px; width: 40px;'/> [@andreymoser](http://twitter.com/andreymoser)]

---

# Notes:

- https://nodejs.org/api/stream.html#stream_types_of_streams
- https://github.com/gnab/remark/wiki/Markdown#class
- https://en.support.wordpress.com/markdown-quick-reference/
- https://github.com/gnab/remark/wiki/Markdown#slide-notes