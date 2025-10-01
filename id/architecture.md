---
title: "Arsitektur | Empat Pilar Hatcher"
description: "Jelajahi arsitektur teknis Hatcher, implementasi langsung dari Empat Pilar kami. Pelajari bagaimana kami membangun IDE yang deterministik, model-agnostic, dan berpusat pada developer."
---

# Arsitektur Hatcher

Arsitektur Hatcher adalah terjemahan langsung dari **Empat Pilar** kami menjadi kode. Setiap pilihan adalah langkah yang disengaja menuju lingkungan pengembangan yang deterministik, kuat, dan menjaga komandan manusia dalam kontrol absolut.

Engineering kami dipandu oleh satu pertanyaan: **Apakah ini melayani pilar-pilar?**

## Empat Pilar: Fondasi Arsitektur Kami

Alih-alih prinsip abstrak, arsitektur kami dibangun di atas empat pilar konkret yang menopang beban. Mereka adalah sistemnya.

### <DocIcon type="constitutional" inline /> Constitutional Engineering

Ini adalah lapisan governance. Didukung oleh **Sistem Playbooks** (mesin konteks dinamis) dan ditegakkan oleh **Hatcher Actions**. Setiap operasi, terutama dari AI, divalidasi terhadap konstitusi yang ditentukan pengguna ini. Pilar ini memungkinkan **Sistem Autopilots** untuk dieksekusi dengan percaya diri sambil menghormati aturan Anda.

### <DocIcon type="time-graph" inline /> The Time Graph

Ini adalah lapisan keamanan dan auditabilitas. Didukung oleh **mesin Git kustom berkinerja tinggi** yang dibangun untuk perubahan granular dan frekuensi tinggi dari pengembangan AI. Ini menyediakan riwayat yang tidak dapat diubah yang menggerakkan **The Time Graph HAT** dan log yang dapat diaudit untuk setiap misi Autopilot.

### <DocIcon type="ai-command" inline /> AI Under Command

Ini adalah lapisan orkestrasi. Bertindak sebagai control plane model-agnostic, mengelola **armada model AI** (seperti Claude dan Gemini). Menerjemahkan niat manusia menjadi operasi AI yang tepat dan terikat secara konstitusional. Pilar ini menggerakkan **Gen HAT** dan **Code HAT**, memberi Anda komando atas beberapa agen AI.

### <DocIcon type="universal-fabricator" inline /> The Universal Fabricator

Ini adalah lapisan eksekusi dan modernisasi. Menggunakan **WebAssembly** untuk menjalankan **Hatcher Functions** polyglot (Delphi, C++, Rust, dll.) di dalam lingkungan Hatcher **EGG** (Enforced Governance Guardrails) yang aman dan deterministik. Ini memungkinkan kode legacy berjalan di mana saja sambil menghormati standar modern.

## Technology Stack & Visi

Pilihan teknologi kami pragmatis dan berpandangan jauh ke depan, menyeimbangkan kebutuhan untuk inovasi cepat dengan komitmen jangka panjang terhadap performa dan keamanan.

| Komponen         | Teknologi                | Mengapa Kami Memilihnya                                                                                                                        |
| :---------------- | :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **Desktop Shell** | **Electron (Saat Ini)**    | Menyediakan fondasi yang kuat dan teruji untuk pengembangan lintas platform yang cepat, memungkinkan kami fokus pada proposisi nilai inti kami. |
| **UI Framework**  | **Vue.js 3 + TypeScript** | Composition API dan type-safety-nya ideal untuk antarmuka IDE profesional yang kompleks dan stateful.                                          |
| **Core (Visi)** | **Tauri + Rust**          | Visi jangka panjang kami adalah menempa inti Hatcher dalam Rust untuk performa, memory safety, dan jaminan keamanan yang tak tertandingi.      |

"Path to Rust" ini adalah pusat janji kami. Kami membangun masa depan pada prototipe yang terbukti, dengan endgame arsitektur yang jelas yang memprioritaskan standar tertinggi dari keunggulan engineering.

## Keamanan & Privasi by Design

Keamanan bukan fitur; ini prasyarat arsitektur.

- **Local-First by Default:** Kode sumber dan riwayat Anda hidup di mesin Anda. Tidak ada yang dikirim ke layanan cloud tanpa tindakan eksplisit Anda, seperti mengaktifkan sinkronisasi tim untuk log audit yang tidak dapat diubah.

- **Zero Code Storage:** Layanan cloud kami (untuk fitur tim seperti Playbooks) **tidak menyimpan salinan lengkap repository Anda**. Kami hanya menyimpan data governance yang diperlukan (seperti Playbooks dan entri log audit), tidak pernah seluruh codebase Anda saat istirahat.

- **Sandboxed Execution:** Hatcher Functions berjalan dalam sandbox WebAssembly yang aman tanpa akses ke sistem Anda secara default.

- **Transparent Operations:** Time Graph dan Human Firewall memastikan Anda memiliki catatan yang jelas dan dapat diaudit dari setiap tindakan dan kata terakhir pada setiap perubahan.

<PageCTA
  title="Siap Menyelam Lebih Dalam?"
  subtitle="Jelajahi bagaimana arsitektur kami memungkinkan generasi berikutnya dari pengembangan yang dibantu AI"
  buttonText="Baca Filosofi"
  buttonLink="/id/philosophy"
  buttonStyle="secondary"
  footer="Dibangun dengan keamanan, privasi, dan kontrol developer sebagai intinya"
/>
