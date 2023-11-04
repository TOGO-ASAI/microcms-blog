<template>
  <NuxtLayout name="portfolio">
    <div class="top-container" data-aos="fade-in" data-aos-duration="3000">
      <h2 class="section-name">Portfolio</h2>
      <picture>
        <source
          media="(max-width: 960px)"
          srcset="../../assets/top-image-mobile.png"
        />
        <img class="top-image" src="../../assets/top-image.png" />
      </picture>
    </div>
    <div id="profile" class="profile-container" data-aos="fade-up">
      <h2 class="section-name">About</h2>
      <div class="profile-content">
        <div class="profile-text">
          <h3 class="my-name">Togo Asai</h3>
          <p>
            工業高校の電気科を卒業し、システム運用を約1年経験。その後、英語の学習と新たな経験を積むためにオーストラリアに移住し、言語学校卒業後メルボルンでバリスタとして勤務しながら計１年間生活。帰国後はシステムエンジニアとして日本のIT企業に就職して現在も勤務中。
          </p>
          <br />
          <p>
            スキルの提供によりクライアントの問題解決を行いながら自身のスキルを高めるwin-winの状態を作ることを意識して活動しています。現在のところは本業以外の時間で通訳・翻訳・開発系（WEBまたは業務効率改善計が中心）の案件を受注していますが、自身の事業を主体にグローバルに活動できるようになることが目標です。また、科学的根拠をもとに業務効率及び満足度の改善を目的としたサービスを開発中です。
          </p>
        </div>
        <img
          class="profile-image"
          src="../../assets/profile-image.png"
          alt="proifle-image"
        />
      </div>
    </div>
    <div
      id="skill"
      class="skill-container"
      data-aos="flip-left"
      data-aos-duration="3000"
    >
      <h2 class="section-name">Skill</h2>
      <div class="skill-content">
        <div class="py-8 pl-10 pr-5 skill-text">
          <h3 class="skill-h3">Development</h3>
          <ul class="skill-list mb-7">
            <li>HTML, CSS, JavaScript, GAS, PHP, Python</li>
            <li>Vue.js, Nuxt.js, Flask, API</li>
            <li>Git, Docker, VSCode, AWS, Linux</li>
          </ul>
          <h3 class="skill-h3">Side Gigs</h3>
          <ul class="skill-list mb-3">
            <li>Writing, Translate(Eng-Jap), Research</li>
            <li>
              WordPress, Figma, Photoshop, Adobe Illustrator, Adobe XD, ChatGPT,
              DALL-E 3, Notion
            </li>
          </ul>
        </div>
        <img src="../../assets/skill-image.png" />
      </div>
    </div>
    <div
      id="work"
      class="work-container"
      data-aos="zoom-in"
      data-aos-duration="3000"
    >
      <h2 class="section-name">Work</h2>
      <div class="work-gallery">
        <div class="gallery-left">
          <Nuxt-link to="/">
            <picture>
              <source
                media="(max-width: 520px)"
                srcset="../../assets/ch1_mobile.png"
              />
              <img
                class="ch1-mobile"
                src="../../assets/chapteronebrooklyn.com_(iPhone 12 Pro).png"
                alt="Descriptive text for the image"
              /> </picture
          ></Nuxt-link>
        </div>
        <div class="gallery-right">
          <div class="gallery-top-right">
            <nuxt-link to="/"
              ><img
                class="ch1-desktop"
                src="../../assets/chapteronebrooklyn.com_ (2).png"
            /></nuxt-link>
          </div>
          <div class="gallery-bottom-right">
            <div class="translate-wrapper">
              <nuxt-link to="/"
                ><img
                  class="translate-image"
                  src="../../assets/DALL·E 2023-11-03 19.08.31 - A hyper-realistic image capturing a diverse group of tourists engaging in a lively conversation on a vibrant street in Japan. The group is composed of.png"
              /></nuxt-link>
            </div>
            <div class="gas-wrapper">
              <nuxt-link to="/"
                ><img class="gas-image" src="../../assets/GAS_img.png"
              /></nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init({
      duration: 2500,
      delay: 200,
    });
  },
};
</script>

