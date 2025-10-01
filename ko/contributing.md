---
title: "기여하기 | Hatcher 오픈소스 커뮤니티 참여"
description: "Hatcher IDE에 기여하는 방법, 제어된 AI 개발 도구에 기여하기 위한 설정 가이드, 코딩 표준, 커뮤니티 가이드라인을 배우세요."
---

# Hatcher에 기여하기

Hatcher에 기여하는 데 관심을 가져주셔서 감사합니다! 당신은 AI 시대에 소프트웨어 개발의 미래를 구축하는 운동에 참여하고 있습니다 - 개발자가 AI 증폭의 힘을 활용하면서 절대적 제어를 유지하는 미래입니다. 이 가이드는 시작하기 위한 실용적인 단계를 제공하지만, 아직 읽지 않으셨다면 작업의 "왜"를 이해하기 위해 [**철학**](/ko/philosophy)을 먼저 읽어보시는 것을 권장합니다.

Hatcher에 기여함으로써, 단순히 코드를 작성하는 것이 아니라 인류가 AI 시대에 소프트웨어를 구축하는 방법을 정의하는 데 도움을 주고 있습니다. 버그 수정, 기능, 문서 개선 등 모든 기여는 Controlled Amplification 미션을 발전시킵니다.

## 행동 강령

이 프로젝트에 참여함으로써 [행동 강령](CODE_OF_CONDUCT.md)을 준수하는 데 동의합니다. 기여하기 전에 읽어주세요.

## 시작하기

### 개발 설정

1. **Fork 및 Clone**

   ```bash
   git clone https://github.com/your-username/dx-engine.git
   cd dx-engine
   ```

2. **종속성 설치**

   ```bash
   pnpm install
   ```

3. **개발 서버 시작**
   ```bash
   pnpm dev
   ```

### 프로젝트 구조

```
dx-engine/
├── apps/                           # 애플리케이션 패키지
│   ├── electron/                   # 메인 Electron 프로세스
│   ├── web/                       # 렌더러 프로세스 (Vue 3 + TypeScript)
│   ├── preload/                   # Electron을 위한 Preload 스크립트
│   └── docs/                      # VitePress 문서 사이트
├── universal/                      # 공유 라이브러리 및 시스템
│   ├── terminal-system/           # 터미널 에뮬레이션 및 관리
│   ├── storage/                   # 스토리지 추상화 레이어
│   ├── git-genius/               # Git 작업 및 타임라인
│   ├── shared-rendering/         # 공유 렌더링 유틸리티
│   └── shared-utils/             # 공통 유틸리티
├── tooling/                       # 개발 및 빌드 도구
│   ├── vite-plugin/              # 커스텀 Vite 플러그인
│   ├── translation-system/       # i18n 및 번역 도구
│   └── puppeteer-google-translate/ # 자동 번역
├── scripts/                       # 빌드, 테스트 및 유틸리티 스크립트
├── brand/                         # 브랜드 자산 (로고, 아이콘 등)
└── types/                         # 공유 TypeScript 타입 정의
```

## 기여 방법

### 버그 보고

버그를 보고할 때 다음을 포함하세요:

- **명확한 설명**: 발생한 것 vs. 예상한 것
- **재현 단계**: 문제를 재현하기 위한 상세한 단계
- **환경**: OS, Node.js 버전, pnpm 버전
- **스크린샷**: 해당하는 경우 시각적 증거 포함

이슈 생성 시 [버그 보고 템플릿](.github/ISSUE_TEMPLATE/bug_report.md)을 사용하세요.

### 기능 요청

기능 요청을 환영합니다! 다음을 포함하세요:

- **사용 사례**: 이 기능이 왜 필요한가요?
- **제안된 솔루션**: 어떻게 작동해야 하나요?
- **대안**: 어떤 다른 접근 방식을 고려했나요?

[기능 요청 템플릿](.github/ISSUE_TEMPLATE/feature_request.md)을 사용하세요.

### 코드 기여

#### 시작하기 전에

1. **기존 이슈 확인**: 관련 이슈 또는 기능 요청 찾기
2. **주요 변경 사항 논의**: 중요한 변경에 대해 이슈 열기
3. **작게 시작**: 작고 집중된 기여로 시작

#### 개발 워크플로우

1. **브랜치 생성**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **변경하기**
   - 코딩 표준 따르기 (아래 참조)
   - 새 기능에 대한 테스트 작성
   - 필요에 따라 문서 업데이트

3. **변경 사항 테스트**

   ```bash
   pnpm build
   pnpm test
   ```

