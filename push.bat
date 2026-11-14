@echo off
title Push ScholarGrid to GitHub
cd /d "%~dp0"
set PATH=C:\tools\mingit\cmd;%PATH%

echo ========================================================
echo Pushing ScholarGrid to GitHub (Mohitgujjar07/ScholarGrid)
echo ========================================================
echo.

git push -u origin main
if %errorlevel% equ 0 (
  echo.
  echo [SUCCESS] Successfully pushed all files to GitHub!
  goto done
)

echo.
echo ========================================================
echo [AUTH NEEDED] GitHub requires your credentials:
echo 1. Generate a GitHub Personal Access Token (PAT):
echo    https://github.com/settings/tokens
echo    (Check the 'repo' scope)
echo 2. Enter your token below to push:
echo ========================================================
echo.
set /p GHTOKEN="Enter GitHub Token: "
if "%GHTOKEN%"=="" goto done

git push https://%GHTOKEN%@github.com/Mohitgujjar07/ScholarGrid.git main
if %errorlevel% equ 0 (
  echo.
  echo [SUCCESS] Pushed successfully to GitHub!
)

:done
echo.
pause
