오픈소스 웹 소프트웨어 - 양영재, 김정호, 김종석

개인이 따로 공부하기 어려웠기에 주기적으로 만남을 가짐

Cotube -> 코드 강의 동영상 커뮤니티, 강의든 자신이 코드를 작성하는 코드 동영상이든 누구든 올릴 수 있음,
다른 사람의 코딩 스타일도 확인 할 수 있고, 코딩 도중 누군가에게 질문할 때 더 쉽게 질문이 가능하도록 코딩하는 동영상을 올리는 커뮤니티

05.22 -> 비디오에 관한 정보(제목, 설명, 해쉬태그)들을 mongoDB에 올리고 검색 가능
    쿠키를 통해서 유저들이 사용하는 브라우저들을 인식, session과 locals를 사용하여 사용자에 대한 정보를 저장 
    -> 쿠키를 MongoStore를 통해 서버에 저장 가능
    간단한 프로필 수정 기능, 비밀번호 수정 및 프로필 사진 추가 예정
    
06.04 -> 설계한 기능 구현 완료

/ -> Home
/join -> 회원가입
/login -> 로그인
/search -> 동영상 검색 기능

/users/edit -> 유저 정보 수정 가능 및 프로필 사진 변경 가능

/videos/watch -> 특정한 동영상 id에 따라서 비디오 시청
/videos/edit -> 동영상 제목 및 설명 등 수정 가능
/videos/delete -> 동영상 삭제 가능
/videos/comments -> 동영상에 댓글 달기 가능
