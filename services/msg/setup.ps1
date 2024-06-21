# Check if Node.js is installed
$nodePath = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodePath) {
    Write-Host "Node.js is required but not found. Please install Node.js (https://nodejs.org/) and try again."
    Exit 1
}

# Check if http-server is already installed
$httpServerPath = Get-Command http-server -ErrorAction SilentlyContinue
if ($httpServerPath) {
    Write-Host "http-server is already installed."
} else {
    # Install http-server globally
    Write-Host "Installing http-server globally..."
    npm install -g http-server
}

# Create a batch file for automatic startup
Write-Host "Creating startup script for Windows..."
$batFilePath = "$env:USERPROFILE\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\start_pwa_server.bat"
@"
@echo off
cd /d "%~dp0"
http-server -p 8000
"@ | Set-Content -Path $batFilePath -Encoding ASCII

Write-Host "Setup completed successfully."

# Start the server
Write-Host "Starting the server..."
Start-Process http-server -ArgumentList "-p 8000"

# Prompt user to press Enter to close the PowerShell window
Write-Host "Press Enter to exit."
$null = Read-Host
