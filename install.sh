#!/bin/bash

# Create a virtual environment
python3 -m venv venv

# Activate the virtual environment
source venv/bin/activate

# Install dependencies
pip install numpy

# Deactivate the virtual environment
deactivate

# Create a desktop shortcut
cat > ~/Desktop/agi-studio.desktop <<EOL
[Desktop Entry]
Version=1.0
Type=Application
Name=AGI Studio
Comment=AGI Studio Suite GODCORE Edition
Exec=$(pwd)/run_studio.py
Icon=$(pwd)/icon.png
Terminal=true
EOL

chmod +x ~/Desktop/agi-studio.desktop

echo "Installation complete. You can find the desktop shortcut on your desktop."
