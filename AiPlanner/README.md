<<<<<<< HEAD
# AIPlanner
25년 2학기 모바일SW프로젝트(CD) 1조


# AI 게이미피케이션 학습 관리 앱 기획서

## 1. 기술개발의 목적 및 필요성

### 가. 기술개발의 목적

#### AI와 게이미피케이션을 활용한 목표달성 지원 앱 프로토타입 개발

- **내재적 동기 강화**
  - 게이미피케이션 요소 도입으로 학습 유지력 향상

- **학습 계획 효율성 증대**
  - 우수 학습자 플래너 공유 기능으로 계획 수립 단축 및 진입 장벽 완화
  - AI 기반 일일 퀘스트로 개인 맞춤형 계획 수립

- **협력적 학습 생태계 구축**
  - 길드 커뮤니티 기능으로 소속감과 학습의욕 고취
  - 공동 과제 해결을 위한 협력적 분위기 조성

- **보상을 통한 지속력 강화**
  - 퀘스트 완료 시 포인트 획득 및 보상 교환 시스템
  - 노력의 성취감 직접 제공

### 나. 기술개발의 필요성

- **기존 학습 관리 도구의 한계**
  - 지속적 동기 부여 및 성취감 부족
  - 추상적인 목표설정으로 실행력 저하
  - 플래너 효과를 체감하지 못해 목표 달성 실패 사례 다수

- **게이미피케이션의 교육적 효용성**
  - 다수 연구를 통해 학습 몰입도 및 참여도 향상 효과 입증
  - 참고: 정주영, 이미화(2021), 교육혁신연구

- **개인 맞춤형 루틴 제안**
  - AI가 사용자 계획 분석 및 개인화된 과제 동적 생성
  - 개인 수준에 맞는 도전과제로 학습효율 극대화
  - 달성 성취감 체감 가능한 포인트 보상 시스템

- **소셜 러닝을 통한 학습 지속성 강화**
  - 온라인 커뮤니티(길드)를 통한 정보 공유 및 정서적 지지
  - 주간 길드 퀘스트로 학습자 간 정보 제공 분위기 조성
  - 고립감과 무력감을 구조적으로 해결

---

## 2. 기술개발의 내용 및 방법

### 가. 기술개발의 내용

#### 핵심 기술 스택

- **프론트엔드 (React Native)**
  - JavaScript/TypeScript 기반
  - iOS와 Android 양대 플랫폼 지원
  - 단일 코드로 네이티브 성능 구현

- **백엔드 (Node.js)**
  - Node.js(NestJS) 기반 자체 API 서버 구축
  - 데이터베이스 관리, 인증, 비즈니스 로직   제어
  - 높은 확장성 확보

- **데이터베이스 (PostgreSQL / MongoDB)**
  - PostgreSQL: 사용자 정보, 플래너 내용 등 정합성 중요 데이터
  - MongoDB: 커뮤니티 게시글 등 유연한 구조 필요 데이터

- **AI 활용 개발**
  - 백엔드에서 학습 목표와 플래너 데이터 분석
  - 외부 생성형 AI API(Google Gemini 등) 활용
  - 개인 맞춤형 일일 퀘스트 자동 생성

#### 주요 기능 상세

- **로그인 및 회원가입**
  - 개인 사용자: 프로필, 진척도, 관심 분야 및 학습 목표 설정
  - 학교 및 단체: 이벤트 개최 및 상품 지급 관리자 기능

- **플래너 기능**
  - 일일 학습 일정 생성, 삭제, 편집
  - 우수 학습자 플래너 가져오기 기능

- **AI 기반 일일 퀘스트**
  - 미션 자동 생성: AI API로 매일 실행 가능한 미션 생성
  - 보상 시스템: 퀘스트 완료 시 즉각적 성취감 제공

- **학습 커뮤니티 (길드)**
  - 그룹 생성 및 추천: 공통 학습 주제 기반 그룹 추천 알고리즘
  - 실시간 랭킹 시스템: 개인/그룹 평균 진척도 비교
  - 학습 자료 공유: 교재 및 보조 자료 업로드/공유
  - 차등 권한: 특정 레벨 달성 시 자료 열람 및 의견 작성 권한 부여
  - 그룹 이벤트 및 보상: 길드 과제 달성 시 포인트 제공, 학교/단체 연계 이벤트

### 나. 기술개발의 추진전략 및 방법

#### 애자일 스크럼 방법론 기반

- **스프린트 운영**
  - 2주 단위 스프린트로 개발 사이클 운영
  - 프로젝트 변동성에 유연하게 대응

- **핵심 기능 우선 개발 (MVP)**
  - 프로젝트 기간 내 완성도 높은 결과물 도출

#### 학기(15주) 상세 추진 계획

- **1~2주차**: 아이디어 구체화 및 요구사항 분석, 기능 명세서 작성
- **3~4주차**: UI/UX 설계 및 프로토타입 제작 (Figma 활용)
- **5~10주차**: 프론트엔드 및 백엔드 개발, 주요 기능 구현
- **11~12주차**: 시스템 통합 및 1차 테스트
- **13~14주차**: 버그 수정, 최종 산출물 및 보고서 작성
- **15주차**: 최종 발표

---

## 3. 기술개발의 활용방안 및 기대효과

### 가. 기술개발의 활용방안

- **개인 맞춤형 학습 관리 도구**
  - AI 추천 퀘스트와 시각화된 성장 지표(레벨, 경험치)
  - 자기주도적 학습 습관 형성 및 체계적 목표 관리

- **교육 기관 및 기업 연계 B2B 솔루션**
  - 학교/학원: 학생 학습 진도 통합 관리, 클래스 단위 경쟁 유도
  - 이벤트 개최 및 보상 지급으로 학습 참여율 증대
  - 기업: 신입사원 교육, 직무 능력 향상 프로그램, 팀워크 강화

- **학습 콘텐츠 플랫폼**
  - 플래너 템플릿 마켓플레이스: 우수 학습자 플래너 공유 및 판매
  - 맞춤형 학습자료 추천 서비스: 커뮤니티 내 학습 자료 데이터베이스화

### 나. 기술개발의 기대효과

#### 기술개발의 중요성

- **학습 동기 부여 방식의 혁신**
  - 게임화 요소를 통한 내재적 동기 부여
  - 지속적인 참여 유도하는 새로운 교육 방법론 제시

- **데이터 기반 맞춤형 교육의 실현**
  - 학습 패턴 데이터 분석을 통한 AI 개인별 맞춤 퀘스트 제공
  - 개인의 성취 수준에 맞는 교육 실현

- **차세대 에듀테크(Edutech) 모델 제시**
  - 최신 IT 기술(AI, 실시간 통신)과 교육 콘텐츠 융합
  - 교육 시장 요구에 부응하는 차세대 서비스 발전 가능성

#### 기대효과

**기술적 기대효과**
- AI 기반 개인화 서비스 기술 확보
- 학습 데이터 분석 및 맞춤형 퀘스트 생성 모델
- 추천 알고리즘 확보
- 실시간 대용량 데이터 처리 기술력 증진 (WebSocket 기반)
- 대규모 동시 접속자 처리 및 데이터 동기화 기술력 향상

**사회/경제적 기대효과**
- 자기주도 학습 문화 확산 기여
- MZ세대 학습 흥미 유발 및 지속 가능한 학습 습관 형성
- 교육 격차 해소 지원
- 계획 수립에 어려움을 겪는 학습자들의 학습 편의성 제공
=======
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
>>>>>>> 3068d0c (Initial commit)
