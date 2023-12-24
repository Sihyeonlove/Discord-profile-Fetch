@echo off
chcp 65001 > nul
cd /d %~dp0
echo 잠시만 기다려주시면 곧 디스코드 API와 연결됩니다...
echo.
REM 디스코드 js 설치
call npm install discord.js^@14.14.1
REM fs 설치
call npm install fs
REM 실행
cd /d %~dp0
node app.js
REM 아무키나 누르세요
pause