<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <div class="section">
      <h1>Portfolio</h1>
      <p>Kirstin Charters</p>
    </div>
    <div class="section">
      <h1>About</h1>
      <p>Currently a Self Employed contractor for a IT consulting company in Sydney. 
      I used to work in Hospitality until I decided I wanted a career change 4 years ago, now here I am with a Bachelor in IT.</p>
    </div>

    <div class="section">
      <h1>Work</h1>
      <span class="divlink">
        <a href="http://dev.workarena.com.au/" class="link">
          <span class="mask">
            <div class="link-container">
              <span class="link-title1 title">Work Arena - Development</span>
              <span class="link-title2 title">READ MORE</span>
            </div>
          </span>
          <div class="link-icon">
            <svg
              class="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
              />
            </svg>
            <svg
              class="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
              />
            </svg>
          </div>
        </a>
      </span>
      <span>
        <a href="https://github.com/kcharters" class="link">
          <span class="mask">
            <div class="link-container">
              <span class="link-title1 title">GitHub Repo</span>
              <span class="link-title2 title">READ MORE</span>
            </div>
          </span>
          <div class="link-icon">
            <svg
              class="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
              />
            </svg>
            <svg
              class="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
              />
            </svg>
          </div>
        </a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/kirstin-charters/" class="link">
          <span class="mask">
            <div class="link-container">
              <span class="link-title1 title">Linkedin</span>
              <span class="link-title2 title">READ MORE</span>
            </div>
          </span>
          <div class="link-icon">
            <svg
              class="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
              />
            </svg>
            <svg
              class="icon"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
              />
            </svg>
          </div>
        </a>
      </span>
    </div>

    <div class="section">
      <h1>Contact</h1>
      <h5>Email</h5>
      <p>k.charters@hotmail.co.nz</p>
    </div>
  </full-page>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      options: {
        navigation: true,
        loopBottom: true,
        loopTop: true,
        dragAndMove: true,
      },
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap");
h1 {
  font-size: xx-large;
  font-family: "Zen Kurenaido", sans-serif;
}
p {
  padding-left: 2%;
}
div {
  margin: auto;
  width: 60vw;
  height: 60vw;
  padding: 10px;
}

.link {
  height: 30px;
  align-items: center;
  color: #000;
  text-decoration: none;
  display: flex;
}

/* Hide extra text */
.mask {
  position: relative;
  padding: 0;
  height: 30px;

  /*  Remove overflow to see how it works　:) */
  overflow: hidden;
}

.link-container {
  transition: transform 0.4s ease;
}

.title {
  display: block;

  /*  Set same font-size and line height  */
  font-size: 20px;
  line-height: 20px;

  transition: transform 0.4s ease;
}

.link-title1 {
  transform-origin: right center;
}

.link-title2 {
  transform-origin: left center;
  transform: rotate(20deg);
}

.link-icon {
  position: relative;
  width: 35px;
  height: 35px;
  background: #f8f8ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;

  /*  Remove overflow to see how it works　:) */
  overflow: hidden;
}

.icon {
  display: block;
  position: absolute;
  transition: transform 0.4s ease;
}

.icon:nth-child(2) {
  transform: translate(-40px);
}

/* Hover Action*/

/* Move up two texts (20px = font-size) */
.link:hover .link-container {
  transform: translateY(-20px);
}

/* Rotate texts a little bit */
.link:hover .link-title1 {
  transform: rotate(20deg);
}

.link:hover .link-title2 {
  transform: rotate(0);
}

/* Move arrows to right */
.link:hover .icon:first-child {
  transform: translate(40px);
}

.link:hover .icon:nth-child(2) {
  transform: translate(0px);
}
</style>
