---
title: "AI Engines | Integrasikan Claude Code, Gemini CLI & Lainnya dengan Hatcher"
description: Konfigurasi dan integrasikan beberapa asisten coding AI dengan Hatcher IDE. Dukungan untuk Claude Code, Gemini CLI, dan AI engines lainnya untuk alur kerja pengembangan yang fleksibel dan kuat.
---

# AI Engines

Hatcher terintegrasi dengan beberapa asisten coding AI untuk memberikan fleksibilitas dan memanfaatkan kekuatan unik dari model yang berbeda.

## Engines yang Didukung

### Claude Code

Claude dari Anthropic adalah AI engine utama kami, dioptimalkan untuk:

- **Pemahaman Kode**: Pemahaman luar biasa terhadap codebase yang ada
- **Pengenalan Pola**: Mempertahankan konsistensi dengan konvensi proyek
- **Refactoring Aman**: Pendekatan konservatif terhadap modifikasi kode
- **Context Awareness**: Menangani codebase besar secara efektif

**Konfigurasi:**

```json
{
  "engine": "claude",
  "model": "claude-3-sonnet",
  "maxTokens": 4096,
  "temperature": 0.1
}
```

### Gemini CLI

Gemini dari Google menyediakan kemampuan pelengkap:

- **Solusi Kreatif**: Pendekatan alternatif untuk masalah kompleks
- **Optimisasi Performa**: Fokus pada pembuatan kode yang efisien
- **Dukungan Multi-bahasa**: Dukungan kuat untuk tech stack yang beragam
- **Iterasi Cepat**: Waktu respons cepat untuk edit cepat

**Konfigurasi:**

```json
{
  "engine": "gemini",
  "model": "gemini-pro",
  "maxTokens": 2048,
  "temperature": 0.2
}
```

## Strategi Pemilihan Engine

Hatcher secara otomatis memilih engine terbaik berdasarkan tugas:

### Tugas Pembuatan Kode

- **Komponen Baru**: Claude untuk struktur, Gemini untuk kreativitas
- **Perbaikan Bug**: Claude untuk analisis hati-hati
- **Performa**: Gemini untuk saran optimisasi

### Pertimbangan Konteks

- **Codebase Besar**: Penanganan konteks superior Claude
- **Prototyping Cepat**: Keunggulan kecepatan Gemini
- **Refactoring Kompleks**: Pendekatan konservatif Claude

## Konfigurasi

### Pengaturan Global

Tetapkan engine default pilihan Anda:

```json
{
  "defaultEngine": "claude",
  "fallbackEngine": "gemini",
  "autoSwitch": true
}
```

### Override Spesifik Proyek

Override engines untuk proyek tertentu:

```json
{
  "engines": {
    "vue": "claude",
    "optimization": "gemini",
    "testing": "claude"
  }
}
```

## Setup API Keys

### Claude API Key

1. Kunjungi [Anthropic Console](https://console.anthropic.com)
2. Buat API key baru
3. Tambahkan ke pengaturan Hatcher atau environment variable:
   ```bash
   export ANTHROPIC_API_KEY="your-key-here"
   ```

### Gemini API Key

1. Kunjungi [Google AI Studio](https://aistudio.google.com)
2. Buat API key baru
3. Konfigurasi di Hatcher:
   ```bash
   export GOOGLE_AI_API_KEY="your-key-here"
   ```

## Perbandingan Engine

| Fitur        | Claude     | Gemini     |
| ------------ | ---------- | ---------- |
| Kualitas Kode | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐   |
| Kecepatan     | ⭐⭐⭐     | ⭐⭐⭐⭐⭐ |
| Ukuran Konteks | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     |
| Kreativitas   | ⭐⭐⭐     | ⭐⭐⭐⭐⭐ |
| Keamanan      | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐   |

## Engines Masa Depan

Kami secara aktif mengerjakan dukungan untuk:

- **GitHub Copilot**: Integrasi langsung dengan alur kerja VS Code
- **OpenAI GPT-4**: Bantuan coding serba guna
- **Model Lokal**: Opsi self-hosted untuk tim yang sadar privasi
- **Custom Engines**: Sistem plugin untuk alat AI proprietary

## Praktik Terbaik

### Prompt Engineering

Hatcher secara otomatis mengoptimalkan prompt untuk setiap engine:

- **Claude**: Konteks detail dan instruksi eksplisit
- **Gemini**: Prompt ringkas dengan tujuan yang jelas

### Penanganan Error

Sistem fallback yang kuat memastikan kontinuitas:

- **Primary Engine Down**: Beralih otomatis ke fallback
- **Rate Limiting**: Antrian request cerdas
- **Masalah Jaringan**: Caching lokal pola umum

### Optimisasi Biaya

- **Manajemen Token**: Kompresi konteks yang efisien
- **Batching Request**: Gabungkan beberapa perubahan kecil
- **Caching**: Gunakan kembali hasil pembuatan kode yang serupa
