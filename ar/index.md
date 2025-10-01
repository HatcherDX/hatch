---
layout: home
title: Hatcher | قيادة أساطيل الذكاء الاصطناعي التي تبرمج أثناء نومك
description: IDE الدستورية حيث تقود أساطيل من طائرات الذكاء الاصطناعي بدون طيار. انشر autopilots التي تتبع playbooks الخاصة بك بدقة عسكرية. برمج أثناء نومك. استيقظ على مهام مكتملة. 100٪ محلي، مدعوم بـ Rust.
---

<script setup>
import { useLocale } from '../.vitepress/theme/composables/useLocale'
import FeaturesSection from '../.vitepress/theme/components/organisms/FeaturesSection.vue'
import SystemsSection from '../.vitepress/theme/components/organisms/SystemsSection.vue'
import HatsSection from '../.vitepress/theme/components/organisms/HatsSection.vue'
import MetricsSection from '../.vitepress/theme/components/organisms/MetricsSection.vue'
import CTASection from '../.vitepress/theme/components/organisms/CTASection.vue'
import AdmiralSection from '../.vitepress/theme/components/organisms/AdmiralSection.vue'
import FooterSection from '../.vitepress/theme/components/organisms/FooterSection.vue'

const { locale } = useLocale()
</script>

<!-- Hero component is injected via home-hero-before slot -->

<!-- Showcase component will be injected via home-hero-after slot -->

<FeaturesSection :features="locale.features" />

<SystemsSection v-bind="locale.systems" />

<HatsSection v-bind="locale.hats" />

<MetricsSection v-bind="locale.metrics" />

<CTASection v-bind="locale.cta" />

<AdmiralSection v-bind="locale.admiral" />

<FooterSection v-bind="locale.footer" />