4. **변경 사항 커밋**

   ```bash
   git commit -m "feat: add amazing new feature"
   ```

   [Conventional Commits](https://conventionalcommits.org/) 형식을 따릅니다.

5. **Push 및 PR 생성**
   ```bash
   git push origin feature/your-feature-name
   ```

## 코딩 표준

Hatcher는 전체 프로젝트에서 일관성, 유지 관리 가능성 및 고품질 코드를 보장하기 위해 엄격한 코딩 표준을 따릅니다.

**📋 [완전한 코딩 표준 가이드](./coding-standards.md)**

### 빠른 참조

**TypeScript**

- strict 모드를 활성화한 모든 새 코드에 TypeScript 사용
- 객체 형태에 타입보다 인터페이스 선호
- 변수 및 함수에 의미있고 설명적인 이름 사용
- 모든 공개 API에 JSDoc 주석 포함

**Vue.js**

- `<script setup>` 구문과 함께 Composition API 사용
- TypeScript 인터페이스로 props 및 emits 정의
- 재사용 가능한 로직에 composables 선호
- 단일 파일 컴포넌트 구조 따르기: script → template → style

**스타일링**

- 컴포넌트별 CSS에 scoped 스타일 사용
- 클래스 명명에 BEM 방법론 따르기
- 테마를 위해 CSS 커스텀 속성 사용
- 레이아웃에 flexbox 및 CSS Grid 선호

**Git 규칙**

- [Conventional Commits](https://conventionalcommits.org/) 형식 따르기
- 설명적 브랜치 이름 사용: `feature/`, `fix/`, `docs/`, `refactor/`
- 커밋을 원자적이고 단일 변경에 집중하도록 유지

### 코드 품질 도구

표준 시행을 위해 자동화된 도구 사용:

```bash
# 코드 스타일 문제 린트 및 수정
pnpm lint:fix

# 타입 검사
pnpm typecheck

# 모든 테스트 실행
pnpm test

# 코드 포맷
pnpm format
```

### Pre-commit Hooks

Husky는 각 커밋 전에 자동 검사 실행:

- 코드 품질을 위한 ESLint
- TypeScript 컴파일
- 포맷팅을 위한 Prettier
- 중요 경로를 위한 단위 테스트

상세한 가이드라인, 예제 및 모범 사례는 [코딩 표준](/ko/coding-standards) 문서를 참조하세요.

## 문서화

### 문서화 유형

- **코드 주석**: 복잡한 로직 설명
- **README 파일**: 개요 및 설정 지침
- **API 문서화**: 공개 인터페이스 문서화
- **사용자 가이드**: 최종 사용자를 위한 how-to 가이드

### 작성 가이드라인

- 명확하고 간결한 언어 사용
- 코드 예제 포함
- 코드 변경과 함께 문서를 최신 상태로 유지
- 모든 코드 예제 테스트

## Pull Request 프로세스

### 제출 전

- [ ] 코드가 프로젝트 표준을 따름
- [ ] 로컬에서 테스트 통과
- [ ] 문서 업데이트
- [ ] 변경 사항이 집중적이고 원자적

### PR 설명 템플릿

```markdown
## 설명

변경 사항에 대한 간략한 설명

## 변경 유형

- [ ] 버그 수정
- [ ] 새 기능
- [ ] 파괴적 변경
- [ ] 문서 업데이트

## 테스팅

- [ ] 단위 테스트 추가/업데이트
- [ ] 통합 테스트 추가/업데이트
- [ ] 수동 테스트 완료

## 스크린샷 (해당하는 경우)

UI 변경에 대한 전/후 스크린샷 포함
```

### 검토 프로세스

1. **자동화된 검사**: CI/CD 통과 필수
2. **코드 리뷰**: 최소 한 명의 메인테이너 리뷰
3. **테스팅**: 개발 환경에서 변경 사항 테스트
4. **문서화**: 문서 업데이트 확인
5. **병합**: 승인된 PR을 Squash 및 병합

## 릴리스 프로세스

### 버저닝

[시맨틱 버저닝](https://semver.org/)을 따릅니다:

- **MAJOR**: 파괴적 변경
- **MINOR**: 새 기능 (하위 호환)
- **PATCH**: 버그 수정 (하위 호환)

### 릴리스 워크플로우

1. **기능 동결**: 새 기능 수락 중단
2. **테스팅**: 포괄적 테스팅 단계
3. **문서화**: 변경 로그 및 문서 업데이트
4. **릴리스**: 태그된 릴리스 생성
5. **발표**: 커뮤니티에 변경 사항 전달

## 커뮤니티

### 커뮤니케이션 채널

- **GitHub Issues**: 버그 보고 및 기능 요청
- **GitHub Discussions**: 일반 질문 및 아이디어
- **Discord**: 커뮤니티와 실시간 채팅
- **Twitter**: 업데이트를 위해 [@HatcherDX](https://twitter.com/HatcherDX) 팔로우

### 커뮤니티 가이드라인

- **존중**: 모두를 존중으로 대하기
- **건설적**: 문제가 아닌 솔루션에 집중
- **인내심**: 우리 모두 자원봉사자임을 기억
- **도움**: 지식을 공유하고 다른 사람 돕기

## 인정

모든 기여에 감사드립니다! 기여자는 다음에서 인정받습니다:

- **CONTRIBUTORS.md**: 모든 프로젝트 기여자 목록
- **릴리스 노트**: 주요 기여 하이라이트
- **소셜 미디어**: 커뮤니티 기여 소개

## 개발 리소스

### 유용한 링크

- [Vue.js 문서](https://vuejs.org/)
- [Electron 문서](https://electronjs.org/)
- [TypeScript 핸드북](https://typescriptlang.org/)
- [Vite 문서](https://vitejs.dev/)

### 개발 도구

- **VS Code**: Vue 및 TypeScript 확장이 있는 권장 에디터
- **Vue DevTools**: Vue 애플리케이션 디버깅을 위한 브라우저 확장
- **Electron DevTools**: 내장 디버깅 도구

## 질문이 있으신가요?

기여에 대해 질문이 있는 경우:

1. 기존 [GitHub Discussions](https://github.com/HatcherDX/dx-engine/discussions) 확인
2. [Discord 커뮤니티](https://discord.gg/hatcher) 참여
3. 새 토론 또는 이슈 생성

Hatcher에 기여해 주셔서 감사합니다! 함께 AI 지원 개발의 미래를 구축하고 있습니다.

<PageCTA
  title="흔적을 남길 준비가 되셨나요?"
  subtitle="AI 시대를 위한 Constitutional IDE를 구축하는 커뮤니티에 참여하세요"
  buttonText="기여 시작"
  buttonLink="https://github.com/HatcherDX/dx-engine/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
  buttonStyle="secondary"
  footer="모든 기여가 개발의 미래를 형성합니다"
/>
