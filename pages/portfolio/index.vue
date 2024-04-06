<template>
  <NuxtLayout name="portfolio">
    <div class="top-container" data-aos="fade-in">
      <h1 class="top-title">Togo Asai</h1>
      <h2 class="">official website</h2>
      <div class="mt-9">
        <h3 class="scroll-arrow">Look Up ➡</h3>
      </div>
      <!-- <h2 class="section-name">Portfolio</h2>
      <picture>
        <source media="(max-width: 960px)" srcset="../../assets/top-image-mobile.png" />
        <img class="top-image" src="../../assets/top-image.png" />
      </picture> -->
    </div>
    <div id="about" class="about-container" data-aos="fade-up">
      <h2 class="section-name">About</h2>
      <div class="about-content">
        <div class="about-text">
          <h3 class="my-name">Togo Asai</h3>
          <p>　工業高校の電気科を卒業し、サーバー運用を約1年経験。その後、英語の学習と新たな経験を積むためにオーストラリアに移住し、メルボルンでバリスタとして半年以上勤務。計一年間の海外経験を経て帰国し、現在はシステムエンジニアとして企画や開発を起こっています。</p>
          <br class="line-break" />
          <p>　具体的には海外進出中スタートアップ企業の業務改善ツール開発や自分企画のWEBサービス開発をチーム作成から行ったりしています。今後はAI時代を見据えた教育系のWEBサービスの開発や、スキル習得支援系のWEBサービスの開発を行いたいと考えています。</p>
        </div>
        <img class="about-image" src="../../assets/prof_square.png" alt="profile-image" />
      </div>
    </div>
    <div id="skill" class="skill-container" data-aos="flip-left" data-aos-duration="3000">
      <h2 class="section-name">Skill</h2>
      <div class="skill-content">
        <div class="py-8 pl-10 pr-5 skill-text">
          <h3 class="skill-h3">Development Skills</h3>
          <ul class="skill-list mb-7">
            <li>HTML, CSS, JavaScript, GAS, PHP, Python</li>
            <li>Vue.js, Nuxt.js, Next.js, Flask, Laravel, API</li>
            <li>Git Hub, Docker, VSCode, AWS, Linux</li>
          </ul>
          <h3 class="skill-h3">Side Skills</h3>
          <ul class="skill-list mb-3">
            <li>Writing, Translate(Eng-Jap), Research</li>
            <li>WordPress, Figma, Photoshop, Adobe Illustrator, Adobe XD, ChatGPT, DALL-E 3, Notion</li>
          </ul>
        </div>
        <img src="../../assets/skill-image.png" />
      </div>
    </div>
    <div id="work" class="work-container" data-aos="zoom-in">
      <h2 class="section-name">Work</h2>
      <div class="work-gallery">
        <div class="gallery-left">
          <a href="https://chapteronebrooklyn.com/">
            <picture>
              <source media="(max-width: 520px)" srcset="../../assets/ch1_mobile.png" />
              <img class="ch1-mobile" src="../../assets/chapteronebrooklyn.com_(iPhone 12 Pro).png" alt="Descriptive text for the image" /> </picture
          ></a>
        </div>
        <div class="gallery-right">
          <div class="gallery-top-right">
            <a href="https://chapteronebrooklyn.com/"><img class="ch1-desktop" src="../../assets/chapteronebrooklyn.com_ (2).png" /></a>
          </div>
          <div class="gallery-bottom-right">
            <div class="translate-wrapper">
              <img class="translate-image" src="../../assets/DALL·E 2023-11-03 19.08.31 - A hyper-realistic image capturing a diverse group of tourists engaging in a lively conversation on a vibrant street in Japan. The group is composed of.png" @click="showTranslate = !showTranslate" />
            </div>
            <div class="gas-wrapper">
              <img class="gas-image" src="../../assets/GAS_img.png" @click="showGas = !showGas" />
            </div>
          </div>
        </div>
        <div class="modal" v-if="showTranslate">
          <button class="close-button" @click="showTranslate = !showTranslate">Close</button>

          <h3>外国人観光客を対象にした通訳兼ガイド in 東京</h3>
          <p>
            形態：業務委託<br />
            詳細：ツアーガイドのご依頼者様と都内を歩きながら英語で観光ガイドを行い、居酒屋で店員さんとご依頼者様の通訳を行います。業務的な説明だけでなく短い間で信頼を得るための親切なコミュニケーションが必要となる業務です。
          </p>
        </div>
        <div class="modal" v-if="showGas">
          <button class="close-button" @click="showGas = !showGas">Close</button>
          <h3>Notion APIとGoogle App Scriptを連携した資料作成業務の自動化ツール開発</h3>
          <p>
            形態：業務委託<br />
            開発期間：約３週間<br />
            詳細：得意先の企業からGASコード作成のご依頼を承りました。要件定義書はご依頼時点で用意していただいており、機能設計からソースコード納品までの業務でした。ヒアリングを行いながらご要望のあった機能追加や修正を行ったことで最終的に高い評価いただきました。
          </p>
        </div>
      </div>
    </div>
    <div class="contact-container" data-aos="fade-in">
      <h2 class="section-name">Contact</h2>
      <div class="contact-content">
        <div class="sns-button-wrapper">
          <a href="mailto:asaitogo@gmail.com">
            <button class="sns-button">
              <email-icon class="sns-icon" :size="36" fillColor="#000E12" />
              <span class="sns-name">Email</span>
            </button>
          </a>
          <a href="https://www.facebook.com/togo.togo.35762241/" target="_blank" rel="noopener noreferrer">
            <button class="sns-button">
              <facebook-icon class="sns-icon" :size="36" fillColor="#000E12" />
              <span class="sns-name">Facebook</span>
            </button>
          </a>
          <a href="https://www.instagram.com/togo.asai/" target="_blank" rel="noopener noreferrer">
            <button class="sns-button">
              <instagram-icon class="sns-icon" :size="36" fillColor="#000E12" />
              <span class="sns-name">Instagram</span>
            </button>
          </a>
        </div>
        <div class="contact-message">お気軽にご連絡ください。<br />お返事をさせていただくまでにお時間を要する場合があります。また、内容によりお返事ができない場合がございますのでご了承ください。</div>
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
import EmailIcon from "vue-material-design-icons/Email.vue";
import FacebookIcon from "vue-material-design-icons/Facebook.vue";
import InstagramIcon from "vue-material-design-icons/Instagram.vue";

