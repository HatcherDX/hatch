---
layout: home
title: "Hatcher | 잠자는 동안 코드를 작성하는 AI 함대를 지휘하세요"
description: "AI 드론 함대를 지휘하는 Constitutional IDE입니다. 군사적 정밀도로 플레이북을 따르는 Autopilots를 배치하세요. 잠자는 동안 코드를 작성하고, 완료된 임무와 함께 일어나세요. 100% 로컬, Rust 기반."
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
