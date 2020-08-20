# <p align="center">이슈트래커 서비스</p>

> 이슈를 마일스톤과 라벨을 통해 보다 유용하게 관리하는 웹 서비스  
> 기간: 2020.06.08 ~ 2020.07.17

### Service Page

- <a href="http://54.180.77.46/" target="_blank">링크(클릭)</a>

#### Front-end

- 팀원: [Hoo](https://github.com/choisohyun), [Sally](https://github.com/sally4405)

#### Back-end

- 팀원: [Ever](https://github.com/hsik0225), [Jay](https://github.com/beginin15)

## Index

> 프론트 엔드 작업을 중점적으로 설명합니다.

1. [기능](#1-기능)
2. [설계 및 구현](#2-설계-및-구현)
3. [협업 방식](#3-협업-방식)
4. [학습 내용](#4-학습-내용)

### 1. 기능

- 회원 인증 기능
- 이슈 CRUD
- 이슈 필터 기능
- 라벨 CRUD
- 마일스톤 CRUD

![이슈트래커 기능 001](https://user-images.githubusercontent.com/30427711/90753957-3538fe00-e314-11ea-8159-fb25d7a058af.jpeg)

<img width="859" alt="Screen Shot 2020-08-20 at 22 42 01" src="https://user-images.githubusercontent.com/30427711/90777451-675b5780-e336-11ea-8f3b-33dca6c5d56f.png">

### 2. 설계 및 구현

#### ① Webpack 설정하기

- 주요 구성

```text
react, webpack, babel,
react-router, react-redux,
styled-component, material ui,
dotenv
```

- 관련 포스팅: [[React] 환경설정 제대로 알고 하기 (without CRA)](https://egg-programmer.tistory.com/259)

#### ② 컴포넌트 구조 설계

- `views`: 라우터로 구분되는 페이지들
- `components`: 재사용 컴포넌트
- `style`: 재사용 스타일(Text, Button, ...)
- `hooks`: 리액트 함수 컴포넌트 안에서 사용하는 재사용 함수들
- `modules`: 리덕스 액션 객체들
- `lib`: 각종 재사용 일반 함수들

```text
.
├── App.jsx
├── lib
├── components
│   ├── CommentViewBox
│   ├── FilterButton
│   ├── InputBox
│   └── NavigationButton
├── hooks
├── index.jsx
├── modules
├── style
└── views
    ├── CreateIssuePage
    ├── CreateMilestonePage
    ├── IssueDetailPage
    ├── IssueListPage
    ├── LabelListPage
    ├── LoginPage
    ├── MilestonePage
    └── SignupPage
```

### 3. 협업 방식

#### ① Ground Rule 설정

- Commit Message 컨벤션 지정
- branch, directory, branch, issue 규칙 지정
- 스크럼, 회고 일정 시간에 진행
- 페어와는 이슈로 컨벤션 의논을 통해 컨벤션 지정

<img width="805" alt="Screen Shot 2020-08-20 at 23 52 05" src="https://user-images.githubusercontent.com/30427711/90787876-28ca9a80-e340-11ea-9ec7-9f4df2e45f2f.png">

#### ② 페어와의 상호 리뷰 진행

- 분담작업을 할 때 상호 리뷰를 진행하여 의견을 나누고 다르게 생각하는 부분을 절충함.

<img width="880" alt="iShot2020-08-2018 31 02" src="https://user-images.githubusercontent.com/30427711/90789452-e86c1c00-e341-11ea-92ee-f2033532ffe5.png">

#### ③ 위키를 활용하여 주간 계획/회고 진행

- [위키 링크](https://github.com/codesquad-member-2020/issue-tracker-08/wiki)

<img width="200" alt="Screen Shot 2020-08-21 at 0 14 18" src="https://user-images.githubusercontent.com/30427711/90790643-43524300-e343-11ea-9a7a-e9c2a5b7cefd.png">

- n주차 계획과 회고를 진행하며 부족했던 점과 컨디션에 대해 돌아볼 수 있었다.
- 계획했던 내용을 왜 실행하지 않았는지에 대한 이유도 기록하여 명확하게 할 수 있도록 했다.
  - [로컬스토리지 미사용](<https://github.com/codesquad-member-2020/issue-tracker-08/wiki/%5BFE%5D-5%EC%A3%BC%EC%B0%A8-%EC%A7%84%ED%96%89-%EA%B2%B0%EA%B3%BC-(%EC%BD%94%EB%A9%98%ED%8A%B8,-%EC%9D%B4%EC%8A%88-%EA%B8%B0%EB%8A%A5-%EC%A7%84%ED%96%89)#6-%EB%A1%9C%EC%BB%AC%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EB%AF%B8%EC%82%AC%EC%9A%A9>)

### 4. 학습 내용

#### Webpack 환경 설정 직접 구성

- 📝 [[React] 환경설정 제대로 알고 하기 (without CRA)](https://egg-programmer.tistory.com/259)

#### 재사용 컴포넌트, 재사용 스타일 중점 사용

- 📝 [리액트에 글로벌 스타일 적용하기](https://egg-programmer.tistory.com/226?category=915627)
- 📝 [스타일 테마 작업](https://github.com/codesquad-member-2020/issue-tracker-08/pull/19)

#### redux thunk

- 📝 [redux-thunk, redux-actions 적용 코드 설명](<https://github.com/codesquad-member-2020/issue-tracker-08/wiki/%5BFE%5D-2%EC%A3%BC%EC%B0%A8-%EC%A7%84%ED%96%89-%EA%B2%B0%EA%B3%BC-(API-%EC%97%B0%EA%B2%B0)>)
