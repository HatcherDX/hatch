<template>
  <span class="doc-icon" :class="[`icon-${type}`, { inline }]">
    <svg v-if="type === 'constitutional'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Constitutional/Temple icon -->
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="type === 'time-graph'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Timeline icon -->
      <path d="M14 16 L10 13" stroke="currentColor" stroke-width="1.5"/>
      <path d="M11 10 L15 7" stroke="currentColor" stroke-width="1"/>
      <circle cx="16" cy="17" r="4" stroke="currentColor" fill="none" stroke-width="1.5"/>
      <circle cx="9" cy="12" r="3" stroke="currentColor" fill="none" stroke-width="1.5"/>
      <circle cx="17" cy="6" r="2" stroke="currentColor" fill="none" stroke-width="1.5"/>
    </svg>

    <svg v-else-if="type === 'ai-command'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- AI/Robot icon -->
      <rect x="3" y="11" width="18" height="10" rx="2" ry="2" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="12" cy="5" r="2" stroke="currentColor" stroke-width="1.5"/>
      <path d="M12 7v4" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="8" cy="16" r="1" fill="currentColor"/>
      <circle cx="16" cy="16" r="1" fill="currentColor"/>
    </svg>

    <svg v-else-if="type === 'universal-fabricator'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Tool/Wrench icon -->
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="type === 'visual'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Eye icon -->
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>
    </svg>

    <svg v-else-if="type === 'gen'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Terminal icon -->
      <polyline points="6,17 11,12 6,7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <line x1="13" x2="18" y1="17" y2="17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>

    <svg v-else-if="type === 'code'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Code icon -->
      <polyline points="16,18 22,12 16,6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="8,6 2,12 8,18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="type === 'rocket'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Rocket icon -->
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a1.96 1.96 0 0 0-2.91-.09z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="type === 'building'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Building/Architecture icon -->
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" stroke="currentColor" stroke-width="1.5"/>
      <path d="M9 22v-4h6v4" stroke="currentColor" stroke-width="1.5"/>
      <path d="M8 6h.01" stroke="currentColor" stroke-width="1.5"/>
      <path d="M16 6h.01" stroke="currentColor" stroke-width="1.5"/>
      <path d="M12 6h.01" stroke="currentColor" stroke-width="1.5"/>
      <path d="M12 10h.01" stroke="currentColor" stroke-width="1.5"/>
      <path d="M12 14h.01" stroke="currentColor" stroke-width="1.5"/>
      <path d="M8 10h.01" stroke="currentColor" stroke-width="1.5"/>
      <path d="M8 14h.01" stroke="currentColor" stroke-width="1.5"/>
      <path d="M16 10h.01" stroke="currentColor" stroke-width="1.5"/>
      <path d="M16 14h.01" stroke="currentColor" stroke-width="1.5"/>
    </svg>

    <svg v-else-if="type === 'folder'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Folder icon -->
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="type === 'folder-open'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Folder Open icon -->
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 10h20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <svg v-else-if="type === 'file'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- File icon -->
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <polyline points="13 2 13 9 20 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
</template>

<script setup lang="ts">
interface Props {
  type: 'constitutional' | 'time-graph' | 'ai-command' | 'universal-fabricator' |
        'visual' | 'gen' | 'code' | 'rocket' | 'building' | 'folder' | 'folder-open' | 'file'
  inline?: boolean
}

withDefaults(defineProps<Props>(), {
  inline: false
})
</script>

<style scoped>
.doc-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-brand-1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.doc-icon.inline {
  display: inline-flex;
  vertical-align: middle;
  margin-right: 0.5rem;
}

.doc-icon:not(.inline) {
  display: flex;
  margin-bottom: 0.5rem;
}

.doc-icon svg {
  width: 24px;
  height: 24px;
}

/* Hover effects for different types */
.icon-constitutional:hover {
  color: #FFD700;
  filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.4));
}

.icon-time-graph:hover {
  color: #00D4FF;
  filter: drop-shadow(0 0 8px rgba(0, 212, 255, 0.4));
}

.icon-ai-command:hover {
  color: #FF00FF;
  filter: drop-shadow(0 0 8px rgba(255, 0, 255, 0.4));
}

.icon-universal-fabricator:hover {
  color: #00FF88;
  filter: drop-shadow(0 0 8px rgba(0, 255, 136, 0.4));
}

.icon-visual:hover {
  color: #FF6B6B;
  filter: drop-shadow(0 0 8px rgba(255, 107, 107, 0.4));
}

.icon-gen:hover {
  color: #4ECDC4;
  filter: drop-shadow(0 0 8px rgba(78, 205, 196, 0.4));
}

.icon-code:hover {
  color: #95E1D3;
  filter: drop-shadow(0 0 8px rgba(149, 225, 211, 0.4));
}

.icon-rocket:hover {
  color: #FFA502;
  filter: drop-shadow(0 0 8px rgba(255, 165, 2, 0.4));
}

.icon-building:hover {
  color: #C56CF0;
  filter: drop-shadow(0 0 8px rgba(197, 108, 240, 0.4));
}

.icon-folder:hover {
  color: #FFA502;
  filter: drop-shadow(0 0 8px rgba(255, 165, 2, 0.4));
}

.icon-folder-open:hover {
  color: #FFD700;
  filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.4));
}

.icon-file:hover {
  color: #74B9FF;
  filter: drop-shadow(0 0 8px rgba(116, 185, 255, 0.4));
}

/* In headings */
h1 .doc-icon svg,
h2 .doc-icon svg,
h3 .doc-icon svg {
  width: 1.2em;
  height: 1.2em;
  vertical-align: -0.2em;
}

/* Dark mode adjustments */
.dark .doc-icon {
  color: var(--vp-c-brand-1);
}
</style>