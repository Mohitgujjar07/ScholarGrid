@echo off
title ScholarGrid
cd /d "%~dp0"

REM Open the website in the default browser after the server starts
start "" cmd /c "timeout /t 2 >nul & start http://localhost:3001/index.html"

where npx >nul 2>nul
if %errorlevel%==0 (
  echo Starting ScholarGrid at http://localhost:3001/  ^(close this window to stop^)
  npx --yes serve -l 3001 .
) else (
  echo Starting ScholarGrid at http://localhost:3001/  ^(close this window to stop^)
  python -m http.server 3001
)
