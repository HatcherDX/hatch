---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Hatcher | بيئة التطوير المتكاملة للتطوير المتحكم بالذكاء الاصطناعي
description: بيئة تطوير متكاملة مفتوحة المصدر مصممة للمطورين المحترفين للاستفادة من قوة الذكاء الاصطناعي مع الحفاظ على التحكم والدقة في عملية التطوير

hero:
  name: ''
  text: ''
  tagline: 'التضخيم المُتحكَّم لتطوير الذكاء الاصطناعي. بيئة تطوير متكاملة مفتوحة المصدر تمنح المطورين المحترفين تحكماً حتمياً في الذكاء الاصطناعي. توقف عن التخمين. ابدأ في التسليم.'
  actions:
    - theme: brand
      text: البدء
      link: /ar/getting-started
    - theme: alt
      text: عرض على GitHub
      link: https://github.com/HatcherDX/dx-engine
    - theme: alt
      text: الفلسفة
      link: /ar/philosophy

features:
  - icon: 👁️
    title: 'جسر البصري-إلى-الكود'
    details: 'أشر إلى التغييرات البصرية بدلاً من وصفها. التلاعب المباشر لتطبيقك المباشر يترجم إلى تغييرات كود دقيقة وآمنة ومدركة للسياق.'

  - icon: 📚
    title: 'كتيبات الفريق (الدساتير المؤسسية)'
    details: 'استبدل ملفات السياق الثابتة بنظام ديناميكي ومركزي يوفر للذكاء الاصطناعي القواعد المعمارية الصحيحة في الوقت المناسب.'

  - icon: 🔄
    title: 'التصحيح التلقائي للاختبارات'
    details: 'حلقات الاختبار الآلية تضمن أن تغييرات الذكاء الاصطناعي تلبي معايير الجودة الخاصة بك. هذه الحلقة التعزيزية تسمح للذكاء الاصطناعي بالتصحيح الذاتي حتى يثبت أن الكود وظيفي.'
---

## مُبني لعصر الذكاء الاصطناعي

تطوير البرمجيات في نقطة انعطاف. بينما يمكن للذكاء الاصطناعي إنتاج 80% من الكود، يكافح المطورون مع "الميل الأخير" من الضبط الدقيق والتحكم.

**Hatcher يزيل هذا الاحتكاك**، محولاً المحاولة والخطأ إلى سير عمل سلس وبديهي.

### المشاكل التي نحلها

<div class="problem-grid">
  <div class="problem-item">
    <h4>توقف عن الوصف. ابدأ في الإشارة.</h4>
    <p>اردم الفجوة بين تطبيقك المباشر والكود المصدري. جسر البصري-إلى-الكود يترجم نيتك إلى عمل.</p>
  </div>
  
  <div class="problem-item">
    <h4>ذكاؤك الاصطناعي ينسى. الخاص بنا يتذكر.</h4>
    <p>استبدل ملفات السياق الثابتة بكتيبات الفريق الديناميكية التي توفر القواعد المعمارية الصحيحة في الوقت المناسب.</p>
  </div>
  
  <div class="problem-item">
    <h4>لا مزيد من الصناديق السوداء. القوة فقط.</h4>
    <p>حافظ على تحكم حتمي في الذكاء الاصطناعي مع الاختلافات البصرية والاختبارات الآلية وسير عمل مُبني للتحكم، وليس التخمين.</p>
  </div>
</div>

<div class="architect-card">
  <div class="architect-photo">
    <img src="/chriss.jpg" alt="Chriss Mejía">
  </div>
  <div class="architect-bio">
    <h4>Chriss Mejía</h4>
    <h5>كبير مهندسي أنظمة الذكاء الاصطناعي والمؤسس</h5>
    <p>
      مع أكثر من 22 عاماً من الخبرة، Chriss هو مهندس أنظمة متمرس ومؤسس متسلسل. كرس مسيرته المهنية لبناء منصات معقدة وكثيفة البيانات للشركات التي تتراوح من الشركات الناشئة في YC في المراحل المبكرة إلى المؤسسات الكبيرة.
    </p>
    <p>
      Hatcher هو تتويج لسنوات من البحث والتطوير، وُلد من عمله التأسيسي في البنى المعمارية من جانب العميل والأنظمة اللامركزية، واعتقاده العميق أن مستقبل البرمجيات يكمن في تضخيم الحدس البشري وليس استبداله.
    </p>
  </div>
</div>

<style>
.problem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.problem-item {
  padding: 1.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.problem-item h4 {
  margin: 0 0 1rem 0;
  color: var(--vp-c-brand-1);
}

.problem-item p {
  margin: 0;
  color: var(--vp-c-text-2);
}

.architect-card {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  margin: 2rem 0;
}

.architect-photo {
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.architect-photo img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.architect-bio h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  color: var(--vp-c-brand-1);
}

.architect-bio h5 {
  margin: 0 0 1rem 0;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.architect-bio p {
  margin: 0;
}

@media (max-width: 768px) {
  .architect-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>
