---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Hatcher | IDE для Контролируемой Разработки с ИИ
description: Интегрированная среда разработки с открытым исходным кодом, созданная для профессиональных разработчиков, которые хотят использовать мощь ИИ, сохраняя контроль и точность в процессе разработки

hero:
  name: ''
  text: ''
  tagline: 'Контролируемое усиление для разработки ИИ. IDE с открытым исходным кодом, которая дает профессиональным разработчикам детерминистический контроль над ИИ. Прекратите гадать. Начните поставлять.'
  actions:
    - theme: brand
      text: Начать
      link: /ru/getting-started
    - theme: alt
      text: Посмотреть на GitHub
      link: https://github.com/HatcherDX/dx-engine
    - theme: alt
      text: Философия
      link: /ru/philosophy

features:
  - icon: 👁️
    title: 'Мост Визуал-в-Код'
    details: 'Указывайте на визуальные изменения вместо их описания. Прямое манипулирование вашим живым приложением переводится в точные, безопасные и контекстно-осведомленные изменения кода.'

  - icon: 📚
    title: 'Командные Плейбуки (Корпоративные Конституции)'
    details: 'Замените статические файлы контекста динамической централизованной системой, которая предоставляет ИИ правильные архитектурные правила в нужное время.'

  - icon: 🔄
    title: 'Автокоррекция Тестов'
    details: 'Автоматизированные циклы тестирования гарантируют, что изменения ИИ соответствуют вашим стандартам качества. Этот цикл подкрепления позволяет ИИ самокорректироваться до тех пор, пока код не будет доказано функциональным.'
---

## Создано для эры ИИ

Разработка программного обеспечения находится в точке перегиба. Хотя ИИ может генерировать 80% кода, разработчики борются с "последней милей" тонкой настройки и контроля.

**Hatcher устраняет это трение**, превращая метод проб и ошибок в плавный, интуитивный рабочий процесс.

### Проблемы, которые мы решаем

<div class="problem-grid">
  <div class="problem-item">
    <h4>Перестаньте описывать. Начните указывать.</h4>
    <p>Преодолейте разрыв между вашим живым приложением и исходным кодом. Мост Визуал-в-Код переводит ваше намерение в действие.</p>
  </div>
  
  <div class="problem-item">
    <h4>Ваш ИИ забывает. Наш помнит.</h4>
    <p>Замените статические файлы контекста динамическими командными плейбуками, которые предоставляют правильные архитектурные правила в нужное время.</p>
  </div>
  
  <div class="problem-item">
    <h4>Больше никаких черных ящиков. Только сила.</h4>
    <p>Поддерживайте детерминистический контроль над ИИ с визуальными diff-ами, автоматизированным тестированием и рабочим процессом, созданным для контроля, а не догадок.</p>
  </div>
</div>

<div class="architect-card">
  <div class="architect-photo">
    <img src="/chriss.jpg" alt="Chriss Mejía">
  </div>
  <div class="architect-bio">
    <h4>Chriss Mejía</h4>
    <h5>Главный архитектор ИИ-систем и основатель</h5>
    <p>
      Имея более 22 лет опыта, Chriss является опытным системным архитектором и серийным предпринимателем. Его карьера была посвящена созданию сложных, ресурсоемких платформ для компаний от ранних стартапов YC до крупных предприятий.
    </p>
    <p>
      Hatcher — это кульминация многолетних исследований и разработок, рожденная из его основополагающей работы в клиентских архитектурах, децентрализованных системах и его глубокой веры в то, что будущее программного обеспечения заключается в усилении, а не замещении человеческой интуиции.
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
