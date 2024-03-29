# 로컬에서 DB 연결

### 1. ts_shampoo-server 레포지토리 clone 후 develop 브랜치로 checkout

### 2. 최상단 경로에 env 파일 추가
    1. 백엔드 폴더에는 DB 관련 정보가 담긴 env 파일
    2. 클라이언트 폴더에는 구글 클라이언트 키와 base URL 정보가 담긴 env 파일
    3. (이미 DB 서버나 Node 서버가 켜진 상태라면) env 파일 수정 후에는 서버 껐다 키기

### 3. VSCODE 확장 프로그램 MySQL 설치 (화려한 아이콘!)

### 4. env 파일 내 DB 정보 참고해서 MySQL 커넥션

    1. VSCODE 왼쪽에 생긴 MySQL 아이콘 클릭
    2. + 버튼 클릭
    3. MySQL 탭에 정보 입력
        - DB_USER = Username
        - DB_PASSWORD = Password
        - DB_HOST = Host
        - DB_PORT = Port
    4. Connect 버튼 클릭

### 5. ts_shampoo-server > docs > start.md 파일 참고해서 명령어 입력

    1. pip install poetry : poetry 설치 (pip 같은 패키지 매니저)
    2. poetry install : 의존성 패키지 설치
    3. poetry shell : 가상환경 접근
    4. python manage.py makemigrations  : ORM 모델 생성
    5. python manage.py migrate : 생성한 ORM 모델로 테이블 생성
    
### 6. python manage.py runserver 입력해서 서버 실행
    1. 터미널에 http://127.0.0.1:8000/ 주소가 잘 뜨는지 확인
    2. 1번 주소를 ctrl + 클릭해서 스웨거 잘 뜨는지 확인
    3. 리액트로 API 관련 작업 해보고, 에러 뜨면 스웨거에서 테스트 해보기
        - 스웨거에서도 안되면 DB 연결 과정에서 문제가 생겼을 가능성이 큼
        - 스웨거는 되는데 리액트에서 안되면 CORS 에러일 가능성이 큼

### 7. (만약 CORS 에러가 뜬다면) 크롬 확장 프로그램 설치

    1. 설치 주소 : https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=ko
    2. 확장 > ... 아이콘 클릭 > 옵션 > 전체 체크 (4번 옵션은 * 체크)
    3. 확장 > 프로그램 이름 클릭 > 아이콘 클릭해서 기능 ON
    4. 확장 > 프로그램 이름 클릭 > Test CORS 에서 모든 API의 CORS가 해제됐는지 확인
