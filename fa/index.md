---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Hatcher | محیط توسعه یکپارچه برای توسعه کنترل‌شده هوش مصنوعی
description: محیط توسعه یکپارچه متن‌باز طراحی‌شده برای توسعه‌دهندگان حرفه‌ای که می‌خواهنح از قدرت هوش مصنوعی استفاده کنند در حالی که کنترل و دقت در فرایند توسعه خود را حفظ می‌کنند

hero:
  name: ''
  text: ''
  tagline: 'تقویت کنترل‌شده برای توسعه هوش مصنوعی. یک IDE متن‌باز که به توسعه‌دهندگان حرفه‌ای کنترل قطعی بر هوش مصنوعی می‌دهد. حدس زدن را متوقف کنید. شروع به تحویل کنید.'
  actions:
    - theme: brand
      text: شروع کنید
      link: /fa/getting-started
    - theme: alt
      text: مشاهده در GitHub
      link: https://github.com/HatcherDX/dx-engine
    - theme: alt
      text: فلسفه
      link: /fa/philosophy

features:
  - icon: 👁️
    title: 'پل بصری-به-کد'
    details: 'به جای توصیف تغییرات بصری، به آنها اشاره کنید. دست‌کاری مستقیم برنامه زنده شما به تغییرات کد دقیق، ایمن و آگاه از زمینه ترجمه می‌شود.'

  - icon: 📚
    title: 'کتاب‌های راهنمای تیم (قانون اساسی شرکتی)'
    details: 'فایل‌های زمینه ثابت را با سیستم پویا و متمرکزی جایگزین کنید که در زمان مناسب قوانین معماری مناسب را به هوش مصنوعی ارائه می‌دهد.'

  - icon: 🔄
    title: 'تصحیح خودکار تست'
    details: 'حلقه‌های تست خودکار اطمینان می‌دهند که تغییرات هوش مصنوعی با استانداردهای کیفی شما مطابقت دارد. این حلقه تقویتی به هوش مصنوعی اجازه می‌دهد تا خود را اصلاح کند تا کد به طور اثبات‌شده عملکردی باشد.'
---

## برای عصر هوش مصنوعی ساخته شده

توسعه نرم‌افزار در نقطه عطفی قرار دارد. در حالی که هوش مصنوعی می‌تواند ۸۰٪ کد تولید کند، توسعه‌دهندگان با "مایل آخر" تنظیم دقیق و کنترل مبارزه می‌کنند.

**Hatcher این اصطکاک را از بین می‌برد** و آزمون و خطا را به گردش کار روان و شهودی تبدیل می‌کند.

### مشکلاتی که ما حل می‌کنیم

<div class="problem-grid">
  <div class="problem-item">
    <h4>توصیف کردن را متوقف کنید. شروع به اشاره کنید.</h4>
    <p>شکاف بین برنامه زنده و کد منبع خود را پر کنید. پل بصری-به-کد نیت شما را به عمل ترجمه می‌کند.</p>
  </div>
  
  <div class="problem-item">
    <h4>هوش مصنوعی شما فراموش می‌کند. مال ما به یاد می‌آورد.</h4>
    <p>فایل‌های زمینه ثابت را با کتاب‌های راهنمای تیم پویا جایگزین کنید که قوانین معماری مناسب را در زمان مناسب ارائه می‌دهند.</p>
  </div>
  
  <div class="problem-item">
    <h4>دیگر جعبه‌های سیاه نیست. فقط قدرت.</h4>
    <p>کنترل قطعی بر هوش مصنوعی را با تفاوت‌های بصری، تست‌های خودکار و گردش کاری که برای کنترل ساخته شده، نه حدس زدن، حفظ کنید.</p>
  </div>
</div>

<div class="architect-card">
  <div class="architect-photo">
    <img src="/chriss.jpg" alt="Chriss Mejía">
  </div>
  <div class="architect-bio">
    <h4>Chriss Mejía</h4>
    <h5>معمار ارشد سیستم‌های هوش مصنوعی و بنیان‌گذار</h5>
    <p>
      Chriss با بیش از ۲۲ سال تجربه، یک معمار سیستم کهنه‌کار و کارآفرین سریالی است. حرفه او به ساختن پلتفرم‌های پیچیده و داده‌محور برای شرکت‌هایی از استارتاپ‌های مرحله اولیه YC تا شرکت‌های بزرگ اختصاص یافته است.
    </p>
    <p>
      Hatcher اوج سال‌ها تحقیق و توسعه است که از کار بنیادی او در معماری‌های سمت کلاینت، سیستم‌های غیرمتمرکز و باور عمیقش که آینده نرم‌افزار در تقویت شهود انسانی نهفته است، نه جایگزینی آن، زاده شده است.
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
