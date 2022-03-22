# 로컬에서 DB 연결

## 1. ts_shampoo-server 레포지토리 clone 후 develop 브랜치로 checkout

## 2. 최상단 경로에 env 파일 추가

## 3. VSCODE 확장 프로그램 MySQL 설치 (화려한 아이콘!)

## 4. env 파일 내 DB 정보 참고해서 MySQL 커넥션

    1. VSCODE 왼쪽에 생긴 MySQL 아이콘 클릭
    2. + 버튼 클릭
    3. MySQL 탭에 정보 입력
        - DB_USER = Username
        - DB_PASSWORD = Password
        - DB_HOST = Host
        - DB_PORT = Port
    4. Connect 버튼 클릭

## 5. ts_shampoo-server > docs > start.md 파일 참고해서 명령어 입력

    1. pip install poetry : poetry 설치 (pip 같은 패키지 매니저)
    2. poetry install : 의존성 패키지 설치
    3. poetry shell : 가상환경 접근
    4. python manage.py makemigrations  : ORM 모델 생성
    5. python manage.py migrate : 생성한 ORM 모델로 테이블 생성
