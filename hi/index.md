---
layout: home
title: Hatcher | AI फ्लीट्स को कमांड करें जो आपके सोते समय कोड करें
description: Constitutional IDE जहां आप AI ड्रोन की फ्लीट्स को कमांड करते हैं। Autopilots तैनात करें जो आपके playbooks को मिलिट्री सटीकता के साथ फॉलो करते हैं। सोते समय कोड करें। पूर्ण मिशनों के साथ जागें। 100% लोकल, Rust-संचालित।
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