<style scoped>
* {
  font-family: "Yu Mincho", "YuMincho", "游明朝体", "游明朝", "ヒラギノ明朝 Pro",
    "Hiragino Mincho Pro", "ＭＳ Ｐ明朝", "MS PMincho", serif;
  color: rgb(166, 166, 166);
}

p {
  font-size: 14px;
}

.section-name {
  margin: 0;
  text-align: center;
  writing-mode: vertical-lr;
  color: #b9b9b9;
  text-shadow: 0px 4px 4px rgba(0, 178, 255, 0.8);
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.5px;
}

.top-container {
  margin-top: 60px;
  margin-bottom: 30vh;
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.top-container picture {
  width: 85%;
  margin-left: auto;
}

.top-image {
  width: 100%;
  display: block;
}

.profile-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30vh;
}

.profile-image {
  width: 45%;
  margin: auto 0;
}

.profile-content {
  display: flex;
  margin-left: auto;
  width: 85%;
}

.my-name {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.profile-text {
  margin-right: 1.5rem;
}

.profile-text p {
  font-size: 14px;
  line-height: 1.8rem;
}

.skill-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30vh;
}

.skill-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.skill-content {
  display: flex;
  background-color: #132136;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  width: 85%;
  font-size: 13px;
}

.skill-h3 {
  margin-bottom: 10px;
  color: #00b2ff;
  font-size: 18px;
}

.skill-list {
  line-height: 180%;
}

.skill-content img {
  width: 65%;
}

.work-container {
  display: flex;
  justify-content: space-between;
  align-content: space-between;
}

.work-gallery {
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  width: 85%;
  margin-left: auto;
}

.gallery-left {
  width: 33%;
  height: 100%;
  margin: 10px;
}

.gallery-right {
  margin: 10px;
  width: 67%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ch1-mobile {
  width: 100%;
}

.ch1-desktop {
  width: 95%;
}

.gallery-bottom-right {
  display: flex;
  align-items: flex-end;
}

.translate-wrapper {
  width: 50%;
}

.gas-wrapper {
  width: 50%;
}

.translate-image {
  width: 95%;
}

.gas-image {
  width: 95%;
}

@media screen and (max-width: 960px) {
  p {
    font-size: 12px;
  }

  .section-name {
    margin: 0 auto;
    text-align: center;
    font-size: 20px;
    color: #b9b9b9;
    text-shadow: 0px 4px 4px rgba(0, 178, 255, 0.8);
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.5px;
    writing-mode: horizontal-tb;
  }

  .top-container {
    flex-direction: column;
    margin-bottom: 10vh;
    margin-top: 50px;
    width: 100vw;
  }
  .top-container picture {
    width: 100%;
    margin-left: 0;
  }

  .top-image {
    margin-left: 0;
    margin-right: 0;
  }

  .top-container img {
    margin: 20px auto;
  }

  .profile-container {
    flex-direction: column;
    margin-bottom: 10vh;
  }

  .profile-content {
    display: flex;
    flex-direction: column-reverse;
    margin-left: auto;
    margin: 0 auto;
  }

  .profile-image {
    width: 40%;
    margin: 20px auto;
  }

  .profile-text {
    line-height: 130%;
    margin-right: 0;
    margin-top: 1.5rem;
  }

  .skill-container {
    flex-direction: column;
    margin-bottom: 10vh;
  }

  .skill-content {
    margin: 0 auto;
    flex-direction: column-reverse;
  }

  .skill-content img {
    width: 100%;
  }

  .work-container {
    flex-direction: column;
    margin-bottom: 10vh;
  }

  .work-gallery {
    width: 85%;
    margin: 0 auto;
  }
}

@media screen and (max-width: 520px) {
  .top-container {
    margin-top: 20px;
  }
  .work-gallery {
    flex-direction: column;
    align-items: center;
  }

  .gallery-left,
  .gallery-right,
  .gallery-bottom-right {
    width: 100%;
  }

  .gallery-left,
  .gallery-top-right {
    margin-bottom: 10vh;
  }

  .ch1-desktop {
    width: 100%;
  }
}
</style>