export default {
  components: {
    EmailIcon,
    FacebookIcon,
    InstagramIcon,
  },

  data() {
    return {
      showTranslate: false,
      showGas: false,
    };
  },

  mounted() {
    AOS.init({
      duration: 2500,
      delay: 200,
    });
  },
};
</script>

<style scoped>
p {
  font-size: 12px;
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
  margin-top: 70px;
  margin-bottom: 10vh;
  height: 85vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 100%;
}

.top-title {
  font-size: 4rem;
  color: #a0a0a0;
  font-style: normal;
  letter-spacing: 1px;
}

.scroll-arrow {
  writing-mode: vertical-lr;
  font-size: 20px;
  color: rgba(1, 42, 59, 1);
  background-color: #a0a0a0cf;
  /* padding:20px 3px 25vh 3px; */
  padding: 25vh 3px 20px 3px;
}

.top-container picture {
  width: 85%;
  margin-left: auto;
}

.top-image {
  width: 100%;
  display: block;
}

.about-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30vh;
}

.about-image {
  width: 35%;
  margin: auto 0;
  border-radius: 50%;
}

.about-content {
  display: flex;
  margin-left: auto;
  width: 85%;
}

.my-name {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.about-text {
  margin-right: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.line-break {
  display: none;
}

.about-text p {
  font-size: 12px;
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
  margin-bottom: 30vh;
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

.modal {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  margin: 0 auto;
  padding: 50px 30px;
  background: rgb(0, 0, 0);
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 100;
  transition: all 2s ease;
}

.modal h3 {
  margin: 30px 0;
  text-decoration: underline;
}

.modal p {
  font-size: 14px;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-size: 1rem;
  font-weight: bold;
}

.modal h3 {
  margin-bottom: 10px;
}

.contact-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30vh;
}

.contact-content {
  display: flex;
  justify-content: space-between;
  width: 85%;
}

.sns-button {
  background-color: white;
  display: flex;
  align-items: center;
  width: 140px;
  padding: 8px;
  margin: 2rem 0;
}

.sns-button:hover {
  background-color: #858585;
}

.sns-name {
  color: #000e12;
  font-size: 1.1rem;
}

.sns-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
}

.contact-message {
  width: 60%;
  margin: auto;
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
    margin: 60px auto 0 auto;
    width: 90%;
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

  .about-container {
    flex-direction: column;
    margin-bottom: 10vh;
  }

  .about-content {
    display: flex;
    flex-direction: column-reverse;
    margin-left: auto;
    margin: 0 auto;
  }

  .about-image {
    width: 40%;
    margin: 20px auto;
  }

  .about-text {
    line-height: 130%;
    margin-right: 0;
    margin-top: 1.5rem;
  }

  .line-break {
    display: block;
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

  .contact-container {
    flex-direction: column;
    margin-bottom: 10vh;
  }

  .contact-content {
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
  .contact-content {
    flex-direction: column-reverse;
    align-items: center;
  }

  .contact-message {
    margin: 1rem 0;
  }
}
</style>
