---
layout: home
title: Hatcher | Comande Frotas de IA Que Programam Enquanto Você Dorme
description: A IDE Constitucional onde você comanda frotas de drones de IA. Implante autopilots que seguem seus playbooks com precisão militar. Programe enquanto dorme. Acorde com missões concluídas. 100% local, movido a Rust.
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
